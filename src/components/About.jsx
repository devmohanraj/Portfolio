function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/40">
      <div className="container-width grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            About
          </p>
          <h2 className="section-title mt-3">Building skills through real projects</h2>
          <p className="section-subtitle">
            I am a Computer Science Engineering student interested in full
            stack development and modern web technologies.
          </p>
        </div>

        <div className="grid gap-5 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          {[
            "Learning React, Node.js, Spring Boot, and databases through practical applications.",
            "Focused on building responsive interfaces and clean backend APIs.",
            "Interested in MERN Stack development, Java, and scalable web systems.",
            "Passionate about creating modern web applications with simple user experiences.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950/70"
            >
              <p className="leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
