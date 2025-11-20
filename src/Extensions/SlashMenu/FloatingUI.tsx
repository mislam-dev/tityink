import { Editor } from "@tiptap/core";
import { useEffect, useRef } from "react";
import type { MenuItem } from "./types";

export const FloatingUI = ({
  editor,
  items,
}: {
  editor: Editor;
  items: MenuItem[];
}) => {
  const removeSlashFromCode = (editor: Editor) => {
    const { from } = editor.state.selection;
    const $from = editor.state.doc.resolve(from);
    const lineStart = $from.start();
    const currentLineText = editor.state.doc.textBetween(lineStart, from, "\n");

    const slashPos = currentLineText.lastIndexOf("/");
    if (slashPos !== -1) {
      const start = lineStart + slashPos;
      editor.commands.deleteRange({ from: start, to: from });
    }
  };

  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Close the menu by triggering ESC press
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="custom-slash-menu bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden w-64"
      ref={menuRef}
    >
      <div className="max-h-60 overflow-y-auto p-1">
        <div className="px-3 py-2 text-xs font-medium text-stone-500">
          BLOCKS
        </div>
        <div className="py-1">
          {items.map((item) => (
            <button
              key={Math.random()}
              className="flex items-center w-full px-3 py-1.5 text-sm text-left hover:bg-stone-100"
              onClick={() => {
                removeSlashFromCode(editor);
                item.action(editor);
              }}
            >
              <div className="flex items-center justify-center w-5 h-5 mr-2 text-stone-600">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
