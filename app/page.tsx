import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Next.js + Markdoc</h1>
      <p>
        This is a demo of how to use Markdoc with Next.js. This is a simple
        example of how to use Markdoc to parse and render markdown content.
      </p>
      <Image src="/nextjs-markdoc.png" alt="Next.js + Markdoc" width={800} height={400} />
    </div>
  );
}
