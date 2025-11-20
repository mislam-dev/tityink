// This file contains type definitions related to the Slash menu.

export type SlashCommand = {
  name: string;
  description: string;
  action: () => void;
};

export type SlashMenuOptions = {
  commands: SlashCommand[];
  onCommandSelect: (command: SlashCommand) => void;
};