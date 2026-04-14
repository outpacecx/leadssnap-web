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
      <section className="pt-28 pb-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Invite-only beta
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
              Capture leads in seconds,
              <br />
              <span className="text-accent">not minutes.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-10">
              Snap a photo of any business card or event badge. AI extracts the
              contact, enriches company intel, scores the lead, and drafts your
              follow-up — all before you leave the booth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
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

          {/* Hero phone mockup */}
          <div className="flex-shrink-0 hidden sm:block phone-tilt">
            <PhoneMockup>
              {/* Scan screen */}
              <div className="p-4">
                <div className="text-base font-bold text-gray-900 mb-3">Scan Lead</div>
                <div className="flex gap-1.5 mb-3">
                  <div className="flex-1 h-7 bg-blue-600 rounded text-[10px] text-white flex items-center justify-center font-medium">Business Card</div>
                  <div className="flex-1 h-7 bg-gray-100 rounded text-[10px] text-gray-500 flex items-center justify-center">Event Badge</div>
                  <div className="flex-1 h-7 bg-gray-100 rounded text-[10px] text-gray-500 flex items-center justify-center">QR Code</div>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center mb-3">
                  <div className="w-8 h-8 mx-auto mb-2 text-gray-300">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>
                  </div>
                  <div className="text-xs font-medium text-gray-700">Upload a photo</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Tap to choose from gallery</div>
                </div>
                {/* Enriched result preview */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">JD</div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">Jane Doe</div>
                      <div className="text-[10px] text-gray-500">VP Sales at Acme Corp</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">5</div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center"><span className="text-[9px] text-gray-400">Email</span><span className="text-[9px] text-gray-700">jane@acme.com</span></div>
                    <div className="flex justify-between items-center"><span className="text-[9px] text-gray-400">Phone</span><span className="text-[9px] text-gray-700">+1 (555) 234-5678</span></div>
                    <div className="flex justify-between items-center"><span className="text-[9px] text-gray-400">Mobile</span><span className="text-[9px] text-gray-700">+1 (555) 987-6543</span></div>
                    <div className="h-px bg-gray-200 my-1" />
                    <div className="text-[9px] text-gray-400 uppercase tracking-wider font-medium">Company Intel</div>
                    <div className="flex justify-between items-center"><span className="text-[9px] text-gray-400">Industry</span><span className="text-[9px] text-gray-700">SaaS / B2B</span></div>
                    <div className="flex justify-between items-center"><span className="text-[9px] text-gray-400">Revenue</span><span className="text-[9px] text-gray-700">$50M-$100M</span></div>
                    <div className="text-[9px] text-gray-500 leading-relaxed mt-1">Enterprise CRM platform for mid-market sales teams. Revenue from annual SaaS subscriptions.</div>
                  </div>
                </div>
                {/* Action buttons */}
                <div className="flex gap-1.5 mt-3">
                  <div className="flex-1 h-7 bg-blue-600 rounded-lg text-[9px] text-white flex items-center justify-center font-medium">Save to Contacts</div>
                  <div className="flex-1 h-7 bg-gray-100 rounded-lg text-[9px] text-gray-600 flex items-center justify-center">Draft Email</div>
                </div>
              </div>
            </PhoneMockup>
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
          <div className="grid sm:grid-cols-3 gap-10">
            {/* Step 1 - Scan */}
            <div className="text-center">
              <div className="mb-6 flex justify-center mini-phone-tilt-1">
                <MiniPhone>
                  <div className="p-2.5">
                    <div className="text-[8px] font-bold text-gray-900 mb-1.5">Scan Lead</div>
                    <div className="bg-gray-800 rounded-lg aspect-[4/3] flex items-center justify-center mb-2 relative">
                      <div className="w-10 h-10 border-2 border-white/40 rounded-lg" />
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[6px] text-white/60">Point at card</div>
                    </div>
                    <div className="h-6 bg-blue-600 rounded-lg text-[8px] text-white flex items-center justify-center font-medium">Capture</div>
                    <div className="h-5 bg-gray-100 rounded-lg text-[7px] text-gray-500 flex items-center justify-center mt-1.5">Upload instead</div>
                  </div>
                </MiniPhone>
              </div>
              <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Step 1</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Scan</h3>
              <p className="text-muted text-sm">
                Snap a photo of a business card, event badge, or LinkedIn QR code. Works with your camera or photo gallery.
              </p>
            </div>
            {/* Step 2 - Enrich */}
            <div className="text-center">
              <div className="mb-6 flex justify-center mini-phone-tilt-2">
                <MiniPhone>
                  <div className="p-2.5 space-y-1.5">
                    <div className="text-[8px] font-bold text-gray-900 mb-1">Lead Detail</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[7px] font-bold">JD</div>
                      <div>
                        <div className="text-[8px] font-semibold text-gray-900">Jane Doe</div>
                        <div className="text-[7px] text-gray-400">VP Sales at Acme</div>
                      </div>
                      <div className="ml-auto w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[7px] font-bold">5</div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="text-[6px] text-gray-400 uppercase tracking-wider font-medium">Company Intel</div>
                    <div className="space-y-1">
                      <div className="flex justify-between"><span className="text-[7px] text-gray-400">Industry</span><span className="text-[7px] text-gray-700">SaaS</span></div>
                      <div className="flex justify-between"><span className="text-[7px] text-gray-400">Type</span><span className="text-[7px] text-gray-700">B2B</span></div>
                      <div className="flex justify-between"><span className="text-[7px] text-gray-400">Revenue</span><span className="text-[7px] text-gray-700">$50M+</span></div>
                    </div>
                    <div className="h-5 bg-gray-100 rounded text-[7px] text-blue-600 flex items-center justify-center font-medium mt-1">Enrich with AI</div>
                  </div>
                </MiniPhone>
              </div>
              <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Step 2</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Enrich</h3>
              <p className="text-muted text-sm">
                AI fills in missing emails, LinkedIn profiles, and company intel — industry, revenue, business model. Then scores the lead against your ICP.
              </p>
            </div>
            {/* Step 3 - Export */}
            <div className="text-center">
              <div className="mb-6 flex justify-center mini-phone-tilt-3">
                <MiniPhone>
                  <div className="p-2.5 space-y-1.5">
                    <div className="text-[8px] font-bold text-gray-900 mb-1">Export</div>
                    <div className="h-6 bg-blue-600 rounded-lg text-[7px] text-white flex items-center justify-center font-medium gap-1">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>
                      Export to Sheets
                    </div>
                    <div className="h-5 bg-gray-100 rounded-lg text-[7px] text-gray-600 flex items-center justify-center font-medium">Save to Contacts</div>
                    <div className="h-5 bg-gray-100 rounded-lg text-[7px] text-gray-600 flex items-center justify-center font-medium">Draft Follow-up Email</div>
                    <div className="mt-1.5 bg-green-50 border border-green-200 rounded-lg p-1.5">
                      <div className="text-[7px] text-green-700 text-center font-medium">12 leads exported</div>
                    </div>
                    <div className="text-[6px] text-gray-400 text-center mt-1">Includes company intel + scores</div>
                  </div>
                </MiniPhone>
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

/* Phone mockup — hero size (iPhone-like proportions) */
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px]">
      {/* Phone body */}
      <div className="bg-[#1d1d1f] rounded-[3rem] p-[10px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)]">
        {/* Dynamic Island */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#1d1d1f] rounded-full z-10" />
        {/* Side button accents */}
        <div className="absolute -right-[2px] top-[120px] w-[3px] h-[50px] bg-[#2d2d2f] rounded-r" />
        <div className="absolute -left-[2px] top-[100px] w-[3px] h-[30px] bg-[#2d2d2f] rounded-l" />
        <div className="absolute -left-[2px] top-[145px] w-[3px] h-[50px] bg-[#2d2d2f] rounded-l" />
        <div className="absolute -left-[2px] top-[200px] w-[3px] h-[50px] bg-[#2d2d2f] rounded-l" />
        {/* Screen */}
        <div className="bg-white rounded-[2.25rem] overflow-hidden min-h-[540px]">
          {/* Status bar */}
          <div className="h-12 bg-white flex items-end justify-between px-7 pb-1">
            <span className="text-[11px] font-semibold text-gray-900">9:41</span>
            <div className="flex gap-1.5 items-center">
              <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.5 3 3.4 5 1 8.2l2.2 2.2C5.2 7.8 8.4 6 12 6s6.8 1.8 8.8 4.4L23 8.2C20.6 5 16.5 3 12 3zm0 6c-2.7 0-5.2 1.1-7 2.9l2.2 2.2c1.2-1.3 3-2.1 4.8-2.1s3.6.8 4.8 2.1l2.2-2.2c-1.8-1.8-4.3-2.9-7-2.9zm0 6c-1.4 0-2.6.5-3.5 1.4L12 20l3.5-3.6c-.9-.9-2.1-1.4-3.5-1.4z"/></svg>
              <div className="w-4 h-2.5 border border-gray-900 rounded-[3px] relative">
                <div className="absolute inset-[2px] bg-gray-900 rounded-[1px]" style={{ width: "55%" }} />
                <div className="absolute -right-[3px] top-[3px] w-[2px] h-[4px] bg-gray-900 rounded-r-sm" />
              </div>
            </div>
          </div>
          {children}
          {/* Home indicator */}
          <div className="flex justify-center py-2">
            <div className="w-28 h-1 bg-gray-900 rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mini phone mockup — steps (taller, more realistic) */
function MiniPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[150px]">
      <div className="bg-[#1d1d1f] rounded-[1.5rem] p-[5px] shadow-lg shadow-gray-900/15">
        {/* Mini Dynamic Island */}
        <div className="absolute left-1/2 -translate-x-1/2 mt-[2px] w-[40px] h-[10px] bg-[#1d1d1f] rounded-full z-10" />
        <div className="bg-white rounded-[1.25rem] overflow-hidden min-h-[220px]">
          {children}
          <div className="flex justify-center py-1.5">
            <div className="w-12 h-0.5 bg-gray-900 rounded-full opacity-20" />
          </div>
        </div>
      </div>
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
