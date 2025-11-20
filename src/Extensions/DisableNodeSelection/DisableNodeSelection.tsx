import { Node } from "@tiptap/core";

export const DisableNodeSelection = Node.create({
  name: "disableNodeSelection",

  addCommands() {
    return {
      disableNodeSelection:
        () =>
        ({ commands }) => {
          return commands.setNode("disableNodeSelection");
        },
    };
  },

  addNodeView() {
    return {
      // Prevent selection of this node
      selectNode: () => false,
    };
  },
});

export default DisableNodeSelection;
