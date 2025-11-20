import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { SoundCloudNodeView } from "./SoundCloudNodeView";

export const SoundCloud = Node.create({
  name: "soundcloud",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [{ tag: 'iframe[src*="soundcloud.com"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["iframe", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SoundCloudNodeView);
  },
});
