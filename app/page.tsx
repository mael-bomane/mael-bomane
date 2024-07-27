import Image from "next/image";
import Link from "next/link";

import { Matrix } from "@/components/matrix";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { socials, skills } from "@/config";

export default function Home() {

  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden">

      <div className="relative w-full md:w-[50vw] rounded-lg flex flex-col place-items-center space-y-4 py-8 mb-8 bg-white text-black">
        <Image
          className="relative rounded-full border-2 border-black"
          src="/me.jpg"
          alt="mael bomane"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">mael bomane</h1>
        <h2 className="text-xl">solana developer</h2>
        <div className="flex justfy-center items-center space-x-4">
          <Link href={`https://x.com/${socials.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-7 w-7" />
          </Link>
          <Link href={`https://discord.com/channels/@me/${socials.discord}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="h-s7 w-7" />
          </Link>
          <Link href={`https://github.com/${socials.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </Link>
          <Link href={`mailto:${socials.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7" />
          </Link>

        </div>

        <div className="text-left w-96">
          {skills.map(skill => (
            <div key={skill.name} className="text-left flex space-around mt-1">
              <label htmlFor={skill.name} className="w-36">{skill.name}</label>
              <progress id="file" max="10" value={skill.score} className="flex-1">{skill.score}</progress>
            </div>
          ))}
        </div>
      </div>


      <Matrix />
    </main>
  );
}
