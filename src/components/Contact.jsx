import { useState } from "react";

const email = "mohanraj25299@gmail.com";
const contactButtonClass =
  "group inline-flex h-14 min-w-32 items-center justify-center gap-3 rounded-lg border border-cyan-500/25 bg-cyan-500/5 px-6 text-base font-medium text-slate-700 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300";

function ExternalArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon({ copied }) {
  if (copied) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8h10v12H8V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(email);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Contact
          </p>
          <h2 className="section-title mt-3">Let us build something useful</h2>
          <p className="section-subtitle">
            This form is frontend-only for now. Connect it to a service or
            backend later when you are ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className={contactButtonClass}
              title={`Copy ${email}`}
            >
              {copied ? "Copied" : "Email"}
              <CopyIcon copied={copied} />
            </button>

            <a
              href="https://github.com/devmohanraj"
              target="_blank"
              rel="noreferrer"
              className={contactButtonClass}
            >
              GitHub
              <ExternalArrowIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/mohanraj153"
              target="_blank"
              rel="noreferrer"
              className={contactButtonClass}
            >
              LinkedIn
              <ExternalArrowIcon />
            </a>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-slate-800 dark:bg-slate-950"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input
                type="email"
                placeholder="your.email@example.com"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-slate-800 dark:bg-slate-950"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Message
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-slate-800 dark:bg-slate-950"
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
