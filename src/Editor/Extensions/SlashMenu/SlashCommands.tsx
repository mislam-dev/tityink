import { Command } from '@tiptap/core';

export const SlashCommands = [
  Command({
    name: 'bold',
    command: (editor) => {
      editor.chain().focus().toggleBold().run();
    },
  }),
  Command({
    name: 'italic',
    command: (editor) => {
      editor.chain().focus().toggleItalic().run();
    },
  }),
  Command({
    name: 'underline',
    command: (editor) => {
      editor.chain().focus().toggleUnderline().run();
    },
  }),
  // Add more commands as needed
];