"use client";

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/markdoc/markdownComponents/CodeBlock"
import { getFileExtension, mapPrismLanguage } from "@/markdoc/nodes"
import { parseMarkdown } from "@/markdoc/render"
import React, { createContext, useContext, useState } from "react"
import { SelectedContext } from "./storyLayout";

export interface File {
    fileName: string;
    fileContent: string;
}

interface StoryFilesProps {
    files: File[];
}

// Create a context for the selected file
export function StoryFiles({ files }: StoryFilesProps) {
    const {
        selectedFile,
        setSelectedFile,
    } = useContext(SelectedContext)

    return (
        <div className="flex flex-col h-full">
            <div className="flex border-x border-t">
                {files.map((file, index) => (
                    <Button
                        variant={selectedFile === file.fileName ? "secondary" : "outline"}
                        key={index}
                        onClick={() => setSelectedFile(file.fileName)}
                        className={`rounded-none border-x border-y-0`}
                    >
                        {file.fileName}
                    </Button>
                ))}
            </div>
            <div className="flex-grow">
                {files.map((file, index) => (
                    <div key={index} className={selectedFile === file.fileName ? "block h-full" : "hidden"}>
                        <CodeBlock
                            language={mapPrismLanguage(getFileExtension(file.fileName))}
                        >
                            {file.fileContent}
                        </CodeBlock>
                    </div>
                ))}
            </div>
        </div>
    )
}
