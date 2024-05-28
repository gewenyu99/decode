import Markdoc, { Config, tags } from '@markdoc/markdoc';
import { fence } from './nodes/fence.markdoc';
import { step } from './tags/step.markdoc';
import React from 'react';
import { CodeBlock, Step } from './markdownComponents';

import yaml from 'js-yaml'; // or 'toml', etc.

const config: Config = {
  nodes: {
    fence: {
      render: 'code',
      attributes: fence.attributes
    },
  },
  tags: {
    step: {
      render: "Step",
      description: step.description,
      children: step.children,
      attributes: step.attributes,
    },
  },
};

export function parseMarkdown(raw: string) {
    const ast = Markdoc.parse(raw);
    const content = Markdoc.transform(ast, config);

    const html = Markdoc.renderers.react(content,  React, { 
      components: {
        Step: Step,
        CodeBlock: CodeBlock,
      }
     });
    return <div className='prose dark:prose-invert'>{html}</div>;
}

export function parseFrontmatter(raw: string): DecodeFrontmatter {
    const ast = Markdoc.parse(raw);
    const frontmatter: DecodeFrontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter) as DecodeFrontmatter
    : {
        title: '',
        date: '',
        files: [],
    }; // Add a colon here

    return frontmatter;
}

export type DecodeFrontmatter = {
    title: string;
    date: string;
    files: string[];
};