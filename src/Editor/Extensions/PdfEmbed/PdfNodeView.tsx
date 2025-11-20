import { Node, NodeView } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import PdfEmbed from './PdfEmbed';

export const PdfNodeView = Node.create({
  name: 'pdfEmbed',

  inline: true,

  group: 'inline',

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe[src]',
      },
    ];
  },

  renderHTML({ node }) {
    return ['iframe', { src: node.attrs.src, frameborder: '0', allow: 'fullscreen' }];
  },

  addNodeView() {
    return ReactNodeViewRenderer(PdfEmbed);
  },
});