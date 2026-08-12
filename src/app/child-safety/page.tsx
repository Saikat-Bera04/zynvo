import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Child Safety Standards — Zynvo',
  description:
    'Zynvo\u2019s commitment to child safety: our minimum age policy, our zero-tolerance stand against child sexual abuse and exploitation (CSAE), how to report a concern, and how reports are handled.',
  alternates: { canonical: 'https://zynvosocial.com/child-safety' },
  openGraph: {
    type: 'article',
    url: 'https://zynvosocial.com/child-safety',
    title: 'Child Safety Standards — Zynvo',
    description:
      'How Zynvo protects minors on our platform, our CSAE policy, and how to report a concern.',
    siteName: 'Zynvo',
  },
  robots: { index: true, follow: true },
};

const CHILD_SAFETY_EMAIL = 'zynvosocial@zynvosocial.com';
const SUPPORT_EMAIL = 'zynvosocial@gmail.com';
const APP_URL = 'https://app.zynvosocial.com';
const LAST_UPDATED = 'August 13, 2026';
const EFFECTIVE = 'August 13, 2026';

export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-gray-200">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Child Safety Standards
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Effective Date: {EFFECTIVE} &middot; Last Updated: {LAST_UPDATED}
          </p>
        </div>

        <Section title="1. Our Commitment">
          <p>
            <strong className="text-white">Zynvo</strong> (
            <a className="text-yellow-400 underline-offset-2 hover:underline" href={APP_URL}>
              zynvosocial.com
            </a>
            ) is a platform built for college students to discover clubs,
            events, and communities on campus. We have a{' '}
            <strong className="text-white">zero-tolerance policy</strong>{' '}
            toward any content or conduct that endangers, sexualizes,
            exploits, or otherwise harms minors, on or off our platform.
          </p>
          <p>
            This page describes our child safety standards, how we prevent
            and respond to child sexual abuse and exploitation (CSAE), and
            how anyone &mdash; user or not &mdash; can report a concern to us
            directly.
          </p>
        </Section>

        <Section title="2. Who Can Use Zynvo">
          <p>
            Zynvo is intended for users who are{' '}
            <strong className="text-white">at least 13 years old</strong>,
            and in practice our user base is almost entirely college
            students aged 17 and older who sign up with a valid institutional
            or personal email address. We do not knowingly allow anyone under
            13 to create an account.
          </p>
          <p>
            If we learn that an account belongs to a child under 13, or that
            a user has misrepresented their age to access age-restricted
            features, we suspend the account and delete the associated data
            in line with Section 7 (&ldquo;Account Deletion&rdquo;) of our{' '}
            <Link
              className="text-yellow-400 underline-offset-2 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="3. Zero Tolerance for Child Sexual Abuse and Exploitation (CSAE)">
          <p>
            We strictly prohibit child sexual abuse material (CSAM) and any
            behavior that sexualizes, endangers, or exploits a minor. This
            includes, without limitation:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Uploading, sharing, linking to, or requesting CSAM in any
              format, real or synthetic (including AI-generated imagery)
            </li>
            <li>
              Sexualized text, images, or commentary involving a minor, or
              content that presents a minor in a sexualized context
            </li>
            <li>
              Grooming behavior: befriending a minor with the intent to
              sexually abuse or exploit them, including attempts to isolate a
              minor from trusted adults or move a conversation to a private
              or unmonitored channel
            </li>
            <li>
              Sextortion, or threatening to expose intimate content of a
              minor
            </li>
            <li>
              Facilitating, advertising, or coordinating child sex trafficking
              or any other form of child exploitation
            </li>
            <li>
              Any attempt to contact, solicit, or arrange to meet a minor for
              a sexual purpose
            </li>
          </ul>
          <p>
            Any account engaging in the above is permanently banned on first
            confirmed offense. We do not issue warnings for CSAE violations.
          </p>
        </Section>

        <Section title="4. Detection &amp; Prevention">
          <p>We use a layered approach to keep minors safe on Zynvo:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-white">Human moderation</strong> of
              reported posts, comments, profiles, and event content
            </li>
            <li>
              <strong className="text-white">Automated screening</strong> of
              uploaded media, with escalation to our moderation team for
              anything flagged as potentially exploitative or abusive
            </li>
            <li>
              <strong className="text-white">In-app reporting tools</strong>{' '}
              on every profile, post, comment, and event so any user can flag
              content or behavior for review
            </li>
            <li>
              <strong className="text-white">Account-level enforcement</strong>{' '}
              &mdash; content removal, feature restriction, suspension, or
              permanent ban, depending on severity
            </li>
            <li>
              <strong className="text-white">No tolerance for repeat contact
              attempts</strong> &mdash; blocked or reported users who create
              new accounts to re-contact the same person are banned again on
              detection
            </li>
          </ul>
        </Section>

        <Section title="5. How to Report a Concern">
          <p>
            You do not need to be a Zynvo user to report a concern. If you
            encounter content or behavior on Zynvo that you believe
            endangers, sexualizes, or exploits a minor:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-white">In the app:</strong> use the
              &ldquo;Report&rdquo; option on the profile, post, comment, or
              event in question. This routes directly to our moderation
              queue.
            </li>
            <li>
              <strong className="text-white">By email:</strong> write to our
              designated child safety contact at{' '}
              <a
                className="text-yellow-400 underline-offset-2 hover:underline"
                href={`mailto:${CHILD_SAFETY_EMAIL}?subject=Child%20Safety%20Report`}
              >
                {CHILD_SAFETY_EMAIL}
              </a>{' '}
              with as much detail as you can provide (username, link,
              screenshots, and a description of what happened).
            </li>
          </ul>
          <p>
            Reports are confidential. We do not disclose a reporter&apos;s
            identity to the person being reported.
          </p>
        </Section>

        <Section title="6. What Happens After You Report">
          <ol className="ml-5 list-decimal space-y-1.5">
            <li>
              Our team reviews every child safety report on a priority basis,
              separate from general content moderation queues.
            </li>
            <li>
              Confirmed CSAE content is removed immediately and the
              associated account is permanently banned.
            </li>
            <li>
              We preserve relevant records as required for legal compliance
              and cooperation with law enforcement (see Section 7).
            </li>
            <li>
              Where legally required, confirmed CSAM is reported to the
              appropriate national authority &mdash; in India, this includes
              reporting under the{' '}
              <strong className="text-white">
                Protection of Children from Sexual Offences (POCSO) Act, 2012
              </strong>{' '}
              and coordination with law enforcement as applicable.
            </li>
          </ol>
        </Section>

        <Section title="7. Cooperation with Law Enforcement">
          <p>
            We cooperate with law enforcement and regulatory authorities
            investigating CSAE, and will disclose account information in
            response to valid legal process, or where necessary to prevent
            imminent harm to a minor, consistent with Section 4
            (&ldquo;Who We Share Your Data With&rdquo;) of our{' '}
            <Link
              className="text-yellow-400 underline-offset-2 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="8. Standards We Follow">
          <p>
            Our policies are informed by Google Play&apos;s Child Safety
            Standards and CSAE policy, industry best practices for online
            platforms with user-generated content, and applicable Indian law,
            including the POCSO Act, 2012. We review and update our
            enforcement practices as these standards evolve.
          </p>
        </Section>

        <Section title="9. Designated Child Safety Point of Contact">
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-5">
            <p>
              <strong className="text-white">Child safety reports:</strong>{' '}
              <a
                className="text-yellow-400 underline-offset-2 hover:underline"
                href={`mailto:${CHILD_SAFETY_EMAIL}?subject=Child%20Safety%20Report`}
              >
                {CHILD_SAFETY_EMAIL}
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-white">General support:</strong>{' '}
              <a
                className="text-yellow-400 underline-offset-2 hover:underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-white">Website:</strong>{' '}
              <a
                className="text-yellow-400 underline-offset-2 hover:underline"
                href={APP_URL}
              >
                {APP_URL}
              </a>
            </p>
          </div>
          <p className="mt-4">
            This contact is monitored regularly and is reserved for child
            safety concerns so reports are not delayed behind general support
            tickets.
          </p>
        </Section>

        <Section title="10. Changes to This Page">
          <p>
            We may update this Child Safety Standards page as our policies,
            tooling, or applicable law evolve. The &ldquo;Last Updated&rdquo;
            date at the top reflects the most recent revision.
          </p>
        </Section>

        <p className="mt-12 text-xs text-gray-500">
          See also our{' '}
          <Link
            className="text-yellow-400 underline-offset-2 hover:underline"
            href="/privacy"
          >
            Privacy Policy
          </Link>{' '}
          for how we handle personal data, and our{' '}
          <Link
            className="text-yellow-400 underline-offset-2 hover:underline"
            href="/delete-account"
          >
            account deletion
          </Link>{' '}
          page.
        </p>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-gray-800 pt-10">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-300">
        {children}
      </div>
    </section>
  );
}