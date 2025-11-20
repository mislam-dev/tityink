import { NodeViewWrapper } from '@tiptap/react';
import React from 'react';

const YoutubeNodeView = ({ node, updateAttributes }) => {
  const { src } = node.attrs;

  return (
    <NodeViewWrapper>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </NodeViewWrapper>
  );
};

export default YoutubeNodeView;