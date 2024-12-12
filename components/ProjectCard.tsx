"use client"

import Link from "next/link"
import { IoLink, IoLogoGithub } from "react-icons/io5"
import { FaCheck, FaXmark } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import type { FC } from "react"
import type { Project } from "@/types"


type Props = {
  projects: Project[]
}

export const ProjectCard: FC<Props> = ({ projects }) => {
  return (
    <>{projects.map(project => (
      <Link href={project.link}
        className="max-w-3xl flex flex-col items-center justify-between bg-primary border mt-4 text-base-100 p-4 rounded-lg mx-4 lg:mx-auto cursor-pointer group hover:bg-secondary hover:text-primary"
        key={project.id}
      >
        <div className="w-full flex flex-col justify-center">
          <div className="flex items-center">
            <span className="mx-1 font-extrabold text-xl">{project.public ? project.name : '[ redacted ]'}</span>
          </div>
        </div>
        <div className="mt-2 w-full">{project.description.length > 0 && project.public ? project.description : `${project.public ? 'no description provided' : '[ redacted ]'}`}</div>
        <div className="flex flex-col w-full mt-2">
          {project?.tasks?.length > 0 && (project.shipped || project.public) && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="hidden md:inline">
                    {(project.tasks?.length > 0 && `${project.tasks?.length ?? 0} tasks`)}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {project.tasks && project.tasks.length > 0 && project.public && project.tasks.map(task => (
                    <div className="w-full text-center flex justify-center items-center space-x-2" key={task.id}>
                      <span>{task.title}</span>
                      {task.done ? <FaCheck className="text-success" /> : <FaXmark className="text-error" />}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          )}

        </div>
      </Link>

    ))}
    </>
  )
}
