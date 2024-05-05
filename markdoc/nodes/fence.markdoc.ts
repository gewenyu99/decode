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
    case 'vue':
      return 'html';
    case 'svelte':
      return 'html';
    // Add more mappings for other popular languages here
    case 'java':
      return 'java';
    case 'python':
      return 'python';
    case 'c':
      return 'c';
    case 'cpp':
      return 'cpp';
    case 'ruby':
      return 'ruby';
    case 'php':
      return 'php';
    case 'go':
      return 'go';
    case 'rust':
      return 'rust';
    case 'swift':
      return 'swift';
    case 'kotlin':
      return 'kotlin';
    case 'scala':
      return 'scala';
    case 'perl':
      return 'perl';
    case 'bash':
      return 'bash';
    case 'powershell':
      return 'powershell';
    case 'r':
      return 'r';
    default:
      return 'plaintext';
  }
}