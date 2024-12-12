/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import config from "@/config";
import { Button } from "./ui/button";

export const ButtonLetsChat = ({
  text = "let's chat !",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {

  return (
    <Button className={extraStyle ? extraStyle : ""} variant="secondary">
      <Link
        className="w-full text-center"
        href="https://calendly.com/mael-bomane/30min"
        target="_blank"
      >
        {text}
      </Link>
    </Button>
  );
};

