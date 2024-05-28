import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"
import { NextApiRequest, NextApiResponse } from "next"
import { redirect } from "next/navigation"

export default function Component() {

  async function decodeRepo(formData: FormData) {
    'use server'

    const repoLink = formData.get('repoLink') as string
    if (!repoLink) return

    const repoUrl = new URL(repoLink)
  
    const org = repoUrl.pathname.split('/')[1]
    const repo = repoUrl.pathname.split('/')[2]

    if (!org || !repo) return

    const branch = repoUrl.pathname.split('/')[4] ?? 'main'

    redirect(`/${org}/${repo}/${branch}`) // Navigate to the new post page
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Documentation</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter the GitHub repository link to view the documentation.
              </p>
              <form className="flex items-center space-x-2" action={decodeRepo}>
                <Input className="flex-1" name="repoLink" placeholder="https://github.com/user/repo" type="url" />
                <Button type="submit">Load Documentation</Button>
              </form>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-8 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                How it Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our documentation in 3 easy steps.
              </p>
            </div>
            <div className="relative w-full max-w-3xl">
              <div className="absolute inset-y-0 left-0 w-px bg-gray-200 dark:bg-gray-700" />
              <div className="space-y-8">
                <div className="relative flex items-start space-x-4">
                  <div className="absolute -left-[18px] top-0 z-10">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Step 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Add a
                      <code>decode.md</code>
                      to your repo{"\n                                  "}
                    </p>
                  </div>
                  <img
                    alt="Step 1"
                    className="rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
                <div className="relative flex items-start space-x-4">
                  <div className="absolute -left-[18px] top-0 z-10">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Step 2</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Add content to tour your repo using the
                      <code>step</code>
                      tag.{"\n                                  "}
                    </p>
                  </div>
                  <img
                    alt="Step 2"
                    className="rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
                <div className="relative flex items-start space-x-4">
                  <div className="absolute -left-[18px] top-0 z-10">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Step 3</h3>
                    <p className="text-gray-500 dark:text-gray-400">Explore your docs here</p>
                  </div>
                  <img
                    alt="Step 3"
                    className="rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}