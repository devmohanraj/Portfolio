const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "C++"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
          Skills
        </p>
        <h2 className="section-title mt-3">Technologies I work with</h2>
        <p className="section-subtitle">
          A focused set of tools for building full stack applications from UI
          to database.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
