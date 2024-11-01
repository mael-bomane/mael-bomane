/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import config from "@/config";

export const ButtonLetsChat = ({
  text = "let's chat !",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {

  return (
    <Link
      className={`btn ${extraStyle ? extraStyle : ""}`}
      href="https://calendly.com/mael-bomane/30min"
      target="_blank"
    >
      {text}
    </Link>
  );
};

