
"use client"

import type { FC } from "react"
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[]
}

export const ProjectsDisplay: FC<Props> = ({ projects }) => {

  return (
    <div className="w-full mt-8">
      {projects.filter(project => project.shipped).length > 0 && (
        <ProjectCard projects={projects.filter(project => project.shipped && (project.github !== "https://github.com/mael-bomane/mael-bomane"))} />
      )}
    </div>
  )
};
