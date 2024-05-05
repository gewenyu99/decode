"use client";
import Markdoc, { Config, tags } from '@markdoc/markdoc';
import { fence } from './nodes/fence.markdoc';
import { step } from './tags/step.markdoc';
import React from 'react';
import { CodeBlock, Step } from './markdownComponents';

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