"use client";
import { type ParseOptions } from "@tiptap/pm/model";
import {
  Editor,
  EditorContent,
  type Extensions as ExtensionsType,
  useEditor,
  type UseEditorOptions,
} from "@tiptap/react";
import { useEffect, useState } from "react";
import { BubbleMenu } from "./components/BubbleMenu";
import { FloatingMenu } from "./components/FloatingMenu";
import { Extensions } from "./Extensions";

export type CustomEditorProps = {
  extensions?: ExtensionsType;
  editable?: boolean; // default true
  immediatelyRender?: boolean; // default false

  editor?: {
    element?: Element | undefined;
    parseOptions?: ParseOptions | undefined;
    onUpdate?: UseEditorOptions["onUpdate"];
  };
  getEditor?: (editor: Editor) => unknown;
};

export function CustomEditor(props: CustomEditorProps) {
  const {
    editor: editorProps = {},
    getEditor,
    immediatelyRender = false,
    editable = true,
    extensions = [],
  } = props;
  const [showMenu, setShowMenu] = useState(true);

  const editor = useEditor({
    extensions: [...Extensions, ...extensions],
    editorProps: {
      attributes: {
        class:
          "prose prose-stone dark:prose-invert max-w-none focus:outline-none min-h-[500px] p-6 prose-p:my-3 prose-headings:mb-4 prose-headings:mt-6",
      },
    },
    editable,
    immediatelyRender,
    ...editorProps,
  });

  useEffect(() => {
    if (editor && getEditor) {
      getEditor(editor);
    }
  }, [editor, getEditor]);

  if (!editor) return null;

  return (
    <div className="relative px-3">
      <EditorContent
        editor={editor}
        onFocus={() => {
          setShowMenu(false);
        }}
      />

      <BubbleMenu editor={editor} />
      <FloatingMenu
        editor={editor}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}
