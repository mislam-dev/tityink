import React from 'react';
import { Editor } from '@tiptap/react';

type FloatingMenuProps = {
  editor: Editor;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
};

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ editor, showMenu, setShowMenu }) => {
  if (!showMenu) return null;

  return (
    <div className="floating-menu">
      {/* Add your menu items here */}
      <button
        onClick={() => {
          editor.chain().focus().toggleBold().run();
          setShowMenu(false);
        }}
      >
        Bold
      </button>
      <button
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
          setShowMenu(false);
        }}
      >
        Italic
      </button>
      {/* Add more formatting options as needed */}
    </div>
  );
};