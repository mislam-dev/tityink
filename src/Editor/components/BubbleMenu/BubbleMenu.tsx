import React from 'react';
import { Editor } from '@tiptap/react';

type BubbleMenuProps = {
  editor: Editor;
};

export const BubbleMenu: React.FC<BubbleMenuProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const isActive = (command: string) => {
    return editor.isActive(command);
  };

  const toggleBold = () => {
    editor.chain().focus().toggleBold().run();
  };

  const toggleItalic = () => {
    editor.chain().focus().toggleItalic().run();
  };

  return (
    <div className="bubble-menu">
      <button
        onClick={toggleBold}
        className={isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={toggleItalic}
        className={isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      {/* Add more formatting options as needed */}
    </div>
  );
};