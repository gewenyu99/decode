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

import { Highlight, themes } from 'prism-react-renderer';
import { useContext } from "react";
interface CodeBlockProps {
    children: React.ReactNode;
    language: string;
}

export function CodeBlock({ children, language }: CodeBlockProps): JSX.Element {
    const {
        selectedLine,
    } = useContext(SelectedContext)
    
    return (
        <Card className="m-0 p-0 h-full w-full rounded-none">
            <CardContent className="m-0 p-0 h-full">
                <div className="code w-full h-full overflow-scroll" aria-live="polite">
                    <pre className={`language-${language}`}>
                        <Highlight
                            theme={themes.okaidia}
                            code={children?.toString().trim() ?? ""}
                            language={language}
                        >
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className="h-full p-4 rounded-none">
                                    {tokens.map((line, i) => (
                                        <div key={i} {...getLineProps({ line })} 
                                        style={{backgroundColor: `${ selectedLine.includes(i + 1) ? "rgba(255, 255, 255, 0.1)" : "unset"}`}}>
                                            <span className="select-none" style={{opacity: 0.4, margin: "0.5rem"}}>{i + 1}</span>
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