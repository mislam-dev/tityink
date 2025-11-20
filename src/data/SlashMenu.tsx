import {
  AlignLeft,
  AudioLines,
  Code,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  List,
  ListOrdered,
  Youtube as YoutubeIcon,
} from "lucide-react";
import { type MenuItem } from "../Extensions/SlashMenu";

export const SlashMenuItems: MenuItem[] = [
  {
    icon: <AlignLeft className="w-4 h-4" />,
    title: "Paragraph",
    action: (editor) => editor.chain().focus().setParagraph().run(),
  },

  {
    icon: <Heading1 className="w-4 h-4" />,
    title: "Heading 1",
    action: (editor) => editor.chain().focus().setHeading({ level: 1 }).run(),
  },
  {
    icon: <Heading2 className="w-4 h-4" />,
    title: "Heading 2",
    action: (editor) => editor.chain().focus().setHeading({ level: 2 }).run(),
  },
  {
    icon: <Heading3 className="w-4 h-4" />,
    title: "Heading 3",
    action: (editor) => editor.chain().focus().setHeading({ level: 3 }).run(),
  },
  {
    icon: <List className="w-4 h-4" />,
    title: "Bullet List",
    action: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    icon: <ListOrdered className="w-4 h-4" />,
    title: "Ordered List",
    action: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    icon: <Code className="w-4 h-4" />,
    title: "Code",
    action: (editor) => editor.chain().focus().setCodeBlock().run(),
  },
  {
    icon: <ImageIcon className="w-4 h-4" />,
    title: "Image",
    action: (editor) =>
      editor
        .chain()
        .focus()
        .insertContent([{ type: "image" }, { type: "paragraph" }])
        .run(),
  },
  {
    icon: <YoutubeIcon className="w-4 h-4" />,
    title: "Youtube",
    action: (editor) => {
      editor
        ?.chain()
        .focus()
        .insertContent([{ type: "youtube" }, { type: "paragraph" }])
        .run();
    },
  },
  {
    icon: <AudioLines className="w-4 h-4" />,
    title: "SoundCloud",
    action: (editor) =>
      editor
        ?.chain()
        .focus()
        .insertContent([{ type: "soundcloud" }, { type: "paragraph" }])
        .run(),
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: "PDF",
    action: (editor) =>
      editor
        ?.chain()
        .focus()
        .insertContent([{ type: "pdfEmbed" }, { type: "paragraph" }])
        .run(),
  },
];
