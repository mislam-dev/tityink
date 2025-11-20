import { Node, NodeView } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ImageEmbed from './ImageEmbed';

export const ImageNodeView = Node.create({
  name: 'image',

  inline: true,

  group: 'inline',

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ node }) {
    const { src, alt, title } = node.attrs;
    return ['img', { src, alt, title }];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageEmbed);
  },
});