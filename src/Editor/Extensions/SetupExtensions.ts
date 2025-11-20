import { Extension } from '@tiptap/core';
import { Image } from './Image';
import { PdfEmbed } from './PdfEmbed';
import { SoundCloud } from './SoundCloud';
import { Youtube } from './Youtube';
import { DisableNodeSelection } from './DisableNodeSelection';

export const SetupExtensions = [
  Image,
  PdfEmbed,
  SoundCloud,
  Youtube,
  DisableNodeSelection,
];