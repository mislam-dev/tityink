import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";
import { useState } from "react";
import { Button } from "../../ui/Button";

export const SoundCloudNodeView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
}) => {
  const [src, setSrc] = useState(node.attrs.src || "");
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || !inputValue.includes("soundcloud.com")) {
      setIsError(true);
      return;
    }

    const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      inputValue
    )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
    setSrc(embedUrl);
    updateAttributes({ src: embedUrl });
  };

  if (src) {
    return (
      <NodeViewWrapper as="div" className="soundcloud-embed">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
        />
      </NodeViewWrapper>
    );
  }

  return (
    <NodeViewWrapper as="div" className="soundcloud-input">
      <form onSubmit={handleSubmit} className="p-4 flex gap-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Paste SoundCloud URL"
            value={inputValue}
            className="editorInput"
            onChange={(e) => {
              setIsError(false);
              setInputValue(e.target.value);
            }}
          />
          <small className="text-red-500">
            {isError && "Please enter a valid SoundCloud URL"}
          </small>
        </div>
        <Button type="submit">Embed</Button>
      </form>
    </NodeViewWrapper>
  );
};
