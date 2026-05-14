function Hero() {
  return (
    <section id="home" className="section-padding pt-28 sm:pt-32">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
            Computer Science Engineering Student
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Hi, I am <span className="text-cyan-500">Mohanraj</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build clean, responsive web applications with React, Node.js,
            Java, and Spring Boot. I enjoy turning practical ideas into modern
            products that are simple to use and easy to maintain.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Mohanraj_Resume.pdf"
              download
              className="rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-soft transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/devmohanraj"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohanraj153"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up lg:justify-self-end">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <img
            src="/developer-illustration.svg"
            alt="Developer workspace illustration"
            className="relative mx-auto w-full max-w-md animate-float rounded-3xl border border-slate-200 bg-slate-900 shadow-soft dark:border-slate-800"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
