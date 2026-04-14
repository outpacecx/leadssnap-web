import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — LeadsSnap",
  description: "Terms and conditions for using LeadsSnap.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          &larr; Back to home
        </Link>

        <h1 className="text-2xl font-bold mt-6 mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Effective date: April 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Service Description</h2>
            <p className="text-sm text-muted leading-relaxed">
              LeadsSnap is a B2B lead capture application operated by Outpace CX. The
              service allows you to scan business cards, event badges, and QR codes
              using AI-powered image recognition; store, organize, and manage contact
              information; enrich leads with AI-generated company intelligence and
              scoring; export leads to Google Sheets and other formats; and create and
              share a digital business card. By creating an account or using LeadsSnap,
              you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Account Responsibilities</h2>
            <p className="text-sm text-muted leading-relaxed">
              You are responsible for maintaining the security of your account. You
              must provide accurate information when creating your account. You are
              responsible for all activity that occurs under your account. You must
              notify us immediately if you suspect unauthorized access. We reserve the
              right to suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Acceptable Use</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">You agree to use LeadsSnap only for lawful business purposes. You must not:</p>
            <ul className="text-sm text-muted leading-relaxed list-disc pl-5 space-y-2">
              <li>Use automated tools to scrape, crawl, or extract data from the service.</li>
              <li>Use scanned contact data for unsolicited mass communication (spam).</li>
              <li>Upload content that is illegal, harmful, or violates the rights of others.</li>
              <li>Attempt to gain unauthorized access to the service or other users&apos; data.</li>
              <li>Use the service to collect or process personal data in violation of applicable data protection laws, including GDPR.</li>
              <li>Reverse-engineer, decompile, or otherwise attempt to extract the source code of the service.</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-3">
              You are solely responsible for ensuring that your collection and use of
              contact data through LeadsSnap complies with applicable privacy and data
              protection laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. AI-Generated Content Disclaimer</h2>
            <p className="text-sm text-muted leading-relaxed">
              LeadsSnap uses artificial intelligence (powered by Anthropic&apos;s Claude)
              to extract text from images, enrich leads with company information,
              generate lead scores, and draft follow-up emails. AI-generated content
              may be inaccurate, incomplete, or outdated. You should independently
              verify any AI-enriched data before relying on it for business decisions.
              Outpace CX is not responsible for the accuracy of AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Your Data</h2>
            <p className="text-sm text-muted leading-relaxed">
              You retain ownership of all data you upload or create in LeadsSnap. By
              using the service, you grant us a limited license to process your data
              solely for the purpose of providing and improving the service. You can
              export or delete your data at any time through the Account Settings page.
              See our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link> for full details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-sm text-muted leading-relaxed">
              The LeadsSnap service, including its design, code, features, and
              branding, is the intellectual property of Outpace CX. You may not copy,
              modify, distribute, or create derivative works based on the service
              without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-sm text-muted leading-relaxed">
              LeadsSnap is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind. To the maximum extent permitted by
              applicable law, Outpace CX shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages. Our total
              liability shall not exceed the amount you paid us in the 12 months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Termination</h2>
            <p className="text-sm text-muted leading-relaxed">
              You may terminate your account at any time through the Account Settings
              page or by contacting us at support@leadssnap.com. We may suspend or
              terminate your account if you violate these terms. Upon termination, your
              data will be deleted in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Changes to These Terms</h2>
            <p className="text-sm text-muted leading-relaxed">
              We may update these Terms from time to time. If we make material changes,
              we will notify you by email or through a notice in the app. Continued use
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Governing Law</h2>
            <p className="text-sm text-muted leading-relaxed">
              These terms shall be governed by and construed in accordance with
              applicable law. Any disputes shall be resolved in a competent court of
              applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Contact Us</h2>
            <p className="text-sm text-muted leading-relaxed">
              If you have any questions about these Terms, contact us at:
            </p>
            <p className="text-sm text-muted leading-relaxed mt-2">
              <strong className="text-foreground">Outpace CX</strong><br />
              Email: <a href="mailto:support@leadssnap.com" className="text-accent hover:underline">support@leadssnap.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-sm text-muted">
          <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
