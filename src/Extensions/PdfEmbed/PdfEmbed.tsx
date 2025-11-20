import { Node } from '@tiptap/core';

export const PdfEmbed = Node.create({
  name: 'pdfEmbed',

  inline: true,
  group: 'inline',
  selectable: false,

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
        tag: 'iframe[src][width][height]',
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'iframe',
      {
        src: node.attrs.src,
        width: '100%',
        height: '500px',
        frameborder: '0',
        allow: 'autoplay; encrypted-media',
      },
    ];
  },

  addCommands() {
    return {
      setPdfEmbed:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});