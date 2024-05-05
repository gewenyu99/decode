"use client";
import { StoryFiles } from "./storyFiles";
import { StoryText } from "./storyText";
import React, { createContext, useState } from "react";

interface SelectedContextProps {
    selectedFile: string;
    selectedLine: number[];
}

export const SelectedContext = createContext<SelectedContextProps>({
    selectedFile: "",
    selectedLine: [] as number[],
    setSelectedFile: () => {},
    setSelectedLine: () => {},
});

interface SelectedContextProps {
    selectedFile: string;
    selectedLine: number[];
    setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
    setSelectedLine: React.Dispatch<React.SetStateAction<number[]>>;
}

interface StoryLayoutProps {
    rawText: string;
    files: { fileName: string; fileContent: string }[];
}

export function StoryLayout({ rawText, files }: StoryLayoutProps) {
    const [selectedFile, setSelectedFile] = useState(files[0].fileName);
    const [selectedLine, setSelectedLine] = useState([] as number[]);

    return (
        <SelectedContext.Provider value={{ selectedFile, selectedLine, setSelectedFile, setSelectedLine }}>
            <div className="container flex h-screen py-2 content-center">
                <div className="w-1/3 h-full">
                    <StoryText rawText={rawText} />
                </div>
                <div className="w-2/3 h-full">
                    <StoryFiles files={files} />
                </div>
            </div>
        </SelectedContext.Provider>
    );
}