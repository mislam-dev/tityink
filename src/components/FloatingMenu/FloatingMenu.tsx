import { Editor } from "@tiptap/core";
import { FloatingMenu as TiptapFloatingMenu } from "@tiptap/react";
import { Plus } from "lucide-react";
import React, { type Dispatch, type SetStateAction } from "react";
import { SlashMenuItems } from "../../data/SlashMenu";
import { cn } from "../../utility/cn";

export const FloatingMenu: React.FC<{
  editor: Editor;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ editor, showMenu, setShowMenu }) => {
  const removeSlash = (editor: Editor) => {
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
  return (
    <div>
      <TiptapFloatingMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        //   className={cn("", !showMenu && "opacity-70 hover:opacity-100")}
      >
        {!showMenu ? (
          <button
            onClick={() => setShowMenu(true)}
            className={cn(
              "editor-plus-button absolute -left-10 -top-2 ",
              !showMenu && "opacity-70 hover:opacity-100"
            )}
            title="Add content block"
          >
            <Plus size={18} />
          </button>
        ) : (
          <div
            className={cn(
              "bg-white mt-10 border border-gray-300 w-80 shadow-sm rounded max-h-80 overflow-y-auto overflow-x-hidden absolute -left-11 -top-4",
              !showMenu && "opacity-70 hover:opacity-100"
            )}
          >
            <div>
              <div className="px-3 py-2 text-xs font-medium text-stone-500">
                BLOCKS
              </div>
              <div className="py-1">
                {SlashMenuItems.map((item) => (
                  <button
                    key={Math.random()}
                    className="flex items-center w-full px-3 py-1.5 text-sm text-left hover:bg-stone-100"
                    onClick={() => {
                      removeSlash(editor);
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
        )}
      </TiptapFloatingMenu>
    </div>
  );
};
