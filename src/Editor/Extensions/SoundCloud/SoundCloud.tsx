import { Node, mergeAttributes } from '@tiptap/core';

export const SoundCloud = Node.create({
  name: 'soundCloud',

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
        tag: 'iframe[src*="soundcloud.com"]',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const { src } = node.attrs;
    return ['iframe', mergeAttributes(HTMLAttributes, { src, frameborder: 'no', allow: 'autoplay', allowfullscreen: true }), ''];
  },

  addCommands() {
    return {
      setSoundCloud: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },
});