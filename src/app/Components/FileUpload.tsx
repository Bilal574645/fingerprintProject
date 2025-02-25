"use client"

import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/team-alpha.png';

const FileUpload = () => {
  return (
    <div className="z-10    justify-between font-mono text-sm lg:flex lg:justify-around">
        <p className="text-white-700 italic font-bold text-xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Comparison of Contactless to
        Contact-based     Fingerprints
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src={img1}
              alt="Alpha Logo"
              className="dark:invert rounded-full w-14"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
  )
}

export default FileUpload
