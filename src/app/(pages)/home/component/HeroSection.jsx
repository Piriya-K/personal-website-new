"use client";
import React from "react";
import { useMode } from "@/app/Provider";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const HeroSection = () => {
  let { mode } = useMode();

  return (
    <>
      <div className="space-y-8 md:space-y-0 md:space-x-10 md:flex md:justify-center md:items-centers">
        <div className="flex flex-col justify-center ">
          {/* Image Section For Mobile */}
          <div className="mb-4 xl:hidden flex justify-center relative group hover:scale-110 transition-all duration-300">
            <div
              className={`group absolute inset-0 bg-gradient-to-r ${
                mode
                  ? "from-purple-500 via-pink-400 to-blue-500 rounded-full blur-3xl"
                  : "from-teal-500 via-blue-500 to-indigo-600 rounded-full blur-3xl"
              }`}
              aria-hidden="true"
            ></div>
            <div
              className={`group relative inline-flex items-center justify-center rounded-full overflow-hidden ${
                mode ? "bg-teal-600" : "bg-orange-500"
              }`}
            >
              <Image
                src="/images/piriya_headshot.png"
                alt="Piriya Kantong"
                width={250}
                height={250}
              />
            </div>
          </div>
          {/* Image Section For Mobile */}

          <div className="flex justify-center gap-4">
            <h2
              className={`text-center ${anton.className} ${
                mode ? "text-black" : "text-sky-200"
              } text-shadow`}
            >
              This Is
            </h2>
            <Image
              src="/images/business-consultant-cta-arrow.png"
              alt="arrow"
              width={300}
              height={300}
              className="hidden xl:block animate-bounce"
            />
          </div>

          <h1 className="text-center">PIRIYA KANTONG</h1>
          <h3 className="text-center mt-2 text-orange-500">
            ** Not another episode of{" "}
            <span className="line-through  decoration-red-500 uppercase decoration-[0.2rem]">
              how I met your mother
            </span>
          </h3>
          <div className="mt-2 flex flex-col xl:flex-row justify-around gap-4">
            <Link href="#about" className="xl:w-1/2">
              <button className="text-xl group rounded-lg border-2  w-full p-4 hover:scale-105 transition-all duration-300">
                <span className="block group-hover:hidden">Piriya Who?</span>
                <span className="hidden group-hover:block">
                  Find Out Below!
                </span>
              </button>
            </Link>
            <Link href="#" className="xl:w-1/2 ">
              <button className="text-xl group rounded-lg border-2  w-full p-4 hover:scale-105 transition-all duration-300 ">
                Skip to Work Experience
              </button>
            </Link>
          </div>
        </div>
        {/* Image Section for Desktop */}
        <div className="hidden xl:flex justify-center relative group hover:scale-110 transition-all duration-300">
          {/* <div
            className={`group absolute inset-0 bg-gradient-to-r ${
              mode
                ? "from-purple-500 via-pink-400 to-blue-500 rounded-full blur-3xl"
                : "from-teal-500 via-blue-500 to-indigo-600 rounded-full blur-3xl"
            }`}
            aria-hidden="true"
          ></div> */}
          <div
            className={`bg-gradient-to-r group relative inline-flex items-center justify-center rounded-full overflow-hidden ${
              mode
                ? "from-purple-500 via-pink-400 to-blue-500"
                : "from-teal-500 via-blue-500 to-indigo-600"
            }`}
          >
            <Image
              src="/images/piriya_headshot.png"
              alt="Piriya Kantong"
              width={250}
              height={250}
            />
          </div>
        </div>
        {/* Image Section for Desktop */}
      </div>
    </>
  );
};

export default HeroSection;
