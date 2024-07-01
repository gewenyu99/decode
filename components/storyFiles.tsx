"use client";

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/markdoc/markdownComponents/CodeBlock"
import { getFileExtension, mapPrismLanguage } from "@/markdoc/nodes"
import { parseMarkdown } from "@/markdoc/parseMarkdown"
import React, { createContext, useContext, useEffect, useState } from "react"
import { SelectedContext } from "./storyLayout";
import { ScrollArea } from "./ui/scroll-area";

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
    } = useContext(SelectedContext)

    const [selectedFileTab, setSelectedFileTab] = useState<string>(files[0].fileName);

    useEffect(() => {
        setSelectedFileTab(selectedFile);
    }, [selectedFile]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex border-x border-y block">
                {files.map((file, index) => (
                    <Button
                        variant={selectedFileTab === file.fileName ? "secondary" : "outline"}
                        key={index}
                        onClick={() => setSelectedFileTab(file.fileName)}
                        className={`rounded-none border-x-0 border-y-0`}
                    >
                        {file.fileName}
                    </Button>
                ))}
            </div>
            {files.map((file, index) => (
                <div key={index} className={
                    selectedFileTab === file.fileName ?
                        "h-full min-h-0 flex overflow-scroll border-x border-b" :
                        "hidden"
                }>
                    <CodeBlock
                        language={mapPrismLanguage(getFileExtension(file.fileName))}
                        file={file.fileName}
                    >
                        {file.fileContent}
                    </CodeBlock>
                </div>
            ))}
        </div>
    )
}
