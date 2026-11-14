
import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Purple Rock Wealth Partners",
  description:
    "Contact Purple Rock Wealth Partners to discuss growth strategy, acquisitions, succession planning and opportunities for your financial advice business.",
  alternates: {
    canonical: "https://purplerockwealthpartners.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            Contact
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Your next chapter starts with a conversation.
          </h1>

          <p className="mt-9 max-w-3xl text-xl leading-9 text-white/75">
            Whether you're exploring growth, planning a business
            transition or considering a new strategic opportunity,
            we'd welcome the opportunity to understand your goals.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#80549A]">
              Get in Touch
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Let's discuss your business objectives.
            </h2>

            <p className="mt-7 leading-8 text-[#211D25]/70">
              Complete the enquiry form and provide a brief
              outline of what you would like to discuss.
            </p>

            <div className="mt-12 border-t border-[#211D25]/20 pt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#80549A]">
                Based in
              </p>
              <p className="mt-3 text-lg">
                Melbourne, Victoria, Australia
              </p>
              <p className="mt-3 leading-7 text-[#211D25]/65">
                Engaging with opportunities across Australia
                and the wider Asia-Pacific region.
              </p>
            </div>
          </div>

          <div className="bg-white p-7 md:col-span-8 md:p-12">
            <h2 className="mb-9 text-2xl font-semibold">
              Send an Enquiry
            </h2>

            <Suspense
              fallback={
                <p className="text-[#211D25]/65">
                  Loading enquiry form...
                </p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
