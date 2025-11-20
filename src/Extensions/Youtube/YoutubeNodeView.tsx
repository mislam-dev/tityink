import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";
import { useState } from "react";
import { Button } from "../../ui/Button";

export const YoutubeNodeView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
}) => {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(!!node.attrs.src);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoIdMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
    );
    const videoId = videoIdMatch?.[1];

    if (!videoId) {
      setIsError(true);
      return;
    }

    updateAttributes({ src: videoId });
    setSubmitted(true);
  };

  if (submitted && node.attrs.src) {
    return (
      <NodeViewWrapper as="div" className="youtube-embed">
        <iframe
          width="100%"
          height="315px"
          src={`https://www.youtube.com/embed/${node.attrs.src}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: 400 }}
        />
      </NodeViewWrapper>
    );
  }

  return (
    <NodeViewWrapper as="div" className="youtube-input">
      <form onSubmit={handleSubmit} className="p-4 flex gap-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Paste YouTube URL"
            value={url}
            onChange={(e) => {
              setIsError(false);
              setUrl(e.target.value);
            }}
            className="editorInput"
          />
          <small className="text-red-500">
            {isError && "Please enter a valid Youtube URL"}
          </small>
        </div>
        <Button type="submit">Embed</Button>
      </form>
    </NodeViewWrapper>
  );
};
