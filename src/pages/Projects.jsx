import React from "react";

import { projects, socials } from "../constants";
import { Link } from "react-router-dom";
import { arrow, arrowb } from "../assets/icons";
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My &nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt="project icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex justify-between">
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link to={project.live} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">Live Demo</Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-black-600">Github Link</Link>
                <img src={arrowb} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Socials</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {socials.map((social) => (
            <Link to={social.url} key={social.name} className="block-container w-14 h-14 cursor-pointer" target="_blank">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <hr className="border-slate-200"/>

      <CTA/>
    </section>
  );
};

export default Projects;
