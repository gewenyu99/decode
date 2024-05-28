import Markdoc from '@markdoc/markdoc';
import path, { parse } from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation'
import { File } from '@/components/storyFiles';
import { StoryLayout } from '@/components/storyLayout';
import { DecodeFrontmatter, parseFrontmatter } from '@/markdoc/parseMarkdown';

export default async function Page({ params }: { params: { org: string, repo: string, branch: string } }) {
    let rawText: string;
    let files: File[] = [] as File[];
    const { org, repo, branch } = params;
    const url = `https://raw.githubusercontent.com/${org}/${repo}/${branch ?? 'main'}/decode.md`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            rawText = await response.text();
        } else {
            throw Error('This repo does not have a decode.md file');
        }
        const frontmatter: DecodeFrontmatter = parseFrontmatter(rawText)
        if (!frontmatter.title) {
            throw Error("This repo's decode.md file is invalid. Missing title");
        }
        if (!frontmatter.files || frontmatter.files.length === 0) {
            throw Error("This repo's decode.md file is invalid. Missing files");
        }

        const filesToLoad = frontmatter.files;

        const filePromises = filesToLoad.map(async (file) => {
            const fileUrl = `https://raw.githubusercontent.com/${org}/${repo}/${branch ?? 'main'}/${file}`;
            const fileResponse = await fetch(fileUrl);
            if (fileResponse.ok) {
                const fileText = await fileResponse.text();
                return { fileName: file, fileContent: fileText };
            } else {
                throw Error(`Failed to load file: ${file}`);
            }
        });

        files = await Promise.all(filePromises);

    } catch (error) {
        console.error(error);
        throw Error('This repo does not exist');
    }

    return (
        <StoryLayout rawText={rawText} files={files}>
        </StoryLayout>
    )
}
