
'use client';

import { SelectedContext } from "@/components/storyLayout";
import React, { useContext } from "react";

export function Step({ children, lines, file }: { children: React.ReactNode; lines: string; file: string }) {
    const {
        setSelectedFile,
        setSelectedLine,
    } = useContext(SelectedContext);

    const handleMouseOver = () => {
        const parsedLines = lines.split(",").flatMap((line) => {
            if (line.includes("-")) {
                const [start, end] = line.split("-");
                return Array.from({
                    length: parseInt(end) - parseInt(start) + 1
                }, (_, i) => parseInt(start) + i);
            }
            else {
                return [parseInt(line)];
            }
        });
        setSelectedFile(file);
        setSelectedLine(parsedLines);
    };

    const handleMouseLeave = () => {
        const parsedLines = [] as number[];
        setSelectedLine(parsedLines);
    };

    return (
        <div className="step" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}
