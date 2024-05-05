import Markdoc from '@markdoc/markdoc';
import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation'
import { File } from '@/components/storyFiles';
import { StoryLayout } from '@/components/storyLayout';

export default async function Page({ params }: { params: { story: string } }) {
  const storyPath = path.join(process.cwd(), '/app/stories/flows/', params.story, 'story.md');
  const codePath = path.join(process.cwd(), '/app/stories/flows/', params.story, 'code/');

  let rawText: string;
  let files: File[] = [] as File[];
  try {
    rawText = await fs.readFile(storyPath, 'utf8');
    const codeFiles = await fs.readdir(codePath);
    for (const fileName of codeFiles) {
      const filePath = path.join(codePath, fileName);
      const fileContent = await fs.readFile(filePath, 'utf8');
      files.push({ fileName, fileContent });
    }
  }
  catch {
    throw notFound()
  }

  return (
    <StoryLayout rawText={rawText} files={files}>
    </StoryLayout>
  )
}