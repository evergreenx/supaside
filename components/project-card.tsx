import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    date: string
    recordings: number
    edits: number
    thumbnail: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-800">
      <div className="relative aspect-video">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          {project.recordings > 1 ? `${project.recordings} Recordings` : "1 Recording"}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-zinc-400">
          {project.date} • {project.recordings} Recording{project.recordings !== 1 && 's'}
          {project.edits > 0 && ` • ${project.edits} Edit${project.edits !== 1 && 's'}`}
        </p>
      </div>
    </div>
  )
}

