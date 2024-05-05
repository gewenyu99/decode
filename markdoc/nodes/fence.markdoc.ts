import {nodes} from '@markdoc/markdoc';
import { CodeBlock } from '../markdownComponents/CodeBlock';

export const fence = {
  render: CodeBlock,
  attributes: nodes.fence.attributes,
};

export const getFileExtension = (fileName: string) => {
  const parts = fileName.split('.');
  return parts[parts.length - 1];
}

export const mapPrismLanguage = (extension: string) => {
  switch (extension) {
    case 'js':
      return 'javascript';
    case 'ts':
      return 'typescript';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    // Add more cases for other file extensions and their corresponding Prism language types
    default:
      return 'plaintext';
  }
}