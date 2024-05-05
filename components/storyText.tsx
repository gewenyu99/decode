"use client";
import Markdoc from "@markdoc/markdoc";
import React, { useContext } from "react";
import { SelectedContext } from "./storyLayout";
import { parseMarkdown } from "@/markdoc/render";

interface StoryTextProps {
    rawText: string;
}

export function StoryText({ rawText }: StoryTextProps) {

    const {
        setSelectedFile,
        setSelectedLine
    } = useContext(SelectedContext)

    return (
        parseMarkdown(rawText)
    )
}
