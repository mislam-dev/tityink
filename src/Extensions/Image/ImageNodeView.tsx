import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";
import { useState } from "react";
import { Button } from "../../ui/Button";

export const CustomImageNodeView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
}) => {
  const [submitted, setSubmitted] = useState(!!node.attrs.src);
  const [fileSrc, setFileSrc] = useState("");
  const [url, setUrl] = useState(node.attrs.url || "");
  const [src, setSrc] = useState(node.attrs.src || "");
  const [isError, setIsError] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const base64 = await toBase64(file);
      setFileSrc(base64);
      setSrc(base64);
      updateAttributes({ src: base64, url }); // keep the url but prioritize file
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const newUrl = e.target.value;
    setUrl(newUrl);
    updateAttributes({ url: newUrl });
    if (!fileSrc) {
      setSrc(newUrl);
      updateAttributes({ src: newUrl });
    }
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fileSrc && !url && !src) {
      setIsError(true);
      return;
    }
    setSubmitted(true);
  };

  if (submitted && node.attrs.src) {
    return (
      <NodeViewWrapper as="div" className="image-embed">
        {src && (
          <img
            src={src}
            alt="Embedded"
            style={{ maxWidth: "100%", border: "1px solid #ccc" }}
          />
        )}
      </NodeViewWrapper>
    );
  }

  return (
    <NodeViewWrapper as="div" className="youtube-input">
      <div>
        <form onSubmit={submitHandler} className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
            className="editorInput"
          />
          <p>or</p>
          <input
            type="file"
            placeholder="Input email"
            onChange={handleFileChange}
            className="editorInput"
          />
          <Button type="submit">Add</Button>
        </form>
        <small className="text-red-500">
          {isError && "You must input a url or upload a file"}
        </small>
      </div>
    </NodeViewWrapper>
  );
};
