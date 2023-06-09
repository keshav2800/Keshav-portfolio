import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "WEB3 Krypt",
    description:
      "Web 3.0 blockchain application to send and recieve ETH",
    image: "/web3.png",
    github: "https://github.com/keshav2800/web3_krypt",
    link: "/",
  },
  {
    name: "Sharkie Game",
    description:
      "Sharkie is a javascript based Jump and run game",
    image: "/sharkie_2.jpeg",
    github: "https://github.com/keshav2800/sharkie",
    link: "https://sharkie-game.vercel.app/",
  },
  {
    name: "Join Me",
    description: "Join Me is a group management tool to optimise the work flow",
    image: "/join_2.jpeg",
    github: "https://github.com/keshav2800/join_me",
    link: "https://join-me-pink.vercel.app/login.html",
  },
  {
    name: "Portfolio website",
    description:
      "Welcome to family. My name is keshav",
    image: "/keshav_2.png",
    github: "https://github.com/keshav2800/Keshav-portfolio",
    link: "https://keshav-me.vercel.app/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
