

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Building2,
//   CheckCircle2,
//   Factory,
//   HeartPulse,
//   Mail,
//   MapPin,
//   Menu,
//   Phone,
//   Plane,
//   Plus,
//   RadioTower,
//   Search,
//   TrainFront,
//   Zap,
// } from "lucide-react";


// const industries = [
//   {
//     title: "Aerospace",
//     description:
//       "Flashline EMS is dedicated to building on our decades-long track record of meeting stringent manufacturing requirements.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/09/aeroplane-1.png",
//     icon: Plane,
//   },
//   {
//     title: "Health care",
//     description:
//       "Flashline EMS is a significant provider of healthcare manufacturing solutions. Our customers benefit from our unrivaled capabilities.",
//     image: "https://flashlineems.com/wp-content/uploads/2023/09/health.png",
//     icon: HeartPulse,
//   },
//   {
//     title: "IT and telecom",
//     description:
//       "Flashline EMS has been providing uncompromising services to our telecommunications industry partners.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/09/it-and-tele.png",
//     icon: RadioTower,
//   },
//   {
//     title: "Railways and other transportation",
//     description:
//       "As an end-to-end electronics manufacturing service, we enable customers to address major rail and transportation requirements.",
//     image: "https://flashlineems.com/wp-content/uploads/2023/09/train.png",
//     icon: TrainFront,
//   },
//   {
//     title: "Automotive",
//     description:
//       "The technologies that enable the changes are increasing demand for those who can integrate consumer electronics.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/09/automotive.png",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Power and energy",
//     description:
//       "As part of the Internet of Things, renewable energies and green technology are becoming more prevalent.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/09/power-and-energy.png",
//     icon: Zap,
//   },
// ];

// const turnkeyServices = [
//   {
//     number: "01",
//     title: "Expert PCB Design Engineering",
//     description:
//       "Our expert CAM engineers can deliver PCB and electromechanical designs that meet the toughest industry standards.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/10/icon-1-150x150.png",
//     action: "Book A Tour",
//     href: "/#booknow",
//   },
//   {
//     number: "02",
//     title: "PCB Fabrication",
//     description:
//       "Up to 60 layer HDI board and expert in Rigid-flex PCBs. We can handle both production and proto order offshore or within USA.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/10/fabrication-icon-150x150.png",
//     action: "Quick Quote",
//     href: "/quick-quote",
//   },
//   {
//     number: "03",
//     title: "PCB Assembly",
//     description:
//       "Our in-house PCB assembly plant ensures quick turnaround times with the most rigorous quality checks. Assured reliability and speed.",
//     image:
//       "https://flashlineems.com/wp-content/uploads/2023/10/assembly-150x150.png",
//     action: "Book A Tour",
//     href: "/#booktour",
//   },
// ];

// const whyPoints = [
//   "Experienced Team",
//   "Diversified Capabilities",
//   "Global Supply Chain",
//   "Fair and Competitive",
//   "Traceability and Quality Assurance",
// ];

// export default function Home() {
//   return (
//     <main className="overflow-hidden">
//       <section className="relative isolate min-h-[760px] overflow-hidden bg-[#020d1d] text-white">
//         <div className="absolute inset-0 -z-20">
//           <Image
//             src="/heroimage.png"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-center"
//           />
//         </div>

//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(21,151,229,0.18),transparent_28%),linear-gradient(90deg,#010d1d_0%,#020d1d_35%,rgba(2,13,29,0.72)_58%,rgba(2,13,29,0.2)_100%)]" />

//         <header className="relative z-20">
//           <div className="border-b border-white/10 bg-[#07182d]/95">
//             <div className="container-flashline flex h-[52px] items-center justify-between gap-4">
//               <div className="flex items-center gap-4 text-xs font-medium text-white/85 sm:text-sm">
//                 <span className="flex items-center gap-2">
//                   <Mail size={14} className="text-[#f8b199]" />
//                   <span>sales@flashlineems.com</span>
//                 </span>
//                 <span className="hidden items-center gap-2 md:flex">
//                   <Phone size={14} className="text-[#f8b199]" />
//                   <span>+91 8121020371</span>
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 {[
//                   { label: "f", tone: "bg-white/10 text-white" },
//                   { label: "in", tone: "bg-white/10 text-white" },
//                   { label: "ig", tone: "bg-white/10 text-white" },
//                 ].map((item) => (
//                   <span
//                     key={item.label}
//                     className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[9px] font-bold uppercase ${item.tone}`}
//                   >
//                     {item.label}
//                   </span>
//                 ))}

//                 <Link
//                   href="/quick-quote"
//                   className="inline-flex items-center gap-2 rounded-lg bg-[#f65a1d] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(246,90,29,0.35)] transition hover:bg-[#ff6c2c]"
//                 >
//                   Quick Quote
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="border-b border-white/10 bg-[#020d1d]/75 backdrop-blur-sm">
//             <div className="container-flashline flex items-center justify-between gap-5 py-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative overflow-hidden rounded-[10px] bg-[#05132d] p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
//                   <Image src="/logo.png" alt="Flashline EMS" width={240} height={72} className="h-12 w-auto object-contain md:h-[52px]" />
//                 </div>
//               </div>

//               <div className="hidden flex-1 items-center justify-center md:flex">
//                 <div className="flex w-full max-w-[500px] items-center rounded-xl border border-white/10 bg-[#0b1d34]/80 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
//                   <input
//                     aria-label="Search product"
//                     placeholder="Search Product..."
//                     className="w-full bg-transparent text-sm text-white placeholder:text-slate-300/80 focus:outline-none"
//                   />
//                   <button type="button" className="ml-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f65a1d] text-white transition hover:bg-[#ff6c2c]" aria-label="Search">
//                     <Search size={18} />
//                   </button>
//                 </div>
//               </div>

//               <button type="button" aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-[#f65a1d] hover:bg-[#f65a1d]/20">
//                 <Menu size={26} />
//               </button>
//             </div>
//           </div>
//         </header>

//         <div className="container-flashline relative flex min-h-[680px] items-center pb-12 pt-8 lg:min-h-[720px]">
//           <div className="relative w-full">
//             <div className="relative z-20 max-w-[760px] py-10 lg:py-14">
//               <div className="inline-flex items-center gap-3 rounded-full border border-[#f65a1d]/60 bg-[#06182d]/70 px-4 py-2.5 backdrop-blur-md">
//                 <span className="relative flex h-2.5 w-2.5 shrink-0">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f65a1d] opacity-60" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f65a1d]" />
//                 </span>
//                 <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200 sm:text-[11px]">
//                   End-to-End Electronics Manufacturing
//                 </span>
//               </div>

//               <h1 className="mt-7 max-w-[700px] text-[3.1rem] font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.8rem] lg:text-[5rem] xl:text-[5.2rem]">
//                 <span className="block">PCB Fabrication to</span>
//                 <span className="mt-1 block text-[#f65a1d]">Box Build - Turnkey</span>
//                 <span className="mt-1 block">Services</span>
//               </h1>

//               <div className="mt-7 flex items-center gap-2">
//                 <span className="h-[3px] w-8 rounded-full bg-[#f65a1d]" />
//                 <span className="h-[3px] w-5 rounded-full bg-[#f65a1d]/70" />
//                 <span className="h-[3px] w-6 rounded-full bg-[#1597E5]" />
//                 <span className="h-[3px] w-3 rounded-full bg-[#1597E5]/60" />
//               </div>

//               <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-slate-200/85 sm:text-base sm:leading-8">
//                 Flashline EMS provides a comprehensive set of services that span the whole product development lifecycle. We go beyond PC boards to complete your product assembly through our complex box build capabilities.
//               </p>

//               <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   href="/box-build"
//                   className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#f65a1d] px-7 text-sm font-bold text-white shadow-[0_12px_35px_rgba(246,90,29,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6c2c] hover:shadow-[0_18px_45px_rgba(246,90,29,0.35)]"
//                 >
//                   <span>Read more</span>
//                   <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>

//                 <Link
//                   href="/quick-quote"
//                   className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/[0.04] px-7 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f65a1d] hover:bg-[#f65a1d]"
//                 >
//                   <span>Quick Quote</span>
//                   <ArrowUpRight size={18} className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </Link>
//               </div>

//               <div className="mt-10 flex flex-wrap items-center gap-y-4">
//                 {[
//                   { label: "PCB", sub: "Fabrication", icon: Factory, tone: "border-[#f65a1d]/40 bg-[#f65a1d]/10 text-[#f65a1d]" },
//                   { label: "PCB", sub: "Assembly", icon: Building2, tone: "border-[#1597E5]/40 bg-[#1597E5]/10 text-[#1597E5]" },
//                   { label: "Box", sub: "Build", icon: BriefcaseBusiness, tone: "border-[#f65a1d]/40 bg-[#f65a1d]/10 text-[#f65a1d]" },
//                 ].map(({ label, sub, icon: Icon, tone }, index) => (
//                   <div key={label + sub} className={`${index > 0 ? "pl-6 md:pl-8" : "pr-6 md:pr-8"}`}>
//                     <div className="flex items-center gap-3">
//                       <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${tone}`}>
//                         <Icon size={20} strokeWidth={1.7} />
//                       </div>
//                       <div className="leading-tight">
//                         <div className="text-sm font-bold text-white">{label}</div>
//                         <div className="mt-1 text-xs text-slate-400">{sub}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="pointer-events-none absolute right-[24%] top-[12%] z-20 hidden rounded-2xl border border-[#1597E5]/45 bg-[#06244a]/75 px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-md lg:block">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1597E5]/60 bg-[#1597E5]/10 text-[#7fd0ff]">
//                   <Building2 size={18} />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black leading-none text-white">40+</div>
//                   <div className="mt-2 text-xs font-medium text-blue-200">Years of Expertise</div>
//                 </div>
//               </div>
//             </div>

//             <div className="pointer-events-none absolute right-[2%] top-[24%] z-20 hidden rounded-2xl border border-[#f65a1d]/50 bg-[#351918]/75 px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-md lg:block">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f65a1d]/60 bg-[#f65a1d]/10 text-[#ffb38c]">
//                   <Factory size={18} />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-black leading-none text-white">100K+</div>
//                   <div className="mt-2 text-xs font-medium text-orange-100">Sq. Ft. Facility</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PCB MANUFACTURING & ASSEMBLY
//       ========================================================== */}
//       <section className="relative bg-white py-24 lg:py-32">
//         <div className="container-flashline">
//           <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//             {/* Image */}
//             <div className="group relative">
//               <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#F4511E]" />

//               <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#1597E5]" />

//               <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl">
//                 <img
//                   src="https://flashlineems.com/wp-content/uploads/2023/10/pcb-assembly.jpg"
//                   alt="PCB assembly manufacturing facility"
//                   className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[470px]"
//                 />

//                 <div className="absolute bottom-5 left-5 border border-white/20 bg-[#062D82]/90 px-5 py-4 text-white backdrop-blur">
//                   <div className="text-xs uppercase tracking-[0.18em] text-blue-200">
//                     Manufacturing
//                   </div>

//                   <div className="mt-1 font-bold">
//                     PCB Assembly & Production
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div>
//               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                 <span className="h-px w-10 bg-[#F4511E]" />
//                 Flashline EMS
//               </div>

//               <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#062D82] sm:text-5xl">
//                 PCB Manufacturing
//                 <span className="block text-[#F4511E]">
//                   and Assembly Services
//                 </span>
//               </h2>

//               <p className="mt-7 text-lg font-bold leading-8 text-slate-800">
//                 Flashline EMS is an one stop solution for all electronic
//                 product development and manufacturing needs.
//               </p>

//               <p className="mt-5 leading-8 text-slate-600">
//                 From concept to production, we take care of everything.
//                 Founded by the pioneers of PCB industry, Padma Dantu and her
//                 team have been in the PCB manufacturing and assembly industry
//                 since inception some 40 years ago! You can count on us to
//                 deliver some of the most complex HDI designs for prototype and
//                 production quantities. If you are struggling to find a
//                 correct partner with a certain niche capability, chances are
//                 we can get it done.
//               </p>

//               <div className="mt-7 flex flex-wrap items-center gap-5">
//                 <span className="font-bold text-[#062D82]">
//                   Speak to us and find out more.
//                 </span>

//                 <Link
//                   href="/contact-us"
//                   className="group inline-flex items-center gap-2 font-bold text-[#F4511E]"
//                 >
//                   Contact us
//                   <ArrowRight
//                     size={17}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>

//               <Link
//                 href="/pcb-assembly"
//                 className="group mt-8 inline-flex items-center gap-2 bg-[#062D82] px-6 py-4 font-bold text-white transition hover:bg-[#F4511E]"
//               >
//                 Read more
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TRUSTED BY THE BEST / INDUSTRIES
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#F5F8FC] py-24 lg:py-32">
//         <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#1597E5]/5 blur-[100px]" />

//         <div className="container-flashline relative">
//           <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
//             {/* Intro */}
//             <div className="lg:sticky lg:top-28 lg:self-start">
//               <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                 Industries
//               </div>

//               <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] text-[#062D82] sm:text-5xl">
//                 Trusted by the best —
//                 <span className="block text-[#F4511E]">
//                   your Go To PCB supplier
//                 </span>
//               </h2>

//               <p className="mt-6 leading-8 text-slate-600">
//                 Our advanced manufacturing capabilities allow us to work on
//                 all kinds of PCBs including HDI, Rigid-Flex or flex PCB.
//               </p>

//               <p className="mt-4 leading-8 text-slate-600">
//                 Our fully automated assembly line ensures that your product is
//                 correct right from conception to launch.
//               </p>

//               <p className="mt-4 leading-8 text-slate-600">
//                 Talk to our available experts to consult you on your PCB
//                 requirements via phone, email or live chat.
//               </p>

//               <Link
//                 href="/contact-us"
//                 className="group mt-8 inline-flex items-center gap-2 bg-[#F4511E] px-6 py-4 font-bold text-white transition hover:bg-[#062D82]"
//               >
//                 Contact Us
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//             {/* Industry cards */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               {industries.map((industry, index) => {
//                 const Icon = industry.icon;

//                 return (
//                   <Link
//                     key={industry.title}
//                     href="/industries"
//                     className="group relative overflow-hidden border border-slate-200 bg-white p-6 transition duration-500 hover:-translate-y-2 hover:border-[#062D82] hover:shadow-2xl"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4511E]/10 text-[#F4511E] transition duration-300 group-hover:bg-[#062D82] group-hover:text-white">
//                         <Icon size={25} strokeWidth={1.7} />
//                       </div>

//                       <span className="text-xs font-black text-slate-300">
//                         0{index + 1}
//                       </span>
//                     </div>

//                     <h3 className="mt-7 text-xl font-black text-[#062D82]">
//                       {industry.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-slate-600">
//                       {industry.description}
//                     </p>

//                     <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#F4511E]">
//                       Explore industry
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-1"
//                       />
//                     </div>

//                     <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#1597E5]/5 transition duration-500 group-hover:scale-[2]" />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TURNKEY SERVICES
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#062D82] py-24 text-white lg:py-32">
//         <div className="absolute inset-0 pcb-grid opacity-10" />

//         <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F4511E]/10 blur-[120px]" />

//         <div className="container-flashline relative">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4511E]">
//               End-to-End Manufacturing
//             </div>

//             <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-4xl xl-text-4xl">
//               PCB Fabrication to Box Build
//               <span className="block text-[#7dccff]">
//                 Turnkey Services
//               </span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100/75">
//               Flashline EMS provides a comprehensive set of services that
//               span the whole product development lifecycle. We go beyond the
//               PC boards and complete your product assembly through our complex
//               box build capabilities.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-6 lg:grid-cols-3">
//             {turnkeyServices.map((service) => (
//               <div
//                 key={service.number}
//                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white p-7 text-[#062D82] transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
//               >
//                 {/* number */}
//                 <div className="flex items-start justify-between">
//                   <span className="text-sm font-black tracking-[0.18em] text-[#F4511E]">
//                     {service.number}
//                   </span>

//                   <ArrowUpRight
//                     size={20}
//                     className="text-slate-300 transition group-hover:text-[#F4511E]"
//                   />
//                 </div>

//                 <h3 className="mt-8 max-w-sm text-2xl font-black leading-tight">
//                   {service.title}
//                 </h3>

//                 <p className="mt-5 leading-7 text-slate-600">
//                   {service.description}
//                 </p>

//                 <div className="mt-8 flex items-end justify-between gap-5">
//                   <Link
//                     href={service.href}
//                     className="inline-flex items-center gap-2 border border-[#062D82]/20 px-5 py-3 text-sm font-bold transition hover:bg-[#062D82] hover:text-white"
//                   >
//                     {service.action}
//                     <ArrowRight size={16} />
//                   </Link>

//                   <img
//                     src={service.image}
//                     alt=""
//                     className="h-24 w-24 object-contain transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#F4511E]/5 transition duration-500 group-hover:scale-150" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY FLASHLINE
//       ========================================================== */}
//       <section className="bg-white py-24 lg:py-32">
//         <div className="container-flashline">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
//             {/* Visual */}
//             <div className="relative">
//               <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-[#F4511E]" />

//               <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-[#1597E5]" />

//               <div className="relative overflow-hidden rounded-2xl bg-[#062D82] p-8 shadow-2xl sm:p-10">
//                 <div className="absolute inset-0 pcb-grid opacity-20" />

//                 <div className="relative">
//                   <Factory
//                     size={42}
//                     strokeWidth={1.4}
//                     className="text-[#F4511E]"
//                   />

//                   <div className="mt-10 text-6xl font-black text-white sm:text-7xl">
//                     100,000+
//                   </div>

//                   <div className="mt-2 text-sm uppercase tracking-[0.18em] text-blue-200">
//                     Square feet
//                   </div>

//                   <div className="mt-10 h-px bg-white/10" />

//                   <p className="mt-7 leading-7 text-white/70">
//                     Flashline EMS is over 100,000 square feet state of art,
//                     brand new manufacturing facility with capacity to grow over
//                     10 SMT lines aimed to serve prototype to high-mix volume
//                     for the customers globally.
//                   </p>

//                   <div className="mt-8 flex items-center gap-3 text-sm font-bold text-[#7dccff]">
//                     <Building2 size={18} />
//                     Global manufacturing capability
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div>
//               <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                 Why Flashline EMS
//               </div>

//               <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#062D82] sm:text-5xl">
//                 Built for capability,
//                 <span className="block text-[#F4511E]">
//                   scale and confidence.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-2xl leading-8 text-slate-600">
//                 Flashline EMS is over 100,000 square feet state of art, brand
//                 new manufacturing facility with capacity to grow over 10 SMT
//                 lines aimed to serve prototype to high-mix volume for the
//                 customers globally.
//               </p>

//               <div className="mt-9 border-t border-slate-200">
//                 {whyPoints.map((point, index) => (
//                   <div
//                     key={point}
//                     className="group flex items-center gap-5 border-b border-slate-200 py-5"
//                   >
//                     <span className="text-xs font-black text-[#F4511E]">
//                       0{index + 1}
//                     </span>

//                     <div className="flex flex-1 items-center justify-between gap-4">
//                       <span className="text-lg font-bold text-[#062D82]">
//                         {point}
//                       </span>

//                       <CheckCircle2
//                         size={20}
//                         className="text-slate-300 transition group-hover:text-[#F4511E]"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           NEWS
//       ========================================================== */}
//       <section className="bg-[#F5F8FC] py-24 lg:py-32">
//         <div className="container-flashline">
//           <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
//             {/* Articles */}
//             <div>
//               <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                 Insights
//               </div>

//               <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#062D82] sm:text-5xl">
//                 News & Updates
//               </h2>

//               <div className="mt-10 grid gap-5 md:grid-cols-2">
//                 <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl">
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src="https://staging.flashlineems.com/wp-content/uploads/2023/09/engineeringdesign.jpg"
//                       alt="Engineering design"
//                       className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                     />

//                     <div className="absolute left-4 top-4 bg-[#F4511E] px-3 py-2 text-xs font-bold text-white">
//                       Engineering
//                     </div>
//                   </div>

//                   <div className="p-7">
//                     <div className="text-xs text-slate-400">
//                       November 15, 2021 – Mike Dooley
//                     </div>

//                     <h3 className="mt-4 text-xl font-black leading-tight text-[#062D82]">
//                       How are custom Functional testers Designed ?
//                     </h3>

//                     <p className="mt-4 leading-7 text-slate-600">
//                       Often in an organization, the design engineer is called
//                       upon to design the final Production tester for a project.
//                       This is sometimes done concurrent with, or after the
//                       product design.
//                     </p>

//                     <Link
//                       href="#"
//                       className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F4511E]"
//                     >
//                       Read more
//                       <ArrowRight size={16} />
//                     </Link>
//                   </div>
//                 </article>

//                 <div className="space-y-5">
//                   <NewsMini
//                     title="How are custom Functional testers Designed ?"
//                   />

//                   <NewsMini
//                     title="What is the electro- Mechanical Box Build Assembly process ?"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="relative overflow-hidden rounded-2xl bg-[#062D82] p-8 text-white sm:p-10">
//               <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#1597E5]/20 blur-2xl" />

//               <div className="relative">
//                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                   Stay Connected
//                 </div>

//                 <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
//                   Sign Up for Alert, News,
//                   <span className="block text-[#7dccff]">
//                     Thought and Insight!
//                   </span>
//                 </h3>

//                 <form className="mt-9 space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="h-14 w-full rounded-xl border border-white/10 bg-white px-5 text-slate-900 outline-none transition focus:border-[#F4511E]"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email ID"
//                     className="h-14 w-full rounded-xl border border-white/10 bg-white px-5 text-slate-900 outline-none transition focus:border-[#F4511E]"
//                   />

//                   <button
//                     type="submit"
//                     className="h-14 w-full rounded-xl bg-[#F4511E] font-bold transition hover:bg-white hover:text-[#062D82]"
//                   >
//                     Submit
//                   </button>
//                 </form>

//                 <div className="mt-12 border-t border-white/10 pt-7">
//                   <div className="text-2xl font-black">
//                     Have any Questions?
//                   </div>

//                   <p className="mt-3 text-sm leading-6 text-white/60">
//                     Talk to our team about your next electronics manufacturing
//                     requirement.
//                   </p>

//                   <Link
//                     href="/contact-us"
//                     className="mt-5 inline-flex items-center gap-2 font-bold text-[#7dccff]"
//                   >
//                     Contact us
//                     <ArrowRight size={17} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#F4511E] py-20 text-white lg:py-24">
//         <div className="absolute inset-0 opacity-10 pcb-grid" />

//         <div className="container-flashline relative">
//           <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
//                 Start a conversation
//               </div>

//               <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.035em] sm:text-5xl">
//                 Need a reliable partner for your next PCB project?
//               </h2>

//               <p className="mt-4 max-w-2xl leading-7 text-white/80">
//                 Talk to Flashline EMS about your PCB fabrication, assembly and
//                 box build requirements.
//               </p>
//             </div>

//             <Link
//               href="/quick-quote"
//               className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#062D82] px-7 py-4 font-bold transition hover:bg-white hover:text-[#062D82]"
//             >
//               Quick Quote
//               <ArrowRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function NewsMini({ title }: { title: string }) {
//   return (
//     <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1597E5] hover:shadow-lg">
//       <div className="text-xs text-slate-400">
//         November 15, 2021 – Mike Dooley
//       </div>

//       <h3 className="mt-4 text-xl font-black leading-tight text-[#062D82]">
//         {title}
//       </h3>

//       <Link
//         href="#"
//         className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F4511E]"
//       >
//         Read more
//         <ArrowRight
//           size={16}
//           className="transition-transform group-hover:translate-x-1"
//         />
//       </Link>
//     </article>
//   );
// }


import { HeroSection } from "../../components/Hero/page";
import PcbManufacturingSection from "../../components/home/pcb-manufacturing";


export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
 
      {/* Space reserved for fixed TopBar + Header */}
      <div className="h-[140px]" />

      <HeroSection />
       <PcbManufacturingSection />
        
    </main>
  );
}