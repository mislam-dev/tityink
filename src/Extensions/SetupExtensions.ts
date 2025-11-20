import { type Extensions as ExtensionsType } from "@tiptap/core";
import CodeBlock from "@tiptap/extension-code-block";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { SlashMenuItems } from "../data/SlashMenu";
import { DisableNodeSelection } from "./DisableNodeSelection";
import { Image } from "./Image";
import { Pdf } from "./PdfEmbed";
import { SlashCommands } from "./SlashMenu";
import { SoundCloud } from "./SoundCloud";
import { Youtube } from "./Youtube";

export const Extensions: ExtensionsType = [
  StarterKit.configure({
    heading: { levels: [1, 2, 3] },
  }),
  Placeholder.configure({
    placeholder: "Start writing...",
    emptyEditorClass: "is-editor-empty",
    emptyNodeClass: "is-node-empty",
  }),
  DisableNodeSelection,
  Underline,
  Link,
  Superscript,
  Subscript,
  CodeBlock,
  SlashCommands.configure({
    suggestion: {
      items: SlashMenuItems,
    },
  }),
  SoundCloud,
  Pdf,
  Youtube,
  Image,
];
