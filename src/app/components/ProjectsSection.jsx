"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "JobTracking APP",
    description: "Project 1 description",
    image: "/images/projects/jobTrackingApp.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/bijit01012000/jobTrackerV1-prod",
    previewUrl: "https://jobtrackerversion1.onrender.com/login",
  },
  {
    id: 2,
    title: "OpenAI API",
    description: "Project 2 description",
    image: "/images/projects/openAI.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/bijit01012000/OpenAI-API",
    previewUrl: "https://github.com/bijit01012000/OpenAI-API",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/bijit01012000/E-commerce-mern",
    previewUrl: "https://github.com/bijit01012000/E-commerce-mern",
  },
  {
    id: 4,
    title: "Cart",
    description: "Project 4 description",
    image: "/images/projects/cart.png",
    tag: ["All", "REDUX"],
    gitUrl: "https://github.com/bijit01012000/Cart",
    previewUrl: "https://github.com/bijit01012000/Cart",
  },
  {
    id: 5,
    title: "GITHUB USER",
    description: "Authentication and CRUD operations",
    image: "/images/projects/githubUser.png",
    tag: ["All", "REACT"],
    gitUrl: "https://github.com/bijit01012000/Github-User",
    previewUrl: "https://github.com/bijit01012000/Github-User",
  },
  {
    id: 6,
    title: "Tour Guide",
    description: "Project 5 description",
    image: "/images/projects/TourGuide.png",
    tag: ["All", "REACT"],
    gitUrl: "https://github.com/bijit01012000/Tour-guide",
    previewUrl: "https://github.com/bijit01012000/Tour-guide",
  },
  {
    id: 7,
    title: "MENU",
    description: "Project 5 description",
    image: "/images/projects/menu.png",
    tag: ["All", "REACT"],
    gitUrl: "https://github.com/bijit01012000/Menu",
    previewUrl: "https://github.com/bijit01012000/Menu",
  },
  {
    id: 8,
    title: "SLIDER",
    description: "Project 5 description",
    image: "/images/projects/silder.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/bijit01012000/SLIDER-HTML-CSS",
    previewUrl: "https://github.com/bijit01012000/SLIDER-HTML-CSS",
  },
  {
    id: 9,
    title: "ACCORDION",
    description: "Project 5 description",
    image: "/images/projects/accordion.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/bijit01012000/Accordion",
    previewUrl: "https://github.com/bijit01012000/Accordion",
  },
  {
    id: 10,
    title: "BIRTHDAY BUDDY",
    description: "Project 5 description",
    image: "/images/projects/birthdayBuddy.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/bijit01012000/Birthday-buddy",
    previewUrl: "https://github.com/bijit01012000/Birthday-buddy",
  },
  {
    id: 11,
    title: "TABS",
    description: "Project 5 description",
    image: "/images/projects/tabs.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/bijit01012000/Tabs",
    previewUrl: "https://github.com/bijit01012000/Tabs",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML/CSS"
          isSelected={tag === "HTML/CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="REACT"
          isSelected={tag === "REACT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="REDUX"
          isSelected={tag === "REDUX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
