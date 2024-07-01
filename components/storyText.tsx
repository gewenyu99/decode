"use client";
import Markdoc from "@markdoc/markdoc";
import React, { useContext } from "react";
import { SelectedContext } from "./storyLayout";
import { parseFrontmatter, parseMarkdown } from "@/markdoc/parseMarkdown";

interface StoryTextProps {
    rawText: string;
}

export function StoryText({ rawText }: StoryTextProps) {
    const frontmatter = parseFrontmatter(rawText);
    return (
        <div className="overflow-y-scroll max-h-full pb-16 prose dark:prose-invert">
            <h1>{frontmatter.title}</h1>

            {parseMarkdown(rawText)}
        </div>
    )
}
