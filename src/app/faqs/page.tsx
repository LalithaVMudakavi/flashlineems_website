"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { TopBar } from "../../../components/layout/top-bar";
import { Header } from "../../../components/layout/header";

const faqs = [
  {
    question: "What types of PCBs do you manufacture?",
    answer:
      "We manufacture a wide range of PCB types, including single-sided, double-sided, multi-layer, rigid, and flexible PCBs.",
  },
  {
    question: "What industries do you serve with your PCBs?",
    answer:
      "Our PCBs are used in various industries, including automotive, aerospace, medical, telecommunications, consumer electronics, and more.",
  },
  {
    question: "What PCB design software and file formats do you accept?",
    answer:
      "We accept a variety of PCB design software file formats, such as Gerber, Eagle, Altium, and KiCad, among others. Please check our guidelines for specific details.",
  },
  {
    question: "What is the standard lead time for PCB manufacturing?",
    answer:
      "The lead time for PCB manufacturing depends on factors like complexity, quantity, and chosen materials. Typically, it ranges from 10 to 15 business days. Refer to our website for more details.",
  },
  {
    question:
      "Can you provide expedited PCB manufacturing services for urgent orders?",
    answer:
      "Yes, we offer expedited manufacturing services for customers with tight deadlines. Contact our sales team to discuss your requirements.",
  },
  {
    question: "Do you offer design assistance or PCB layout services?",
    answer:
      "We provide PCB design assistance and layout services to help optimize your designs for manufacturing. Contact us for more information.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for PCBs?",
    answer:
      "The MOQ for PCBs depends on factors like size, complexity, and materials. We offer both prototype and production run to accommodate various order sizes.",
  },
  {
    question:
      "What quality control measures do you have in place during PCB manufacturing?",
    answer:
      "We implement stringent quality control processes throughout the manufacturing process, including inspections and testing to ensure the highest quality PCBs.",
  },
  {
    question:
      "Are your PCBs compliant with industry standards (e.g., IPC, RoHS, UL)?",
    answer:
      "Yes, our PCBs are manufactured to comply with industry-specific standards and regulations. Certifications and compliance documentation are available on request.",
  },
  {
    question:
      "Can I request a PCB prototype or sample before placing a production order?",
    answer:
      "Yes, we offer PCB prototypes and samples. Contact our sales team to inquire about prototype options.",
  },
  {
    question: "What is your pricing structure for PCB manufacturing?",
    answer:
      "Our pricing structure varies based on factors like PCB type, quantity, and specifications. Request a quote through our website or contact our sales team for detailed pricing information.",
  },
  {
    question: "How can I place an order for PCB manufacturing?",
    answer:
      "Request a quote through our website or by contacting our sales team directly.",
  },
  {
    question:
      "Do you offer PCB assembly services in addition to manufacturing?",
    answer:
      "Yes, we provide PCB assembly services for a complete turnkey solution. Contact us for details on our assembly capabilities.",
  },
  {
    question: "What is PCB assembly?",
    answer:
      "PCB assembly is the process of populating a printed circuit board (PCB) with electronic components to make it functional.",
  },
  {
    question: "What types of PCB assembly services do you offer?",
    answer:
      "We provide a range of PCB assembly services, including surface mount technology (SMT), through-hole assembly, and mixed technology assembly.",
  },
  {
    question: "What are the advantages of surface mount technology (SMT) assembly?",
    answer:
      "SMT assembly offers advantages like smaller form factors, higher component density, and improved performance.",
  },
  {
    question: "Can you handle both small and large production runs?",
    answer:
      "Yes, we can accommodate both small-batch prototype runs and large-scale production orders.",
  },
  {
    question: "What is the typical lead time for PCB assembly?",
    answer:
      "Lead times vary depending on the project’s complexity and quantity. Contact us for specific lead time estimates.",
  },
  {
    question: "Do you offer prototype PCB assembly services?",
    answer:
      "Yes, we offer prototype assembly services to help you test and refine your designs.",
  },
  {
    question: "Can you assist with PCB design and layout services?",
    answer:
      "We can provide PCB design and layout services to optimize your design for manufacturing.",
  },
  {
    question: "What types of components can you source for PCB assembly?",
    answer:
      "We can source a wide range of electronic components, including custom or specialized parts.",
  },
  {
    question: "How do you ensure the quality of PCB assemblies?",
    answer:
      "We have stringent quality control measures and follow industry standards to ensure the reliability and performance of our PCB assemblies.",
  },
  {
    question: "What is the warranty for your PCB assembly services?",
    answer:
      "We offer a warranty for our PCB assembly work to provide peace of mind to our customers.",
  },
  {
    question: "How do I request a quote for PCB assembly services?",
    answer:
      "You can request a quote by contacting our sales team through our website or by phone or email.",
  },
  {
    question: "What industries do you serve with your PCB assembly services?",
    answer:
      "We serve a wide range of industries, including aerospace, automotive, consumer electronics, and medical devices.",
  },
  {
    question: "Can you provide case studies or customer testimonials of your work?",
    answer:
      "We have case studies and testimonials that showcase our successful PCB assembly projects.",
  },
  {
    question:
      "What sets your PCB assembly services apart from others in the industry?",
    answer:
      "Our expertise, quality, and commitment to customer satisfaction set us apart as a reliable PCB assembly partner.",
  },
  {
    question:
      "How do I get in touch with your team for further inquiries or to start a project?",
    answer:
      "You can reach our team through our contact page on the website, where you’ll find phone numbers and email addresses for our staff.",
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          TOP BAR + HEADER
      ========================================================= */}
      <TopBar />
      <Header />

      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <section className="bg-[#F7F9FC] pb-16 pt-[150px] lg:pb-20 lg:pt-[170px]">
        <div className="container-flashline">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#F4511E]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
                Support
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#334155] sm:text-5xl lg:text-6xl">
              Frequently Asked
              <span className="block text-[#F4511E]">
                Question&apos;s
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              Find answers to commonly asked questions about our PCB
              manufacturing, assembly services, capabilities, quality and
              production requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-flashline">
          <div className="mx-auto max-w-5xl">
            {/* Section heading */}
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <MessageCircleQuestion
                    size={20}
                    className="text-[#F4511E]"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
                    FAQs
                  </p>
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#334155] sm:text-4xl">
                  Everything you need to know
                </h2>
              </div>

              <div className="hidden text-sm font-medium text-[#94A3B8] sm:block">
                {faqs.length} Questions
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_40px_rgba(38,54,77,0.06)]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-[#EEF2F6] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className={`
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5
                        px-5
                        py-5
                        text-left
                        transition-all
                        duration-200
                        sm:px-7
                        ${
                          isOpen
                            ? "bg-[#FFF8F5]"
                            : "bg-white hover:bg-[#FAFBFC]"
                        }
                      `}
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <span
                          className={`
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            text-xs
                            font-bold
                            transition-all
                            duration-200
                            ${
                              isOpen
                                ? "bg-[#F4511E] text-white"
                                : "bg-[#FFF1EB] text-[#F4511E]"
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`
                            pt-1
                            text-[15px]
                            font-semibold
                            leading-6
                            sm:text-base
                            ${
                              isOpen
                                ? "text-[#F4511E]"
                                : "text-[#334155]"
                            }
                          `}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "border-[#F4511E]/20 bg-[#F4511E] text-white"
                              : "border-[#E2E8F0] bg-[#F8FAFC] text-[#94A3B8]"
                          }
                        `}
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={2}
                          className={`
                            transition-transform
                            duration-300
                            ${isOpen ? "rotate-180" : ""}
                          `}
                        />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 pl-[68px] pr-6 sm:px-7 sm:pb-7 sm:pl-[84px]">
                          <p className="max-w-4xl text-[15px] leading-7 text-[#64748B] sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}
            <div className="mt-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC]">
              <div className="flex flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div>
                  <p className="text-lg font-black text-[#334155]">
                    Still have questions?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#64748B]">
                    Our team is ready to help with your PCB manufacturing
                    requirements.
                  </p>
                </div>

                <a
                  href="/contact-us"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    rounded-md
                    bg-[#F4511E]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_8px_24px_rgba(244,81,30,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#E94716]
                  "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}