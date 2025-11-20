import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { CustomImageNodeView } from "./ImageNodeView";

export const CustomImageEmbed = Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomImageNodeView);
  },
});
