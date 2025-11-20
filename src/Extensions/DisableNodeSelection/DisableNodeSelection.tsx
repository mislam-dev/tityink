import { Extension } from "@tiptap/core";
import { Plugin } from "prosemirror-state";

export const DisableNodeSelection = Extension.create({
  name: "disableNodeSelection",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          nodeViews: {},
          handleDOMEvents: {
            mousedown: () => {
              setTimeout(() => {
                document
                  .querySelectorAll(".ProseMirror-selectednode")
                  .forEach((node) => {
                    if (node instanceof HTMLElement) {
                      node.style.outline = "none";
                      node.style.border = "none";
                      node.style.boxShadow = "none";
                      node.classList.remove("ProseMirror-selectednode");
                    }
                  });
              }, 0);
              return false;
            },
          },
        },
      }),
    ];
  },
});
