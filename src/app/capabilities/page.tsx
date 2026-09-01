// export default function CapabilitiesPage() {
//   return (
//     <div className="min-h-screen bg-[#F5F8FC]">
//       <section className="bg-[#062D82] py-24 text-white">
//         <div className="container-flashline">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//             Capabilities
//           </p>

//           <h1 className="mt-4 text-5xl font-black">
//             Advanced Electronics Manufacturing
//           </h1>

//           <p className="mt-6 max-w-2xl leading-8 text-blue-100/75">
//             Explore Flashline&apos;s PCB, assembly, inspection, testing and
//             manufacturing capabilities.
//           </p>
//         </div>
//       </section>

//       <section className="container-flashline py-16">
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             "HDI PCB",
//             "Rigid PCB",
//             "Rigid-Flex PCB",
//             "Flex PCB",
//             "Metal-Core PCB",
//             "SMT Assembly",
//             "Inspection",
//             "Testing",
//             "Traceability",
//           ].map((item) => (
//             <div
//               key={item}
//               className="border border-slate-200 bg-white p-6 font-bold text-[#062D82] transition hover:border-[#1597E5] hover:shadow-lg"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Settings2,
//   Layers3,
//   CircuitBoard,
//   Cpu,
//   Check,
//   Sparkles,
// } from "lucide-react";

// import { TopBar } from "../../../components/layout/top-bar";
// import { Header } from "../../../components/layout/header";

// const capabilities = [
//   {
//     number: "01",
//     title: "PCB Assembly",
//     category: "ASSEMBLY",
//     description:
//       "High-precision PCB assembly capabilities supporting prototype, new product introduction and production requirements.",
//     href: "/capabilities/pcb-assembly-2",
//     icon: Settings2,
//   },
//   {
//     number: "02",
//     title: "HDI PCB",
//     category: "PCB TECHNOLOGY",
//     description:
//       "High-density interconnect PCB capability for compact and complex electronic designs.",
//     href: "/capabilities/pcb-fabrication/hdipcb",
//     icon: CircuitBoard,
//   },
//   {
//     number: "03",
//     title: "Rigid PCB",
//     category: "PCB TECHNOLOGY",
//     description:
//       "Reliable rigid PCB solutions designed for a wide range of electronic applications.",
//     href: "/capabilities/pcb-fabrication/rigidpcb",
//     icon: Layers3,
//   },
//   {
//     number: "04",
//     title: "Rigid Flex PCB",
//     category: "PCB TECHNOLOGY",
//     description:
//       "Rigid-flex board technology for applications requiring compact, lightweight and reliable interconnects.",
//     href: "/capabilities/pcb-fabrication/rigid-flex-pcb",
//     icon: CircuitBoard,
//   },
//   {
//     number: "05",
//     title: "Metal-core PCB",
//     category: "SPECIALIZED PCB",
//     description:
//       "Metal-core PCB capability for applications requiring improved thermal management and heat dissipation.",
//     href: "/capabilities/pcb-fabrication/metal-core-pcb",
//     icon: Cpu,
//   },
// ];

// export default function CapabilitiesPage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-white">
//       <TopBar />
//       <Header />

//       {/* =====================================================
//           HERO
//       ===================================================== */}
//        <section className="relative overflow-hidden bg-[#F5F7F8] pt-35 lg:pt-38.75">
//   {/* Fine technical grid */}
//   <div
//     className="pointer-events-none absolute inset-0 opacity-[0.035]"
//     style={{
//       backgroundImage:
//         "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
//       backgroundSize: "48px 48px",
//     }}
//   />

//   <div className="container-flashline relative">
//     <div className="grid min-h-117.5 items-center gap-14 lg:grid-cols-[1fr_420px]">

//       {/* =====================================================
//           HERO CONTENT
//       ===================================================== */}
//       <div className="pb-16 pt-12 lg:pb-20">

//         {/* Eyebrow */}
//         <div className="flex items-center gap-4">
//           <span className="h-px w-12 bg-[#F4511E]" />

//           <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F4511E]">
//             Manufacturing Capabilities
//           </p>
//         </div>

//         {/* Heading */}
//                 <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#263445] sm:text-6xl lg:text-[68px]">
//            Manufacturing
//           <span className="block text-[#F4511E]">
//             Capabilities.
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="mt-7 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
//           We recognize that client relationships and adaptability are just as
//           crucial as strong engineering skills from design to mass production.
//           We provide high-end engineering and manufacturing services to all
//           industries as a contract manufacturer.
//         </p>

//         <p className="mt-4 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
//           For years, we have been an electronics manufacturing firm and printed
//           circuit board manufacturer, providing PCB design, prototyping, PCB
//           assembly and manufacturing solutions based on our clients'
//           specifications.
//         </p>

//         {/* CTA */}
//         <div className="mt-8 flex flex-wrap items-center gap-6">

//            <Link
//               href="#capabilities"
//               className="group inline-flex w-fit items-center gap-4 rounded-2xl bg-[#F4511E] px-6 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(244,81,30,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E04412]"
//             >
//                Explore capabilities

//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </span>
//             </Link>
//         </div>
//       </div>

//       {/* =====================================================
//           CAPABILITY VISUAL
//       ===================================================== */}
//       <div className="relative hidden lg:block">
//         <div className="relative mx-auto h-82.5 w-82.5">

//           {/* Outer rings */}
//           <div className="absolute inset-0 rounded-full border border-[#CBD5E1]" />

//           <div className="absolute inset-8.75 rounded-full border border-[#DDE2E7]" />

//           <div className="absolute inset-18 rounded-full border border-[#F4511E]/25" />

//           {/* Center */}
//           <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-[#263445] text-white shadow-lg">
//             <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
//               Capabilities
//             </span>

//             <span className="mt-1 text-4xl font-black">
//               05
//             </span>
//           </div>

//           {/* Capability nodes */}
//           {[
//             {
//               text: "Metal Core PCB",
//               position: "left-[28px] top-[42px]",
//             },
//             {
//               text: "HDI",
//               position: "right-[28px] top-[70px]",
//             },
//             {
//               text: "RIGID",
//               position: "right-[8px] bottom-[65px]",
//             },
//             {
//               text: "RIGID FLEX",
//               position: "left-[45px] bottom-[28px]",
//             },
//             {
//               text: "ASSEMBLY",
//               position: "left-[4px] top-[155px]",
//             },
//           ].map((item) => (
//             <div
//               key={item.text}
//               className={`absolute ${item.position} flex items-center gap-2`}
//             >
//               <span className="h-2 w-2 rounded-full bg-[#F4511E]" />

//               <span className="whitespace-nowrap text-[9px] font-bold tracking-[0.16em] text-[#64748B]">
//                 {item.text}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   </div>
// </section>


//       {/* =====================================================
//           FEATURED CAPABILITY
//       ===================================================== */}
//       <section
//         id="capabilities"
//         className="bg-white py-20 lg:py-22"
//       >
//         <div className="container-flashline">
//           <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#F4511E]" />
//                 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
//                   Featured Capability
//                 </p>
//               </div>

//               <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#263445] sm:text-5xl">
//                 PCB Assembly
//               </h2>
//             </div>

//           </div>

//           <Link
//             href="/capabilities/pcb-assembly-2"
//             className="group relative block overflow-hidden rounded-[28px] border border-[#DDE4EA] bg-[#F7F9FA] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(38,52,69,0.10)]"
//           >
//             <div className="grid lg:grid-cols-[48%_52%]">
//               {/* Visual */}
//               <div className="relative min-h-[400px] overflow-hidden bg-[#263445] lg:min-h-[500px]">
//                 <div
//                   className="absolute inset-0 opacity-[0.06]"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//                     backgroundSize: "34px 34px",
//                   }}
//                 />

//                 {/* Large technical board */}
//                 <div className="absolute left-[12%] top-[15%] h-[70%] w-[76%] rotate-[-4deg] rounded-xl border border-white/15 bg-[#2D3A4B] shadow-2xl transition-transform duration-700 group-hover:rotate-[-2deg] group-hover:scale-[1.02]">
//                   <div className="absolute inset-6 border border-white/10" />

//                   {/* traces */}
//                   <div className="absolute left-0 top-[28%] h-px w-[30%] bg-[#F4511E]" />
//                   <div className="absolute left-[30%] top-[28%] h-[20%] w-px bg-[#F4511E]" />

//                   <div className="absolute right-0 top-[62%] h-px w-[25%] bg-[#F4511E]" />
//                   <div className="absolute right-[25%] top-[45%] h-[17%] w-px bg-[#F4511E]" />

//                   {/* components */}
//                   <div className="absolute left-[17%] top-[17%] h-14 w-24 border border-white/20" />
//                   <div className="absolute left-[18%] top-[58%] h-10 w-10 rounded-full border border-[#F4511E]/60" />
//                   <div className="absolute right-[17%] top-[20%] h-16 w-20 border border-white/15" />
//                   <div className="absolute right-[19%] bottom-[18%] h-12 w-28 border border-[#F4511E]/30" />

//                   <div className="absolute left-1/2 top-1/2 flex h-24 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#F4511E]/30">
//                     <div className="h-10 w-10 bg-[#F4511E]" />
//                   </div>

//                   {/* nodes */}
//                   <div className="absolute left-[16%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#F4511E]" />
//                   <div className="absolute left-[39%] bottom-[20%] h-2.5 w-2.5 rounded-full bg-[#F4511E]" />
//                   <div className="absolute right-[14%] bottom-[18%] h-2.5 w-2.5 rounded-full border border-white/50" />
//                 </div>

//                 {/* Bottom label */}
//                 <div className="absolute bottom-7 left-7">
//                   {/* <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
//                     Capability 01
//                   </p> */}
//                   {/* <p className="mt-2 text-3xl font-black tracking-tight text-white">
//                     PCB ASSEMBLY
//                   </p> */}
//                 </div>

//                 {/* Corner marker */}
//                 <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white">
//                   <ArrowUpRight size={16} />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
//                 <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-3 py-1.5 shadow-sm">
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#F4511E]" />
//                   <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B]">
//                     Precision Manufacturing
//                   </span>
//                 </div>

//                 <h3 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#263445] sm:text-5xl">
//                   PCB Assembly
//                 </h3>

//                 <p className="mt-5 max-w-xl text-base leading-8 text-[#64748B]">
//                   High-precision PCB assembly capabilities supporting
//                   prototype, new product introduction and production
//                   requirements.
//                 </p>

//                 <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                   {[
//                     "Prototype assembly",
//                     "Production assembly",
//                     "Precision placement",
//                     "Quality-focused processes",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 rounded-xl border border-[#E8EDF1] bg-white px-4 py-3"
//                     >
//                       <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF1EB] text-[#F4511E]">
//                         <Check size={12} />
//                       </span>

//                       <span className="text-sm font-semibold text-[#475569]">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-9 flex items-center gap-3 text-sm font-bold text-[#263445]">
//                   Explore capability

//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE4EA] text-[#F4511E] transition-all duration-300 group-hover:border-[#F4511E] group-hover:bg-[#FFF1EB]">
//                     <ArrowUpRight size={16} />
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4511E] transition-all duration-500 group-hover:w-full" />
//           </Link>
//         </div>
//       </section>

//       {/* =====================================================
//           TECHNOLOGY GRID
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#F7F9FA] py-20 lg:py-28">
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#263445 1px, transparent 1px), linear-gradient(90deg, #263445 1px, transparent 1px)",
//             backgroundSize: "42px 42px",
//           }}
//         />

//         <div className="container-flashline relative">
//           <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#F4511E]" />
//                 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
//                   PCB Technologies
//                 </p>
//               </div>

//               <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#263445] sm:text-5xl lg:text-6xl">
//                 Specialized technologies.
//                 <span className="block text-[#94A3B8]">
//                   Different engineering demands.
//                 </span>
//               </h2>
//             </div>

//             <p className="text-sm leading-7 text-[#64748B] lg:text-right">
//               Explore PCB technologies designed for compact, high-density,
//               flexible and thermally demanding applications.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="mt-14 grid gap-5 md:grid-cols-2">
//             {capabilities.slice(1).map((capability) => {
//               const Icon = capability.icon;

//               return (
//                 <Link
//                   key={capability.title}
//                   href={capability.href}
//                   className="group relative overflow-hidden rounded-[24px] border border-[#DDE4EA] bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_20px_55px_rgba(38,52,69,0.08)] sm:p-9"
//                 >
//                   {/* Top */}
//                   <div className="flex items-start justify-between">
//                     <span className="text-4xl font-black tracking-[-0.06em] text-[#E8EDF1] transition-colors duration-300 group-hover:text-[#F4511E]/20">
//                       {capability.number}
//                     </span>

//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F9FA] text-[#F4511E] transition-all duration-300 group-hover:bg-[#FFF1EB] group-hover:scale-105">
//                       <Icon size={20} strokeWidth={1.7} />
//                     </div>
//                   </div>

//                   <div className="mt-8">
//                     <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
//                       {capability.category}
//                     </p>

//                     <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#263445] transition-colors duration-300 group-hover:text-[#F4511E]">
//                       {capability.title}
//                     </h3>

//                     <p className="mt-3 max-w-lg text-sm leading-7 text-[#64748B]">
//                       {capability.description}
//                     </p>
//                   </div>

//                   <div className="mt-8 flex items-center justify-between border-t border-[#EEF1F4] pt-5">
//                     <span className="text-xs font-bold text-[#64748B] transition-colors group-hover:text-[#F4511E]">
//                       View capability
//                     </span>

//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B] transition-all duration-300 group-hover:border-[#F4511E] group-hover:bg-[#FFF1EB] group-hover:text-[#F4511E]">
//                       <ArrowUpRight
//                         size={15}
//                         className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                       />
//                     </span>
//                   </div>

//                   {/* Accent */}
//                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4511E] transition-all duration-500 group-hover:w-full" />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#263445]">
//         {/* Technical circles */}
//         <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-white/10" />
//         <div className="pointer-events-none absolute -right-8 -top-8 h-[330px] w-[330px] rounded-full border border-[#F4511E]/20" />
//         <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[300px] w-[300px] rounded-full border border-white/5" />

//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//             backgroundSize: "45px 45px",
//           }}
//         />

//         <div className="container-flashline relative">
//           <div className="grid gap-12 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#F4511E]" />
//                 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
//                   Build with confidence
//                 </p>
//               </div>

//               <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
//                 The right capability
//                 <span className="block text-[#94A3B8]">
//                   for your next product.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-xl text-base leading-8 text-[#94A3B8]">
//                 Tell us about your product requirements and our team can help
//                 determine the right manufacturing technology for your
//                 application.
//               </p>
//             </div>

//             <Link
//               href="/request-a-quote"
//               className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#F4511E] px-6 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(244,81,30,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E04412]"
//             >
//               Discuss Your Project

//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Settings2,
  Layers3,
  CircuitBoard,
  Cpu,
  Check,
} from "lucide-react";

import { TopBar } from "../../../components/layout/top-bar";
import { Header } from "../../../components/layout/header";

/* ============================================================
   MAIN CAPABILITIES
============================================================ */

const mainCapabilities = [
  {
    number: "01",
    title: "PCB Assembly",
    label: "CORE CAPABILITY",
    description:
      "High-precision PCB assembly services supporting prototypes, new product introduction and production requirements.",
    href: "/capabilities/pcb-assembly-2",
    icon: Settings2,
    features: [
      "Prototype Assembly",
      "Production Assembly",
      "Precision Placement",
      "Quality-Focused Processes",
    ],
  },

  {
    number: "02",
    title: "PCB Fabrication",
    label: "CORE CAPABILITY",
    description:
      "Advanced PCB fabrication solutions for different board structures, form factors, performance requirements and applications.",
    href: "#pcb-fabrication",
    icon: CircuitBoard,
    features: [
      "HDI PCB",
      "Rigid PCB",
      "Rigid Flex PCB",
      "Metal-core PCB",
    ],
  },
];

/* ============================================================
   PCB FABRICATION TYPES
============================================================ */

const fabricationCapabilities = [
  {
    number: "01",
    title: "HDI PCB",
    shortTitle: "HDI",
    description:
      "High-density interconnect PCB technology supporting advanced multilayer designs, fine-pitch components and high-precision manufacturing requirements.",
    href: "/capabilities/pcb-fabrication/hdipcb",
    icon: CircuitBoard,
  },

  {
    number: "02",
    title: "Rigid PCB",
    shortTitle: "RIGID",
    description:
      "Rigid-flex PCB technology combining rigid and flexible construction for compact, reliable and high-performance electronic applications.",
    href: "/capabilities/pcb-fabrication/rigidpcb",
    icon: Layers3,
  },

  {
    number: "03",
    title: "Rigid Flex PCB",
    shortTitle: "RIGID FLEX",
    description:
      "Rigid-flex PCB technology for compact, lightweight and reliable electronic applications.",
    href: "/capabilities/pcb-fabrication/rigid-flex-pcb",
    icon: CircuitBoard,
  },

  {
    number: "04",
    title: "Metal-core PCB",
    shortTitle: "METAL CORE",
    description:
      "Metal-core PCB solutions for applications requiring enhanced thermal management and heat dissipation.",
    href: "/capabilities/pcb-fabrication/metal-core-pcb",
    icon: Cpu,
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <TopBar />
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F5F7F8] pt-35 lg:pt-38.75">

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#F4511E]/10" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#F4511E]/10" />

        <div className="container-flashline relative">
          <div className="grid min-h-[600px] items-center gap-14 lg:grid-cols-[1fr_420px]">

            {/* =================================================
                HERO CONTENT
            ================================================= */}
            <div className="pb-16 pt-12 lg:pb-20">

              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#F4511E]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F4511E]">
                  Manufacturing Capabilities
                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#263445] sm:text-6xl lg:text-[68px]">
                Manufacturing
                <span className="block text-[#F4511E]">
                  Capabilities.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
                We recognize that client relationships and adaptability are
                just as crucial as strong engineering skills from design to
                mass production. We provide high-end engineering and
                manufacturing services to all industries as a contract
                manufacturer.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
                For years, we have been an electronics manufacturing firm and
                printed circuit board manufacturer, providing PCB design,
                prototyping, PCB assembly and manufacturing solutions based on
                our clients' specifications.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="#capabilities"
                  className="group inline-flex items-center gap-4 rounded-2xl bg-[#F4511E] px-6 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(244,81,30,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E04412]"
                >
                  Explore capabilities

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto h-[370px] w-[370px]">

                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-[#CBD5E1]" />

                <div className="absolute inset-8 rounded-full border border-[#DDE2E7]" />

                <div className="absolute inset-[72px] rounded-full border border-[#F4511E]/25" />

                {/* Connecting lines */}
                <div className="absolute left-1/2 top-0 h-[95px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[#F4511E]/30" />

                <div className="absolute bottom-0 left-1/2 h-[95px] w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-[#F4511E]/30" />

                <div className="absolute left-0 top-1/2 h-px w-[95px] -translate-y-1/2 bg-gradient-to-r from-transparent to-[#F4511E]/30" />

                <div className="absolute right-0 top-1/2 h-px w-[95px] -translate-y-1/2 bg-gradient-to-l from-transparent to-[#F4511E]/30" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-[#263445] text-white shadow-xl">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
                    Core
                  </span>

                  <span className="mt-1 text-5xl font-black">
                    02
                  </span>

                  <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                    Capabilities
                  </span>

                </div>

                {/* Assembly node */}
                <div className="absolute left-[-20px] top-[85px] flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4511E] shadow-[0_0_0_5px_rgba(244,81,30,0.10)]" />

                  <span className="whitespace-nowrap text-[9px] font-bold tracking-[0.16em] text-[#64748B]">
                    PCB ASSEMBLY
                  </span>

                </div>

                {/* Fabrication node */}
                <div className="absolute right-[-58px] top-[225px] flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4511E] shadow-[0_0_0_5px_rgba(244,81,30,0.10)]" />

                  <span className="whitespace-nowrap text-[9px] font-bold tracking-[0.16em] text-[#64748B]">
                    PCB FABRICATION
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES OVERVIEW
      ===================================================== */}
      <section
        id="capabilities"
        className="bg-white py-20 lg:py-28"
      >
        <div className="container-flashline">

          {/* Heading */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F4511E]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
                Our Capabilities
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#263445] sm:text-5xl lg:text-6xl">
              Two core capabilities.
              <span className="block text-[#94A3B8]">
                Clearly defined. Built to scale.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
              Our manufacturing capabilities are organized into two core
              areas: PCB Assembly and PCB Fabrication. Together, they provide
              the technologies needed to support your electronics from
              development through production.
            </p>

          </div>

          {/* =================================================
              MAIN CAPABILITY CARDS
          ================================================= */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {mainCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Link
                  key={capability.title}
                  href={capability.href}
                  className="group relative overflow-hidden rounded-[28px] border border-[#DDE4EA] bg-[#F7F9FA] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_25px_70px_rgba(38,52,69,0.10)] sm:p-10 lg:p-12"
                >

                  {/* Large background number */}
                  <span className="pointer-events-none absolute -right-4 -top-7 text-[150px] font-black leading-none tracking-[-0.08em] text-[#E9EEF2] transition-colors duration-500 group-hover:text-[#F4511E]/10">
                    {capability.number}
                  </span>

                  {/* Header */}
                  <div className="relative flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#F4511E] shadow-sm transition-all duration-300 group-hover:bg-[#FFF1EB] group-hover:scale-105">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="rounded-full border border-[#DDE4EA] bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                      {capability.label}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="relative mt-10">

                    <h3 className="text-3xl font-black tracking-[-0.04em] text-[#263445] transition-colors duration-300 group-hover:text-[#F4511E] sm:text-4xl">
                      {capability.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
                      {capability.description}
                    </p>

                  </div>

                  {/* Features */}
                  <div className="relative mt-8 grid gap-3 sm:grid-cols-2">

                    {capability.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl border border-[#E5EAF0] bg-white px-4 py-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF1EB] text-[#F4511E]">
                          <Check size={12} />
                        </span>

                        <span className="text-xs font-semibold text-[#475569]">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Footer */}
                  <div className="relative mt-9 flex items-center gap-3 border-t border-[#E5EAF0] pt-5">

                    <span className="text-xs font-bold text-[#263445] transition-colors duration-300 group-hover:text-[#F4511E]">
                      Explore capability
                    </span>

                    <ArrowRight
                      size={15}
                      className="text-[#F4511E] transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4511E] transition-all duration-500 group-hover:w-full" />

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          PCB FABRICATION
      ===================================================== */}
      <section
        id="pcb-fabrication"
        className="relative overflow-hidden bg-[#F5F7F8] py-20 lg:py-28"
      >

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#263445 1px, transparent 1px), linear-gradient(90deg, #263445 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="container-flashline relative">

          {/* Section heading */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F4511E]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
                  Capability 02
                </p>
              </div>

              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#263445] sm:text-5xl lg:text-6xl">
                PCB Fabrication
                {/* <span className="block text-[#94A3B8]">
                  technologies.
                </span> */}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
                PCB Fabrication includes four specialized board technologies,
                each designed to meet different engineering and application
                requirements.
              </p>

            </div>


          </div>

          {/* =================================================
              FABRICATION TYPES
          ================================================= */}
          <div className="mt-12">

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">

              {fabricationCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <Link
                    key={capability.title}
                    href={capability.href}
                    className="group relative overflow-hidden rounded-[24px] border border-[#DDE4EA] bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_20px_55px_rgba(38,52,69,0.08)] sm:p-9"
                  >

                    {/* Number + icon */}
                    <div className="flex items-start justify-between">

                      <div>
                        <span className="text-4xl font-black leading-none tracking-[-0.07em] text-[#E8EDF1] transition-colors duration-300 group-hover:text-[#F4511E]/20">
                          {capability.number}
                        </span>

                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F9FA] text-[#F4511E] transition-all duration-300 group-hover:bg-[#FFF1EB] group-hover:scale-105">
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      </div>

                    </div>

                    {/* Content */}
                    <div className="mt-7">

                      <h3 className="text-2xl font-black tracking-[-0.035em] text-[#263445] transition-colors duration-300 group-hover:text-[#F4511E]">
                        {capability.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-[#64748B]">
                        {capability.description}
                      </p>

                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#EEF1F4] pt-4">

                      <span className="text-xs font-bold text-[#64748B] transition-colors duration-300 group-hover:text-[#F4511E]">
                        View {capability.title}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B] transition-all duration-300 group-hover:border-[#F4511E] group-hover:bg-[#FFF1EB] group-hover:text-[#F4511E]">

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />

                      </span>

                    </div>

                    {/* Accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4511E] transition-all duration-500 group-hover:w-full" />

                  </Link>
                );
              })}

            </div>
          </div>

        </div>
      </section>

     

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#263445]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-8 -top-8 h-[330px] w-[330px] rounded-full border border-[#F4511E]/20" />

        <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[300px] w-[300px] rounded-full border border-white/5" />

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="container-flashline relative">

          <div className="grid gap-12 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28">

            {/* Content */}
            <div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F4511E]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4511E]">
                  Build with confidence
                </p>
              </div>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                The right capabilities
                <span className="block text-[#94A3B8]">
                  for your next product.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#94A3B8]">
                Tell us about your product requirements and our team can help
                determine the right manufacturing approach for your
                application.
              </p>

            </div>

            {/* CTA */}
            <Link
              href="/request-a-quote"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#F4511E] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(244,81,30,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E04412]"
            >
              Discuss Your Project

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}