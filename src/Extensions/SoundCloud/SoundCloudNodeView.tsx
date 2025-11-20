import { NodeViewWrapper } from '@tiptap/react';
import React from 'react';

export const SoundCloudNodeView = (props) => {
  const { node } = props;

  return (
    <NodeViewWrapper>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${node.attrs.src}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false`}
      />
    </NodeViewWrapper>
  );
};