"use client";

import Image from "next/image";

const industries = [
  {
    title: "Aerospace",
    description: `Flashline EMS is dedicated to building on our decades-long track record of
    meeting stringent manufacturing specifications, high-quality standards, and
    long-term customer relationships. Flashline, as a proactive solutions partner,
    offers full end-to-end capabilities, from design and engineering to
    production, testing, and supply chain management. We cooperate with
    some of the world’s most well-known aerospace firms to create mission-
    critical high-mix/low-volume electro-mechanical systems based on years of
    manufacturing competence. Only the most diligent contract manufacturer
    can match the precision and dependability requirements of the aerospace
    and aviation industries.`,
    image: "/aerospace.png",
    imageAlt: "Aerospace industry",
    reverse: false,
  },

  {
    title: "Railways and other transportation",
    description: `Flashline EMS is dedicated to building on our decades-long track record of
    meeting stringent manufacturing specifications, high-quality standards, and
    long-term customer relationships. Flashline, as a proactive solutions partner,
    offers full end-to-end capabilities, from design and engineering to
    production, testing, and supply chain management. We cooperate with
    some of the world’s most well-known aerospace firms to create mission-
    critical high-mix/low-volume electro-mechanical systems based on years of
    manufacturing competence. Only the most diligent contract manufacturer
    can match the precision and dependability requirements of the aerospace
    and aviation industries.`,
    image: "/railway.png",
    imageAlt: "Railways and transportation industry",
    reverse: true,
  },

  {
    title: "Health care",
    description: `Flashline EMS is significantly provider of healthcare manufacturing
    solutions. Our customers benefit from our unrivaled skills, experience, and
    scale from design to manufacture and delivery. We have achieved
    leadership in the sector with our execution on digital healthcare, product
    lifecycle management, miniaturization, and additive manufacturing over the
    last five years. At Flashline EMS, we now take a multi-disciplinary,
    collaborative approach to innovation and solving our clients’ problems. We
    have one objective in mind: to become the world’s most technologically
    sophisticated and trustworthy healthcare solutions supplier. Our healthcare
    engineering and technology assists the world’s most trusted healthcare
    businesses to solve their most challenging product design and development
    challenges, from initial concept design to industrialization.`,
    image: "/healthcare.png",
    imageAlt: "Healthcare industry",
    reverse: false,
  },

  {
    title: "Automotive",
    description: `The technologies that enable the changes are increasing demand for those
    who can integrate consumer electronics’ rapid innovation and product
    introductions with the industry’s rigorous engineering, testing,
    manufacturing, and reliability needs. Flashline EMS global manufacturing,
    supply chain knowledge, and industry partners assist automotive clients
    quickly and strategically capitalize on technologies that enable autonomy.
    This includes ADAS, HMI, connectivity, and electrification, as a world-class
    automotive supplier. Major car firms have placed their trust in our goods and
    manufacturing services due to our industrial strength and competitiveness.
    We have been producing and assembling goods for several years and are
    recognized in the automotive industry.`,
    image: "/automative.png",
    imageAlt: "Automotive industry",
    reverse: true,
  },

  {
    title: "IT and telecom",
    description: `Flashline EMS has been providing uncompromising service to our
    telecommunications industry partners for more than two decades, enabling
    cost-effective scaling and constantly delivering best-in-class execution.
    Flashline industrializes customer ideas by leveraging highly integrated
    solutions to achieve stringent performance standards in overall cost, quality,
    dependability, and delivery. In a continually changing industry, our
    customers benefit from our bespoke interaction methods and broad
    strategic skills. We are professionals at building complicated and reliable
    systems for the communications industry because Flashline has been
    designing and manufacturing telecom hardware. All Flashline facilities are
    completely accredited and compatible with all manufacturing requirements
    required for high-reliability telecommunications end-markets, using design
    for excellence guidelines, lean manufacturing technology, and processes.`,
    image: "/itandtelecom.png",
    imageAlt: "IT and telecommunications industry",
    reverse: false,
  },

  {
    title: "Power and energy",
    description: `As part of the Internet of Things, renewable energies and green technology
    are becoming more prevalent in our daily lives, having a good impact on our
    world. We are among the few electronic manufacturing service companies
    to have supported industry pioneers in smart lighting, solar energy,
    renewable energy, electric vehicles, alternative power generation, and other
    fields as an electronic manufacturing service provider to various industries.
    We collaborate with our customers on extensive technical and business
    roadmaps using a diverse set of capabilities and years of manufacturing
    experience.`,
    image: "/powerandenergy.png",
    imageAlt: "Power and energy industry",
    reverse: true,
  },
];

export default function IndustriesServedPage() {
  return (
    <main className="bg-white">
      {/* Page Content */}
      <section className="w-full">
        <div className="mx-auto max-w-[1350px] px-6 lg:px-10 mt-32">
          <div className="space-y-24 py-24 lg:space-y-32 lg:py-28">

            {industries.map((industry, index) => (
              <section
                key={industry.title}
                className="w-full"
              >
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    industry.reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* Text */}
                  <div className="w-full">
                    <h2
                      className="
                        mb-7
                        text-4xl
                        font-bold
                        leading-tight
                        text-[#68B7DD]
                        lg:text-[42px]
                      "
                    >
                      {industry.title}
                    </h2>

                    <p
                      className="
                        max-w-[690px]
                        whitespace-pre-line
                        text-[18px]
                        font-normal
                        leading-[1.8]
                        text-[#687383]
                      "
                    >
                      {industry.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative w-full overflow-hidden">
                    {industry.image ? (
                      <div className="relative aspect-[1.55/1] w-full">
                        <Image
                          src={industry.image}
                          alt={industry.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[1.55/1] w-full" />
                    )}
                  </div>
                </div>
              </section>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}