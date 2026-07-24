import { useEffect, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import profile from "../data/profile";

// Production-ready contact form via Web3Forms — plain HTML form POST,
// no JavaScript fetch involved. The browser submits the form directly to
// Web3Forms, which emails the message and then redirects the visitor back
// to this page (a REAL full page reload — not a client-side route change)
// with a `contact=sent` query flag that we read once on load.
//
// REQUIRED SETUP (the form will NOT deliver email until this is done):
//   1. Go to https://web3forms.com and sign up using the inbox you want
//      messages delivered to (luckyanu1332005@gmail.com).
//   2. Copy the access key it gives you.
//   3. Locally: copy .env.example to .env and set
//        VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
//   4. On Vercel: Project Settings → Environment Variables → add the same
//      variable + value → redeploy.
// This key is a public site key by design (like a reCAPTCHA site key), not
// a secret — Web3Forms is built to be called directly from the browser.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

export default function Contact() {
  const [banner, setBanner] = useState(null); // null | "sent" | "error" | "no-key"

  // Read the redirect flag Web3Forms sends back after a real form submission,
  // then clean the URL so refreshing again doesn't re-show the banner.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const flag = params.get("contact");
    if (flag === "sent" || flag === "error") {
      setBanner(flag);
      params.delete("contact");
      const cleanUrl =
        window.location.pathname + (params.toString() ? `?${params}` : "");
      window.history.replaceState({}, "", cleanUrl);
    }
  }, []);

  const redirectUrl = `${window.location.origin}/contact?contact=sent`;

  return (
    <>
      <PageHeader
        eyebrow="$ ./send_message.sh"
        title="Let's talk"
        description="Open to SWE internships, full-time roles, and interesting technical conversations."
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
                email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="font-display text-lg text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
                phone
              </p>
              <p className="font-display text-lg text-[var(--color-text)]">
                {profile.phone}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
                elsewhere
              </p>
              <div className="mt-1 flex flex-col gap-1">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.links.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                >
                  Codeforces ↗
                </a>
              </div>
            </div>
            <Button as="a" href={profile.resumeUrl} download variant="outline">
              Download Resume
            </Button>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
          >
            {/* Web3Forms config fields — hidden, not shown to the visitor */}
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New message from portfolio contact form" />
            <input type="hidden" name="redirect" value={redirectUrl} />
            {/* honeypot spam trap — must stay empty, real users never see it */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-faint)]">
                name
              </label>
              <input
                required
                name="name"
                className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2.5 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-faint)]">
                email
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2.5 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-faint)]">
                message
              </label>
              <textarea
                required
                minLength={10}
                rows={5}
                name="message"
                className="w-full resize-none rounded-md border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2.5 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="What's on your mind? (min. 10 characters)"
              />
            </div>

            <Button as="button" type="submit" variant="primary" className="w-full justify-center">
              Send Message
            </Button>

            {!WEB3FORMS_ACCESS_KEY && (
              <p className="font-mono text-xs text-[var(--color-danger)]">
                ⚠ Web3Forms access key not configured yet — see .env.example / README.
                The form will not deliver email until this is set.
              </p>
            )}
            {banner === "sent" && (
              <p className="font-mono text-xs text-[var(--color-success)]">
                ✓ Message sent — I'll get back to you soon.
              </p>
            )}
            {banner === "error" && (
              <p className="font-mono text-xs text-[var(--color-danger)]">
                Something went wrong on Web3Forms' end. Please try again or email directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
