import Image from "next/image";
import avatar from "@/app/icon.png";
import { Badges } from "./Badges";

export const Profile = () => {
  return (
    <section className="max-w-4xl mx-auto flex grow flex-col lg:flex-row items-center justify-center md:px-8 py-8 lg:pt-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="lowercase w-full flex flex-col space-y-4 justify-center items-center bg-base-100 p-4 rounded-md text-lg leading-relaxed overflow-x-auto">
          <Image src={avatar} alt="avatar" width={100} height={100} className="border rounded-full" />
          <Badges />
          <img src="https://github-readme-stats.vercel.app/api?username=mael-bomane&show_icons=true" />
        </div>
        <div className="flex justify-center items-center w-full">
          <img src="https://profile-counter.glitch.me/mael-bomane/count.svg" className="border border-white" />
        </div>
      </div>
    </section >
  );
};
