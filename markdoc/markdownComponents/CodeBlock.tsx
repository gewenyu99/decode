/* global Prism */
'use client';

import { SelectedContext } from "@/components/storyLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTheme } from "next-themes";

import { Highlight, themes } from 'prism-react-renderer';
import { useContext, useEffect, useState } from "react";
interface CodeBlockProps {
    children: React.ReactNode;
    language: string;
    file: string;
}

export function CodeBlock({ children, language, file}: CodeBlockProps): JSX.Element {
    const {
        selectedLine,
        selectedFile
    } = useContext(SelectedContext)
    const { theme } = useTheme()
    const [themeUsed, setThemeUsed] = useState(window?.localStorage.getItem('data-theme') ?? 'dark');
    const highlightColor = 'bg-sky-400/[.2]';
    useEffect(() => {
        setThemeUsed(theme as string);
    }, [theme]);

    return (
        <Card className="m-0 p-0 h-full w-full rounded-none">
            <CardContent className="m-0 p-0 h-full">
                <div className="code w-full h-full overflow-scroll	" aria-live="polite">
                    <pre className={`language-${language}`}>
                        <Highlight
                            theme={themeUsed === 'light' ? themes.github : themes.okaidia}
                            code={children?.toString().trim() ?? ""}
                            language={language}
                        >
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className="h-full p-2 rounded-none">
                                    {tokens.map((line, i) => (
                                        <div key={i} {...getLineProps({ line })} 
                                        className={ selectedLine.includes(i + 1) && selectedFile === file ? highlightColor : ""}>
                                            <span className={`select-none m-4`}>{i + 1}</span>
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    </pre>
                </div>
            </CardContent>
        </Card>
    );
}