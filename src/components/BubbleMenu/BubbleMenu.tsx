import { Editor, BubbleMenu as TiptapBubbleMenu } from "@tiptap/react";
import { BubbleMenuItems } from "../../data/BubbleMenu";

export const BubbleMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <div>
      <TiptapBubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="flex overflow-hidden rounded border border-stone-200 bg-white shadow-md"
      >
        {BubbleMenuItems.map((bubbleMenuItem) => (
          <button
            key={Math.random()}
            onClick={() => bubbleMenuItem.action(editor)}
            className={`p-2 text-stone-600 hover:bg-stone-100 ${
              bubbleMenuItem.isActive(editor)
                ? "bg-stone-100 text-stone-900"
                : ""
            }`}
          >
            {bubbleMenuItem.icon}
          </button>
        ))}
      </TiptapBubbleMenu>
    </div>
  );
};
