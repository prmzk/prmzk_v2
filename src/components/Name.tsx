import React, { useState } from "react";
import Container from "../components/Container";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";
import { Waypoint } from "react-waypoint";
import { twMerge } from "tailwind-merge";

const Name: React.FC = () => {
  const [scrolled, setScrolled] = useState(true);
  return (
    <Container className="relative lg:min-h-screen">
      <div className="relative top-[200px]">
        <Waypoint
          onLeave={() => setScrolled(true)}
          onEnter={() => setScrolled(false)}
        />
      </div>

      {/* Desktop */}
      <div
        className={twMerge(
          "fixed top-1/3 lg:flex transition-all hidden",
          scrolled && "-translate-x-[170px] -translate-y-[50%]"
        )}
      >
        <div
          className={twMerge(
            "h-[360px] flex-shrink-0 transition-all opacity-100",
            scrolled && "opacity-0 relative"
          )}
        >
          <img src="/sprite.gif" className="h-full" />
        </div>
        <div className={twMerge("ml-8 transition-all relative")}>
          <p
            className={twMerge(
              "text-gray text-xl tracking-wide mb-2 transition-all",
              scrolled ? "opacity-0" : "opacity-100"
            )}
          >
            Hello! I am
          </p>
          <p
            className={twMerge(
              "text-white text-7xl transition-all font-bold tracking-tight mb-2",
              scrolled && "text-4xl"
            )}
          >
            Adam Primarizki
          </p>
          <p
            className={twMerge(
              "text-blue text-7xl transition-all font-bold tracking-tight mb-2",
              scrolled && "text-4xl"
            )}
          >
            Frontend Developer
          </p>
          <p
            className={twMerge(
              "text-xl text-gray max-w-xl mt-8 transition-all",
              scrolled && "text-md mt-4 max-w-sm"
            )}
          >
            With a strong focus on creating intuitive user interfaces and
            seamless web experiences. Currently seeking deeper knowledge in vast
            programming world.
          </p>
          <div className="mt-12">
            <ul className="text-3xl flex">
              <a
                href="https://linkedin.com/in/prmzk"
                target="_blank"
                rel="noopener norefferer"
              >
                <li className="text-gray hover:text-blue cursor-pointer transition-colors">
                  <FaLinkedinIn />
                </li>
              </a>
              <li className="ml-6 text-gray hover:text-blue cursor-pointer transition-colors ">
                <a
                  href="https://github.com/prmzk"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="ml-8 text-gray  hover:text-blue cursor-pointer transition-colors">
                <a href="mailto:adam.primarizki@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
                  <p className="text-sm rounded-md py-1 px-2 bg-gray font-bold tracking-tighter ml-8 hover:bg-blue cursor-pointer transition-all">
                    Resume
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex transition-all lg:hidden mt-16 w-full mb-32">
        <div className="transition-all relative">
          <p className="text-gray text-xl tracking-wide mb-2 transition-all">
            Hello! I am
          </p>
          <p className="text-white text-4xl transition-all font-bold tracking-tight ">
            Adam Primarizki
          </p>
          <p className="text-blue text-4xl transition-all font-bold tracking-tight mb-2">
            Frontend Developer
          </p>
          <p className="text-md mt-4 max-w-lg text-gray transition-all">
            With a strong focus on creating intuitive user interfaces and
            seamless web experiences. Currently seeking deeper knowledge in vast
            programming world.
          </p>
          <div className="mt-12">
            <ul className="text-3xl flex">
              <a
                href="https://linkedin.com/in/prmzk"
                target="_blank"
                rel="noopener norefferer"
              >
                <li className="text-gray hover:text-blue cursor-pointer transition-colors">
                  <FaLinkedinIn />
                </li>
              </a>
              <li className="ml-6 text-gray hover:text-blue cursor-pointer transition-colors ">
                <a
                  href="https://github.com/prmzk"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="ml-8 text-gray  hover:text-blue cursor-pointer transition-colors">
                <a href="mailto:adam.primarizki@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
                  <p className="text-sm rounded-md py-1 px-2 bg-gray font-bold tracking-tighter ml-8 hover:bg-blue cursor-pointer transition-all">
                    Resume
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[280px] flex-shrink-0 transition-all opacity-100 ml-auto">
          <img src="/sprite.gif" className="h-full" />
        </div>
      </div>
    </Container>
  );
};

export default Name;
