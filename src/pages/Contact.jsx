import { useEffect, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import profile from "../data/profile";

const WEB3FORMS_ACCESS_KEY = "31caa002-55f5-4924-9319-a84d815dc52d";

export default function Contact() {
  const [banner, setBanner] = useState(null); // null | "sent" | "error"
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setBanner("sent");
        e.target.reset();
      } else {
        setBanner("error");
      }
    } catch (err) {
      setBanner("error");
    } finally {
      setLoading(false);
    }
  };

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
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
          >
            <input type="hidden" name="subject" value="New message from portfolio contact form" />
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

            <Button as="button" type="submit" variant="primary" className="w-full justify-center" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {!WEB3FORMS_ACCESS_KEY && (
              <p className="font-mono text-xs text-[var(--color-danger)]">
                ⚠ Web3Forms access key not configured yet.
              </p>
            )}
            {banner === "sent" && (
              <p className="font-mono text-xs text-[var(--color-success)]">
                ✓ Message sent — I'll get back to you soon.
              </p>
            )}
            {banner === "error" && (
              <p className="font-mono text-xs text-[var(--color-danger)]">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}