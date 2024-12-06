"use client";
import React from "react";
import { useMode } from "@/app/Provider";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { mode } = useMode();
  return (
    <>
      <div className="min-h-screen xl:min-h-0 flex flex-col xl:flex-row gap-4">
        <div
          id="left-section"
          className={`h-full p-10 rounded-xl ${
            mode ? "darkmode" : "lightmode"
          }`}
        >
          {/* <div
            className={`w-[30%] xl:w-[50%] rounded-full overflow-hidden   ${
              mode ? "bg-yellow-400" : "bg-purple-500"
            }`}
          >
            <Image
              src="/images/piriya_headshot.png"
              alt="Piriya"
              width={500}
              height={500}
            />
          </div> */}
          <div className="flex flex-col gap-4">
            <h2 className="">Piriya Kantong</h2>
            <Link href="https://www.linkedin.com/in/piriya-kantong/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${mode ? "text-white" : "text-sky-700"}`}
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0428 17.0422H14.0772V12.4006C14.0772 11.2939 14.0578 9.87 12.5356 9.87C10.9922 9.87 10.7567 11.0761 10.7567 12.3217V17.0422H7.79388V7.49778H10.6372V8.80278H10.6778C11.0733 8.05222 12.0417 7.26111 13.485 7.26111C16.4878 7.26111 17.0428 9.23722 17.0428 11.8078V17.0422ZM4.44889 6.19389C3.49611 6.19389 2.72833 5.42333 2.72833 4.47333C2.72833 3.52389 3.49611 2.75333 4.44889 2.75333C5.39778 2.75333 6.16834 3.52389 6.16834 4.47333C6.16834 5.42333 5.39778 6.19389 4.44889 6.19389ZM2.96388 17.0422H5.93278V7.49778H2.96388V17.0422ZM18.52 0H1.47556C0.661673 0 0 0.645556 0 1.44222V18.5567C0 19.3533 0.661673 20 1.47556 20H18.52C19.3361 20 19.9994 19.3533 19.9994 18.5567V1.44222C19.9994 0.645556 19.3361 0 18.52 0Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_85_18428">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div
          id="right-section"
          className={`xl:w-[70%] flex rounded-xl xl:h-[600px] xl:overflow-y-auto xl:scrollbar-hide  ${
            mode ? "darkmode" : "lightmode"
          }`}
        >
          <div className="p-10 space-y-4">
            <div>
              <h2 className="">Piriya Is...</h2>
              <hr className="w-20 h-2 mt-4 bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-300 border-none rounded-lg"></hr>
            </div>
            <div className="xl:flex">
              <ul className="list-disc">
                <li>
                  A young professional with a background in digital marketing,
                  software development, and entreprenuership
                </li>
                <li>
                  Planned, led, and executed digital marketing campaigns that
                  contributed to 5.76 million CAD in sales
                </li>
                <li>
                  {" "}
                  Co-founder of{" "}
                  <span className="text-orange-500 uppercase">
                    <Link href="https://www.codiloxtech.com/">CodiloxTech</Link>
                  </span>
                  , an all-in-one service provider for digital marketing and IT
                  services
                </li>
                <li>
                  Director of Marketing for{" "}
                  <span className="text-orange-500 uppercase">
                    <Link href="https://www.linkedin.com/company/untapped-energy-data-science-oil-gas/">
                      Untapped Energy
                    </Link>
                  </span>
                  , a non-profit in Calgary, Alberta
                </li>
              </ul>
            </div>
            <div className="xl:flex space-y-4 xl:space-y-0 xl:gap-2">
              <Image
                src="/images/linkedin_teampost.png"
                alt="Piriya LinkedIn team announcement"
                width={500}
                height={500}
                className="w-full overflow-hidden rounded-xl"
              />
              <Image
                src="/images/untapped-energy-marketing-team.png"
                alt="Untapped Energy LinkedIn Team Announcement"
                width={500}
                height={500}
                className="w-full overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
