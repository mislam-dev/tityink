import { Editor } from "@tiptap/core";
import {
  AlignLeft,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Strikethrough,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  Underline as UnderlineIcon,
} from "lucide-react";
import * as React from "react";

type BubbleMenuItem = {
  icon: React.ReactNode;
  title: string;
  action: (editor: Editor) => unknown;
  isActive: (editor: Editor) => boolean;
  hasSeparator?: boolean;
};

// Bubble menu = h1..h3, paragraph (default), image, youtubeEmbed, soundcloudEmbed, pdfEmbed
export const BubbleMenuItems: BubbleMenuItem[] = [
  {
    icon: <AlignLeft className="w-4 h-4" />,
    title: "Paragraph",
    action: (editor) => editor.chain().focus().setParagraph().run(),
    isActive: (editor) => editor.isActive("paragraph"),
  },

  {
    icon: <Heading1 className="w-4 h-4" />,
    title: "Heading 1",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    icon: <Heading2 className="w-4 h-4" />,
    title: "Heading 2",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 2 }),
  },
  {
    icon: <Heading3 className="w-4 h-4" />,
    title: "Heading 3",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 3 }),
  },
  {
    icon: <Bold className="w-4 h-4" />,
    title: "Bold",
    action: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive("bold"),
  },
  {
    icon: <UnderlineIcon className="w-4 h-4" />,
    title: "Underline",
    action: (editor) => editor.chain().focus().toggleUnderline().run(),
    isActive: (editor) => editor.isActive("underline"),
  },
  {
    icon: <Italic className="w-4 h-4" />,
    title: "Italic",
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive("italic"),
  },
  {
    icon: <Strikethrough className="w-4 h-4" />,
    title: "Strike",
    action: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive("strike"),
  },
  {
    icon: <SuperscriptIcon className="w-4 h-4" />,
    title: "Superscript",
    action: (editor) => editor.chain().focus().toggleSuperscript().run(),
    isActive: (editor) => editor.isActive("strike"),
  },
  {
    icon: <SubscriptIcon className="w-4 h-4" />,
    title: "Subscript",
    action: (editor) => editor.chain().focus().toggleSubscript().run(),
    isActive: (editor) => editor.isActive("strike"),
  },
];
