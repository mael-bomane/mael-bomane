import Image from "next/image";
import Link from "next/link";

import { Matrix } from "@/components/matrix";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const projects = [
  {
    slug: 'unrekt',
    website: 'https://unrekt.vercel.app/',
    description: 'fan art front-end for nft investment checklist by xborg',
    github: 'unrekt'
  },
  {
    slug: 'skywalker',
    website: '',
    description: 'test your computer for seed phrases before bad guys do',
    github: 'skywalker'
  },
  {
    slug: 'deso-fren',
    website: 'https://deso-fren.vercel.app/',
    description: 'minimum wage in deso diamonds',
    github: 'deso-fren'
  },
  // {
  //   slug: 'whitehat',
  //   website: 'https://whitehat.vercel.app/',
  //   description: 'anonymous bug bounty protocol',
  //   github: 'whitehat'
  // },
  // {
  //   slug: 'kanban',
  //   website: 'https://sol-kanban.vercel.app/',
  //   description: 'organizational toolkit for crypto-natives',
  //   github: 'kanban'
  // },
]

export default function Home() {

  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col justfy-center items-center text-center lg:max-w-5xl w-full space-y-4">
        {
          projects.map(project => (
            <Link
              href={project.website}
              className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              key={project.slug}
            >
              <h3 className={`mb-3 w-full text-2xl font-semibold`}>
                {project.slug}
              </h3>
              <p className={`m-0 w-full text-sm opacity-50`}>
                {project.description}
              </p>
            </Link>
          ))
        }
      </div>
      <Matrix />
    </main>
  );
}
