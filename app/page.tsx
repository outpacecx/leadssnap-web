export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            Leads<span className="text-accent">Snap</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://app.leadssnap.com"
              className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block"
            >
              Sign In
            </a>
            <a
              href="mailto:support@leadssnap.com?subject=LeadsSnap%20Invite%20Request"
              className="h-9 px-4 bg-accent text-white text-sm font-medium rounded-lg flex items-center hover:bg-accent/90 transition-colors"
            >
              Request Invite
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Invite-only beta
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Capture leads in seconds,
            <br />
            <span className="text-accent">not minutes.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
            Snap a photo of any business card or event badge. AI extracts the
            contact, enriches company intel, scores the lead, and drafts your
            follow-up — all before you leave the booth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:support@leadssnap.com?subject=LeadsSnap%20Invite%20Request"
              className="h-12 px-8 bg-accent text-white font-semibold rounded-xl flex items-center justify-center hover:bg-accent/90 transition-colors text-base"
            >
              Request Invite
            </a>
            <a
              href="#how-it-works"
              className="h-12 px-8 bg-surface border border-border text-foreground font-medium rounded-xl flex items-center justify-center hover:border-accent/30 transition-colors text-base"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-surface/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Three steps. Zero typing.
          </h2>
          <p className="text-muted text-center mb-14 max-w-xl mx-auto">
            From photo to qualified lead in under 10 seconds.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" fill="none" stroke="#2563EB" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                </svg>
              </div>
              <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Step 1</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Scan</h3>
              <p className="text-muted text-sm">
                Snap a photo of a business card, event badge, or LinkedIn QR code. Works with your camera or photo gallery.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" fill="none" stroke="#2563EB" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Step 2</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Enrich</h3>
              <p className="text-muted text-sm">
                AI fills in missing emails, LinkedIn profiles, and company intel — industry, revenue, business model. Then scores the lead against your ICP.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" fill="none" stroke="#2563EB" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Step 3</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Export</h3>
              <p className="text-muted text-sm">
                Export to Google Sheets, save to phone contacts, or draft a follow-up email with one tap. Your leads, your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Everything you need at events
          </h2>
          <p className="text-muted text-center mb-14 max-w-xl mx-auto">
            Built for B2B sales pros who work conferences, trade shows, and networking events.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>}
              title="AI Card & Badge Scanning"
              description="Claude AI reads business cards and event badges with near-perfect accuracy. QR codes on badges are decoded and merged automatically."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" /></svg>}
              title="Company Intel"
              description="AI enriches every lead with industry, B2B/B2C type, estimated revenue, and a company bio — so you know who you're talking to."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>}
              title="AI Lead Scoring"
              description="Define your Ideal Customer Profile. Every lead gets scored 1-5 automatically so you know who to follow up with first."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>}
              title="Qualifier Questions"
              description="Set up custom questions per event — budget, timeline, decision authority. Answer them after each scan to qualify leads on the spot."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.468a1.5 1.5 0 0 1-1.594 0L2.25 6.75" /></svg>}
              title="AI Email Drafts"
              description="Generate a personalized follow-up email with one tap. References the event, your notes, and their role — then send from your inbox."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>}
              title="Export Everywhere"
              description="Google Sheets, phone contacts, vCard files. One tap to export with all fields including company intel and qualifier responses."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" /></svg>}
              title="Offline Mode"
              description="Bad WiFi at the venue? No problem. Scans queue locally and sync automatically when you're back online."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>}
              title="Analytics Dashboard"
              description="See leads per event, scan frequency, and score distribution at a glance. Know which events deliver the best leads."
            />
            <FeatureCard
              icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" /></svg>}
              title="Digital Business Card"
              description="Create your own shareable profile with a vCard QR code. Share your card link at events — no paper needed."
            />
          </div>
        </div>
      </section>

      {/* Built for Events */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Built for the event floor
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            LeadsSnap is a mobile-first PWA designed for one-handed use at
            conferences, trade shows, and networking events. Install it on your
            phone, scan leads between conversations, and never lose a contact
            again.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-background border border-border rounded-xl">
              <div className="text-2xl font-bold text-accent mb-1">&lt;10s</div>
              <div className="text-sm text-muted">Card to qualified lead</div>
            </div>
            <div className="p-5 bg-background border border-border rounded-xl">
              <div className="text-2xl font-bold text-accent mb-1">3 modes</div>
              <div className="text-sm text-muted">Cards, badges, QR codes</div>
            </div>
            <div className="p-5 bg-background border border-border rounded-xl">
              <div className="text-2xl font-bold text-accent mb-1">Works offline</div>
              <div className="text-sm text-muted">Sync when back online</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to capture leads smarter?
          </h2>
          <p className="text-muted text-lg mb-8">
            LeadsSnap is currently in invite-only beta. Request access and
            we&apos;ll get you set up before your next event.
          </p>
          <a
            href="mailto:support@leadssnap.com?subject=LeadsSnap%20Invite%20Request"
            className="inline-flex h-12 px-8 bg-accent text-white font-semibold rounded-xl items-center hover:bg-accent/90 transition-colors text-base"
          >
            Request Invite
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            &copy; 2026 LeadsSnap
          </div>
          <a
            href="https://app.leadssnap.com"
            className="text-sm text-accent hover:underline"
          >
            Open App
          </a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-surface border border-border rounded-xl hover:border-accent/20 transition-colors">
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
