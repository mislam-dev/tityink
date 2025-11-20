import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { createRoot } from "react-dom/client";
import { FloatingUI } from "./FloatingUI";

import { type MenuSuggestionProps } from "./types";
// Define the SlashCommands extension
export const SlashCommands = Extension.create({
  name: "slashCommands",

  addOptions() {
    return {
      suggestion: {
        items: () => [],
        char: "/",
        command: ({
          editor,
          range,
          props,
        }: {
          editor: any;
          range: any;
          props: any;
        }) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});

SlashCommands.configure({
  suggestion: {
    render: () => {
      let reactRenderer: any;
      let popup: HTMLDivElement;

      return {
        onStart: (props: MenuSuggestionProps) => {
          popup = document.createElement("div");
          popup.classList.add("slash-commands-popup");
          document.body.appendChild(popup);

          const { editor, clientRect, items } = props;

          // Position the popup near the cursor
          popup.style.position = "absolute";
          if (clientRect) {
            const { top, left } = clientRect();
            popup.style.left = `${left}px`;
            popup.style.top = `${top + 24}px`;
            popup.style.zIndex = "100";
          }

          // Use our custom UI component
          reactRenderer = createRoot(popup);
          reactRenderer.render(<FloatingUI editor={editor} items={items} />);
        },
        onUpdate: (props: MenuSuggestionProps) => {
          const { clientRect, editor, items } = props;

          // Update position when typing
          if (clientRect) {
            const { top, left } = clientRect();
            popup.style.left = `${left}px`;
            popup.style.top = `${top + 24}px`;
          }

          reactRenderer.render(<FloatingUI editor={editor} items={items} />);
        },

        onExit: () => {
          if (popup && document.body.contains(popup)) {
            reactRenderer.unmount();
            document.body.removeChild(popup);
          }
        },
      };
    },
  },
});
