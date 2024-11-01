import Image from "next/image";
import type { FC } from "react";

const ImageGrid: FC = () => {
  const items = [
    "rust",
    "javascript",
    "html5",
    "css3",
    "react",
    "postgresql",
    "mongodb",
    "firebase",
    "supabase",
    "nestjs",
    "express",
    "python",
    "bash",
    "linux",
    "docker",
    "git",
    "postman",
    "mocha",
    "selenium",
    "unity"
  ];
  return (
    <div className="m-2 grid grid-cols-12 gap-2">
      {items.map((item, i) => {
        const randomId = (Math.random() * 100).toFixed(0);
        return (
          <div
            key={i}
            className="col-span-6 md:col-span-12 lg:col-span-3 aspect-video w-full bg-gray-100 relative"
          >
            <Image
              src={`https://img.shields.io/badge/${item}-black?logo=${item}`}
              fill
              className="object-cover"
              alt={`alt`}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ImageGrid;
