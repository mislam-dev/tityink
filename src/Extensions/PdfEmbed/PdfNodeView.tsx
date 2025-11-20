import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";
import { useState } from "react";

export const PdfNodeView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
}) => {
  const [src, setSrc] = useState(node.attrs.src || "");
  const [isError, setIsError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setSrc(url);
      updateAttributes({ src: url });
      setIsError(true);
    } else {
      setIsError(true);
    }
  };

  if (src) {
    return (
      <NodeViewWrapper as="div" className="pdf-embed">
        <iframe
          src={src}
          width="100%"
          height="500px"
          style={{ border: "none" }}
        />
      </NodeViewWrapper>
    );
  }

  return (
    <NodeViewWrapper as="div" className="pdf-upload">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="editorInput"
      />

      <small className="text-red-500">
        {isError && "You must select a valid pdf file"}
      </small>
    </NodeViewWrapper>
  );
};
