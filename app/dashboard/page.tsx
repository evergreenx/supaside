import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import {
  InfoIcon,
  PlusIcon,
  SearchIcon,
  Share2Icon,
  Sidebar,
} from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const projects = [
    {
      id: 1,
      title: "Ido",
      date: "October 26",
      recordings: 1,
      edits: 2,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Ido",
      date: "October 26",
      recordings: 2,
      edits: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Ido",
      date: "October 23",
      recordings: 3,
      edits: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ];
  return (
    <div className="flex h-screen bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-2xl font-semibold text-white">
          What are you creating today?
        </h1>

        <div className="mb-8 flex flex-wrap gap-4">
          <Button
            size="lg"
            className="h-[72px] min-w-[200px] bg-zinc-800 hover:bg-zinc-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                fill="currentColor"
              />
            </svg>
            Record
          </Button>
          <Button
            size="lg"
            className="h-[72px] min-w-[200px] bg-zinc-800 hover:bg-zinc-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
            </svg>
            Plan
          </Button>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              New project
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
