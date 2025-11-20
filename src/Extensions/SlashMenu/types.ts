import { Editor } from "@tiptap/core";

export type MenuSuggestionProps = {
  editor: any;
  items: MenuItem[];
  command: (props: any) => void;
  clientRect: () => DOMRect;
  range: any;
  event?: KeyboardEvent;
};

export type MenuItem = {
  icon: React.ReactNode;
  title: string;
  action: (editor: Editor) => unknown;
};
