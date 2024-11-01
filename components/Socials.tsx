
import Image from "next/image";
import config from "@/config";

export const Socials = () => {
  return (
    <>
      <h1 className="center">solana full-stack dev 🫡</h1>

      <div className="flex 100vw center">
        <picture>
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=mael-bomane&show_icons=true&theme=dark"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=mael-bomane&show_icons=true"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true" />
        </picture>
      </div>
      <div>
        <img src="https://profile-counter.glitch.me/mael-bomane/count.svg" /><br />
        <img src="https://img.shields.io/twitter/follow/mael_bomane" />
      </div>

    </>
  );
};

