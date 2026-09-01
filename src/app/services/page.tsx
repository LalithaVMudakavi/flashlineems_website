// import Link from "next/link";

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-[#F5F8FC]">
//       <section className="bg-[#062D82] py-24 text-white">
//         <div className="container-flashline">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//             Solutions
//           </p>

//           <h1 className="mt-4 text-5xl font-black tracking-tight">
//             Electronics Manufacturing Services
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/75">
//             Engineering, fabrication, assembly, testing and box-build
//             capabilities under one manufacturing partner.
//           </p>
//         </div>
//       </section>

//       <section className="container-flashline py-16">
//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             ["Engineering Design", "/services/engineering-design"],
//             ["PCB Fabrication", "/services/pcb-fabrication"],
//             ["PCB Assembly", "/services/pcb-assembly"],
//             ["Testing", "/services/testing"],
//             ["Box Build", "/services/box-build"],
//           ].map(([title, href]) => (
//             <Link
//               href={href}
//               key={href}
//               className="border border-slate-200 bg-white p-7 font-bold text-[#062D82] transition hover:-translate-y-1 hover:border-[#F4511E] hover:shadow-xl"
//             >
//               {title}
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Layers3,
  Settings2,
  Box,
} from "lucide-react";

import { TopBar } from "../../../components/layout/top-bar";
import { Header } from "../../../components/layout/header";

const services = [
  {
    number: "01",
    title: "Engineering Design",
    label: "ENGINEERING",
    description:
      "Design collaboration with consumers is crucial to maximize productivity and apply cost-effective techniques to product development and solution implementation. And the use of collaborative product design guarantees that industry best practices are followed. Our engineering design services produce high-quality products and solutions that foster long-term, mutually benefit.",
    href: "/services/engineering-design",
    icon: Cpu,
    image: "/services/engineer-design.png",
  },
  {
    number: "02",
    title: "PCB Fabrication",
    label: "FABRICATION",
    description:
      "Flashline EMS is a premier producer and supplier of bespoke PCB fabrication and prototype services, with a diverse team of professionals and extensive experience in providing PCB assembly and layout services, as proven by our global customer base.",
    href: "/services/pcb-fabrication",
    icon: Layers3,
    image: "/services/pcbfabrication.png",
  },
  {
    number: "03",
    title: "PCB Assembly",
    label: "ASSEMBLY",
    description:
      "For gaining an advantage over your competition, nothing beats a quick turnaround for your PCB assembly services. Flashline PCB is a one-stop shop for all of your PCB fabrication and assembly needs. We will work directly with you to achieve the best quality and the shortest turn around, whether you need low-volume or high-volume PCB assembly. ",
    href: "/services/pcb-assembly",
    icon: Settings2,
    image: "/services/pcbassemblyimage.png",
  },
  {
    number: "04",
    title: "Box Build",
    label: "INTEGRATION",
    description:
      "When it comes to boxing build assembly, there is such a vast range of products that varies from person to person. It can be as basic as putting electronic systems into simple enclosures with interfaces or displays. ",
    href: "/services/box-build",
    icon: Box,
    image: "/box-build/boxbuildimage.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F6F7F8] pt-[145px] lg:pt-[165px]">
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-flashline relative">
          <div className="grid min-h-[520px] items-center gap-12 lg:grid-cols-[1fr_360px]">
            <div className="pb-20 pt-16 lg:pb-28">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-14 bg-[#F4511E]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4511E]">
                  Electronics Manufacturing Services
                </span>
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#263445] sm:text-6xl lg:text-[78px]">
                Engineering.
                <br />

                <span className="text-[#F4511E]">Manufacturing.</span>
                <br />

                Integration.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
                An integrated approach to electronics manufacturing, bringing
                engineering expertise, precision production and system
                integration together under one roof.
              </p>
            </div>

            {/* Hero technical panel */}
            <div className="relative hidden h-[360px] border-l border-[#CBD5E1] lg:block">
              <div className="absolute left-10 top-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
                  Manufacturing lifecycle
                </span>

                <div className="mt-8 space-y-5">
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.number}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center border border-[#CBD5E1] bg-white text-[#F4511E]">
                          <Icon size={16} strokeWidth={1.7} />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold tracking-[0.18em] text-[#94A3B8]">
                            {service.number}
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-[#334155]">
                            {service.title}
                          </p>
                        </div>

                        {index < services.length - 1 && (
                          <div className="absolute left-[57px] mt-[76px] h-7 w-px bg-[#CBD5E1]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =====================================================
          SERVICE JOURNEY
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-flashline">
          {/* Vertical connection line */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px bg-[#D9DEE5] lg:block" />

          <div className="relative space-y-20 lg:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 !== 0;

              return (
                <div
                  key={service.number}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-24 ${
                    isEven ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`group relative ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative overflow-hidden bg-[#E9EDF1]">
                      <div className="aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/35 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-sm font-black text-[#263445]">
                        {service.number}
                      </div>

                      {/* Label */}
                      <div className="absolute bottom-5 left-5 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center bg-[#F4511E] text-white">
                          <Icon size={17} strokeWidth={1.7} />
                        </div>

                        <span className="text-[10px] font-bold tracking-[0.2em] text-white">
                          {service.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative ${
                      isEven ? "lg:order-1 lg:text-right" : "lg:order-2"
                    }`}
                  >
                    {/* Connector */}
                    <div
                      className={`absolute top-10 hidden h-px w-20 bg-[#CBD5E1] lg:block ${
                        isEven
                          ? "-right-24"
                          : "-left-24"
                      }`}
                    />

                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4511E]">
                      {service.number} / {service.label}
                    </p>

                    <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#263445] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p
                      className={`mt-5 max-w-lg text-base leading-8 text-[#64748B] ${
                        isEven ? "ml-auto" : ""
                      }`}
                    >
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className={`mt-7 inline-flex items-center gap-3 border-b border-[#F4511E] pb-2 text-sm font-bold text-[#334155] transition-colors hover:text-[#F4511E]`}
                    >
                      Explore {service.title}

                      <ArrowUpRight
                        size={16}
                        className="text-[#F4511E]"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#263445]">
        <div className="container-flashline">
          <div className="relative overflow-hidden py-20 lg:py-28">
            {/* Technical decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-5 top-[-5px] h-[170px] w-[170px] rounded-full border border-[#F4511E]/30" />

            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4511E]">
                  Start your next project
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Let&apos;s turn your
                  <span className="block text-[#CBD5E1]">
                    idea into reality.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#94A3B8]">
                  Tell us about your product, requirements and manufacturing
                  goals. Our team will help determine the right path forward.
                </p>
              </div>

              <Link
                href="/request-a-quote"
                className="group inline-flex items-center gap-4 self-start bg-[#F4511E] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#E04412] lg:self-end rounded-xl"
              >
                Request a Quote

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
