import  { useEffect, useRef } from 'react';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
function Portfolio() {
 
  const headref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headref.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        headref.current,
        { opacity: 0,  y: -1000 },
        { opacity: 0.5,  y: -200, duration: 0, ease: 'power2.out' }
      ).to(
        headref.current,
        { opacity: 1,  y: 0, duration: 3, ease: 'power4.out' }
      );
    } 
  }, []);
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-featured online shopping platform built with React and Restful Api.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Java Script', 'TailwindCss'],
      demoLink: 'https://drive.google.com/file/d/1erxXkCgAm7nnMZAe8X84fErQwhMQAyHk/view?usp=drive_link',
      githubLink: 'https://github.com/muhameedahmed/Ecommerce',
      Linktowebsite:"https://muhameedahmed.github.io/Ecommerce/#/Login",
    },
    {
      title: 'My Portfolio',
      description: 'A responsive portfolio website showcasing my frontend development skills, projects.',
      image: '/MYWEBSITE.png',
      technologies: ['React', 'Type Script', 'TailwindCSs'],
      demoLink: '',
      githubLink: 'https://github.com/muhameedahmed/react_task_itemlist-',
      Linktowebsite:"/",
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      technologies: ['HTML5', 'Java Script', 'BootStrap'],
      demoLink: 'https://drive.google.com/file/d/1uwLMiszpuBxW0PN-OeN1AnDBHLW6hmp1/view?usp=drive_link',
      githubLink: 'https://github.com/muhameedahmed/react_task_itemlist-',
      Linktowebsite:"https://muhameedahmed.github.io/todoapp-js-/",
    },
    {
      title: 'Simple React website',
      description: 'Contain some features from React , routers And bootstrap ',
      image: '/SIMPLEAPP.png',
      technologies: ['React', 'Router-Dom', 'bootstrap'],
      demoLink: 'https://drive.google.com/file/d/1EBKaDzt_bkV1d8zrUalI48nXv8s94Prs/view?usp=drive_link',
      githubLink: 'https://github.com/muhameedahmed/Simple-React-App',
      Linktowebsite:"https://muhameedahmed.github.io/Simple-React-App/",
    },   {
      title: 'Mealfy website',
      description: 'A website  to showcasing and sharing traditional Mealify Meal dishes and recipes ',
      image: '/MEALFY.png',
      technologies: ['HTML', 'CSS', 'bootstrap'],
      demoLink: 'https://drive.google.com/file/d/1xmhjnOTk3Ybbho3dkuvNEzwpFWVi2ivQ/view?usp=drive_link',
      githubLink: 'https://github.com/muhameedahmed/Mealify- ',
      Linktowebsite:"https://muhameedahmed.github.io/Mealify-/",
    },
    {
      title: 'Alex-Smith portfolio',
      description: ' A Simple portfolio website showcasing Anyone skills, projects ',
      image: '/AlexSmith.png',
      technologies: ['HTML', 'CSS', 'bootstrap'],
      demoLink: 'https://drive.google.com/file/d/1RS5eb5ebyMHqtz3Lsb7k76ravi5k833e/view?usp=drive_link',
      githubLink: 'https://github.com/muhameedahmed/ALEX-SMiTH',
      Linktowebsite:"https://muhameedahmed.github.io/ALEX-SMiTH/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h1>
          <div className="h-1 w-20 bg-primary-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div ref={headref}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.Linktowebsite}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <ChevronRight  className="w-4 h-4 mr-1" />
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;