import Youtube from "@tiptap/extension-youtube";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { YoutubeNodeView } from "./YoutubeNodeView";

export const CustomYoutubeEmbed = Youtube.extend({
  addNodeView() {
    return ReactNodeViewRenderer(YoutubeNodeView);
  },
});
