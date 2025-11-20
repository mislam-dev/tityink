import { Node } from '@tiptap/core';

export const YoutubeEmbed = Node.create({
  name: 'youtubeEmbed',

  inline: true,

  group: 'inline',

  selectable: false,

  atom: true,

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
    const { src } = node.attrs;
    return ['iframe', { src, frameborder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: true }];
  },

  addCommands() {
    return {
      setYoutubeEmbed:
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