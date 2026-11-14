
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Purple Rock Wealth Partners",
  description:
    "Read the Purple Rock Wealth Partners privacy policy draft covering website enquiries and personal information handling.",
  alternates: {
    canonical:
      "https://purplerockwealthpartners.com/privacy-policy/",
  },
};

const sections = [
  {
    title: "1. About this Policy",
    paragraphs: [
      "This policy explains how Purple Rock Wealth Partners proposes to collect, use and manage personal information through this website. It must be reviewed and approved before publication to ensure it accurately reflects the business's actual practices and applicable legal obligations.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Information voluntarily provided through the website enquiry form may include your name, email address, telephone number, company or practice name, area of interest and enquiry message.",
      "Technical information may also be collected by website hosting, security, form-processing or analytics services. The exact categories and service providers must be confirmed before publication.",
    ],
  },
  {
    title: "3. How Information Is Used",
    paragraphs: [
      "Information submitted through an enquiry may be used to respond to your request, communicate about potential business services and maintain relevant business records.",
      "Additional uses, including marketing communications, must be disclosed and managed in accordance with applicable requirements.",
    ],
  },
  {
    title: "4. Information Sharing",
    paragraphs: [
      "Personal information may be processed by service providers involved in operating the website and handling enquiries. The identity, location and data-handling practices of relevant providers should be confirmed.",
      "Any additional sharing with external professional advisers, commercial participants or other third parties must be accurately described before this policy is published.",
    ],
  },
  {
    title: "5. Storage and Security",
    paragraphs: [
      "Reasonable measures should be used to protect information from misuse, interference, loss and unauthorised access, modification or disclosure.",
      "The business must confirm the specific storage locations, access controls, retention practices and security measures that apply to website enquiries.",
    ],
  },
  {
    title: "6. Overseas Processing",
    paragraphs: [
      "Some website service providers may process information outside Australia. Relevant countries, contractual arrangements and overseas disclosure requirements must be verified before finalising this section.",
    ],
  },
  {
    title: "7. Access and Correction",
    paragraphs: [
      "Individuals may request access to or correction of their personal information, subject to applicable legal requirements and exceptions. The business must establish an appropriate contact channel and procedure for responding to these requests.",
    ],
  },
  {
    title: "8. Cookies and Analytics",
    paragraphs: [
      "The website may use technical storage or analytics services. The final policy must identify the tools actually implemented and explain any relevant consent, opt-out or information-handling arrangements.",
    ],
  },
  {
    title: "9. Privacy Enquiries and Complaints",
    paragraphs: [
      "The business must provide verified privacy contact details and an appropriate complaints-handling process before the policy is published. Applicable escalation rights should also be explained.",
    ],
  },
  {
    title: "10. Changes to this Policy",
    paragraphs: [
      "This policy may be revised to reflect changes in business practices, technology or legal obligations. The published version should identify its effective date and be maintained as necessary.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            Website Information
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-white/70">
            Information about the handling of personal information
            submitted through this website.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 border-l-4 border-[#D2B650] bg-white p-6">
            <p className="font-semibold">
              Draft — Not Approved for Publication
            </p>

            <p className="mt-3 text-sm leading-7 text-[#211D25]/70">
              This text is an implementation draft and requires
              review against actual business practices and
              applicable Australian privacy requirements.
            </p>
          </div>

          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                <div className="space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-8 text-[#211D25]/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-[#211D25]/20 pt-8">
            <Link
              href="/contact/"
              className="font-semibold text-[#80549A]"
            >
              Return to Contact ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
