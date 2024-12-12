"use client"

import config from "@/config";
import Image from "next/image";

import hacker from "@/components/assets/img/hacker.gif"
import { createClient } from "@/libs/supabase/client";
import { useEffect, useState } from "react";
import { User, Project } from "@/types";
import { ProjectsDisplay } from "./ProjectsDisplay";

const Hero = () => {
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null)

  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', "mael-bomane")
        .single()

      if (error) console.log(error);
      return data;
    }
    if (!user) {
      getUser()
        .then(response => {
          setUser(response)
        })
    }
  }, [supabase])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)

      if (error) console.log(error);

      data.sort((a, b) => a.priority - b.priority).reverse();
      setProjects(data);
      return data;

    }
    if (user && !projects) {
      fetchProjects().then(response => {
        setProjects(response)
      })
    }
  }, [supabase, user])

  return (
    <section className="text-secondary w-full md:max-w-7xl mx-auto flex grow flex-col items-center md:px-8 py-8 lg:py-20">
      <div className="flex gap-10 lg:gap-14 text-center">
        <Image src={"/hacker.gif"} width={50} height={50} alt="adhd cat dev" className="rounded-full transform -scale-x-100" unoptimized />
        <h1 className="w-full text-base-100 font-extrabold text-3xl lg:text-5xl rounded-md tracking-tight">
          {config.appDescription}
        </h1>
        <Image src={"/hacker.gif"} width={50} height={50} alt="adhd cat dev" className="rounded-full" unoptimized />
      </div>
      {projects &&
        <ProjectsDisplay projects={projects} />
      }
    </section>
  );
};

export default Hero
