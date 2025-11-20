import { Node, mergeAttributes } from '@tiptap/core';

export const ImageEmbed = Node.create({
  name: 'imageEmbed',

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

  renderHTML({ node, HTMLAttributes }) {
    const { src, alt, title } = node.attrs;
    return ['img', mergeAttributes(HTMLAttributes, { src, alt, title })];
  },

  addCommands() {
    return {
      setImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },
});