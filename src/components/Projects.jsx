const projects = [
  {
    title: "MERN Notes App",
    description:
      "A full-stack notes management application with create, update, delete, responsive UI, and REST API integration.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "from-cyan-400 to-emerald-400",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "QR Generator App",
    description:
      "A simple QR code generator that creates codes instantly, supports image download, and keeps the interface clean.",
    technologies: ["React.js", "JavaScript", "QR API/library"],
    accent: "from-violet-400 to-cyan-400",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Spring Boot Personal Loan Management System",
    description:
      "A loan management system for customer loans, loan status tracking, and CRUD operations.",
    technologies: ["Spring Boot", "Java", "MySQL"],
    accent: "from-amber-300 to-rose-400",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900/40">
      <div className="container-width">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
          Projects
        </p>
        <h2 className="section-title mt-3">Selected work</h2>
        <p className="section-subtitle">
          Practical projects that show frontend, backend, API, and database
          learning.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-2 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div
                className={`h-44 bg-gradient-to-br ${project.accent} p-5 transition group-hover:scale-[1.02]`}
              >
                <div className="h-full rounded-xl border border-white/30 bg-slate-950/70 p-5 text-white">
                  <div className="mb-8 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-11/12 rounded-full bg-white/75" />
                    <div className="h-3 w-8/12 rounded-full bg-white/45" />
                    <div className="h-3 w-10/12 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
