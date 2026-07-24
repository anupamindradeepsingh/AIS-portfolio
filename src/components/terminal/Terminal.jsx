import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTypingEffect from "../../hooks/useTypingEffect";
import profile from "../../data/profile";

const BIO_LINES = [
  `name     : ${profile.name}`,
  `role     : ${profile.role}`,
  `based_in : ${profile.location}`,
  `focus    : DSA · full-stack · systems thinking`,
  ``,
  `type 'help' to see available commands`,
];

const COMMANDS = {
  help: () => [
    "available commands:",
    "  about       → who I am, beyond the resume",
    "  experience  → where I've worked",
    "  projects    → what I've built",
    "  achievements→ competitive programming + wins",
    "  resume      → download my resume",
    "  contact     → get in touch",
    "  clear       → clear the terminal",
  ],
  about: (nav) => (nav("/about"), ["→ opening /about ..."]),
  experience: (nav) => (nav("/experience"), ["→ opening /experience ..."]),
  projects: (nav) => (nav("/projects"), ["→ opening /projects ..."]),
  achievements: (nav) => (nav("/achievements"), ["→ opening /achievements ..."]),
  contact: (nav) => (nav("/contact"), ["→ opening /contact ..."]),
  resume: () => {
    window.open(profile.resumeUrl, "_blank");
    return ["→ downloading resume.pdf ..."];
  },
  whoanupam: () => BIO_LINES,
};

export default function Terminal() {
  const navigate = useNavigate();
  const { output: typedBio, done } = useTypingEffect(
    BIO_LINES.join("\n"),
    14,
    500
  );
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, typedBio]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const handler = COMMANDS[cmd];
    const result = handler
      ? handler(navigate)
      : [`command not found: ${cmd}  (try 'help')`];

    setHistory((h) => [...h, { cmd, result }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="grain w-full max-w-xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] shadow-2xl shadow-black/40"
      onClick={() => inputRef.current?.focus()}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#f47174]" />
        <span className="h-3 w-3 rounded-full bg-[#f5c451]" />
        <span className="h-3 w-3 rounded-full bg-[#7ee787]" />
        <span className="ml-2 font-mono text-xs text-[var(--color-text-faint)]">
          visitor@anupam — zsh
        </span>
      </div>

      {/* body */}
      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:text-sm"
      >
        <p className="text-[var(--color-text-muted)]">
          <span className="text-[var(--color-accent)]">visitor@anupam</span>
          <span className="text-[var(--color-text-faint)]"> ~ % </span>
          whoanupam
        </p>
        <pre className="whitespace-pre-wrap text-[var(--color-text)]">
          {typedBio}
          {!done && <span className="caret">&nbsp;</span>}
        </pre>

        {history.map((entry, i) => (
          <div key={i} className="mt-2">
            <p className="text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">visitor@anupam</span>
              <span className="text-[var(--color-text-faint)]"> ~ % </span>
              {entry.cmd}
            </p>
            {entry.result.map((line, j) => (
              <p key={j} className="text-[var(--color-text)]">
                {line}
              </p>
            ))}
          </div>
        ))}

        {done && (
          <div className="mt-2 flex items-center">
            <span className="text-[var(--color-accent)]">visitor@anupam</span>
            <span className="text-[var(--color-text-faint)]">&nbsp;~ %&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command input"
              className="flex-1 bg-transparent text-[var(--color-text)] outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}
