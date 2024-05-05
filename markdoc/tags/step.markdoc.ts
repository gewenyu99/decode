import { Step } from '../markdownComponents/Step';
import { NodeType } from '../nodeTypes';
export const step = {
  render: Step,
  description: 'Display the enclosed content in a callout box',
  children: [...Object.values(NodeType)],
  attributes: {
    file: {
      type: String,
      description: 'The file referenced by this block',
    },
    lines: {
      type: String,
      description: 'The lines referenced by this block',
    },
  },
};