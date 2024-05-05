
'use client';

import React from "react";

export function Step({ children, lines, file }: { children: React.ReactNode; lines: number[]; file: string }) {
    return (
        <div>
            {children} 
        </div>
    )
}
