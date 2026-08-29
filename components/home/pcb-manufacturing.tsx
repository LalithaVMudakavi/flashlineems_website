
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
//   Plane,
//   Plus,
//   RadioTower,
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

// export default function PcbManufacturingSection() {
//   return (
//     <main className="overflow-hidden">

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
//                   href="/contact"
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
//                 href="services/pcb-assembly"
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

//      {/* =========================================================
//     TRUSTED BY THE BEST / INDUSTRIES
// ========================================================= */}

// <section className="relative overflow-hidden bg-[#F5F8FC] py-24 lg:py-32">

//   {/* Background Accent */}
//   <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#1597E5]/5 blur-[100px]" />

//   <div className="container-flashline relative">

//     {/* =====================================================
//         SECTION HEADER
//     ====================================================== */}

//     <div className="mb-14 max-w-3xl">

//       <div className="flex items-center gap-3">
//         <span className="h-px w-10 bg-[#F4511E]" />

//         <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//           Industries
//         </span>
//       </div>

//       <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.035em] text-[#062D82] sm:text-5xl">
//         Trusted by the best —
//         <span className="block text-[#F4511E]">
//           your Go To PCB supplier
//         </span>
//       </h2>

//     </div>


//     {/* =====================================================
//         CONTENT + INDUSTRY CARDS
//     ====================================================== */}

//     <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">

//       {/* ===================================================
//           LEFT CONTENT
//       ==================================================== */}

//       <div className="lg:sticky lg:top-28">

//         <div className="max-w-md">

//           <p className="leading-8 text-slate-600">
//             Our advanced manufacturing capabilities allow us to work on
//             all kinds of PCBs including HDI, Rigid-Flex or flex PCB.
//           </p>

//           <p className="mt-5 leading-8 text-slate-600">
//             Our fully automated assembly line ensures that your product is
//             correct right from conception to launch.
//           </p>

//           <p className="mt-5 leading-8 text-slate-600">
//             Talk to our available experts to consult you on your PCB
//             requirements via phone, email or live chat.
//           </p>

//           <Link
//             href="/contact"
//             className="
//               group
//               mt-8
//               inline-flex
//               items-center
//               gap-2
//               bg-[#F4511E]
//               px-6
//               py-4
//               font-bold
//               text-white
//               transition-all
//               duration-300
//               hover:-translate-y-0.5
//               hover:bg-[#062D82]
//             "
//           >
//             Contact Us

//             <ArrowRight
//               size={18}
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>

//         </div>

//       </div>


//       {/* ===================================================
//           INDUSTRY CARDS
//       ==================================================== */}

//       <div className="grid gap-5 sm:grid-cols-2">

//         {industries.map((industry, index) => {
//           const Icon = industry.icon;

//           return (
//             <Link
//               key={industry.title}
//               href="/industries"
//               className="
//                 group
//                 relative
//                 flex
//                 min-h-[300px]
//                 flex-col
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-slate-200
//                 bg-white
//                 p-6
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-[#062D82]
//                 hover:shadow-[0_18px_45px_rgba(6,45,130,0.10)]
//               "
//             >

//               {/* =================================================
//                   CARD TOP
//               ================================================== */}

//               <div className="flex items-start justify-between">

//                 {/* Icon */}

//                 <div
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-[#F4511E]/10
//                     text-[#F4511E]
//                     transition-all
//                     duration-300
//                     group-hover:bg-[#062D82]
//                     group-hover:text-white
//                   "
//                 >
//                   <Icon
//                     size={23}
//                     strokeWidth={1.7}
//                   />
//                 </div>


//                 {/* Number */}

//                 <span
//                   className="
//                     text-xs
//                     font-black
//                     tracking-[0.12em]
//                     text-slate-300
//                     transition-colors
//                     duration-300
//                     group-hover:text-[#F4511E]
//                   "
//                 >
//                   0{index + 1}
//                 </span>

//               </div>


//               {/* =================================================
//                   CARD CONTENT
//               ================================================== */}

//               <div className="relative z-10 mt-7">

//                 <h3
//                   className="
//                     text-xl
//                     font-black
//                     leading-tight
//                     text-[#062D82]
//                   "
//                 >
//                   {industry.title}
//                 </h3>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-6
//                     text-slate-600
//                   "
//                 >
//                   {industry.description}
//                 </p>

//               </div>


//               {/* =================================================
//                   CARD FOOTER
//               ================================================== */}

//               <div
//                 className="
//                   relative
//                   z-10
//                   mt-auto
//                   flex
//                   items-center
//                   justify-between
//                   pt-7
//                 "
//               >

//                 <span
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                     text-sm
//                     font-bold
//                     text-[#F4511E]
//                   "
//                 >
//                   Explore industry

//                   <ArrowRight
//                     size={16}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </span>

//               </div>


//               {/* =================================================
//                   DECORATIVE ELEMENT
//               ================================================== */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -bottom-10
//                   -right-10
//                   h-28
//                   w-28
//                   rounded-full
//                   bg-[#1597E5]/5
//                   transition-transform
//                   duration-500
//                   group-hover:scale-[1.7]
//                 "
//               />

//               {/* Small accent line */}

//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   h-1
//                   w-0
//                   bg-[#F4511E]
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />

//             </Link>
//           );
//         })}

//       </div>

//     </div>

//   </div>
// </section>

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
//                     href="/contact"
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


"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Factory,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Plane,
  Plus,
  RadioTower,
  TrainFront,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const industries = [
  {
    title: "Aerospace",
    description:
      "Flashline EMS is dedicated to building on our decades-long track record of meeting stringent manufacturing requirements.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/09/aeroplane-1.png",
    icon: Plane,
  },
  {
    title: "Health care",
    description:
      "Flashline EMS is a significant provider of healthcare manufacturing solutions. Our customers benefit from our unrivaled capabilities.",
    image: "https://flashlineems.com/wp-content/uploads/2023/09/health.png",
    icon: HeartPulse,
  },
  {
    title: "IT and telecom",
    description:
      "Flashline EMS has been providing uncompromising services to our telecommunications industry partners.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/09/it-and-tele.png",
    icon: RadioTower,
  },
  {
    title: "Railways and other transportation",
    description:
      "As an end-to-end electronics manufacturing service, we enable customers to address major rail and transportation requirements.",
    image: "https://flashlineems.com/wp-content/uploads/2023/09/train.png",
    icon: TrainFront,
  },
  {
    title: "Automotive",
    description:
      "The technologies that enable the changes are increasing demand for those who can integrate consumer electronics.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/09/automotive.png",
    icon: BriefcaseBusiness,
  },
  {
    title: "Power and energy",
    description:
      "As part of the Internet of Things, renewable energies and green technology are becoming more prevalent.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/09/power-and-energy.png",
    icon: Zap,
  },
];

const turnkeyServices = [
  {
    number: "01",
    title: "Expert PCB Design Engineering",
    description:
      "Our expert CAM engineers can deliver PCB and electromechanical designs that meet the toughest industry standards.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/10/icon-1-150x150.png",
    action: "Book A Tour",
    href: "/#booknow",
    isModalAction: true,
  },
  {
    number: "02",
    title: "PCB Fabrication",
    description:
      "Up to 60 layer HDI board and expert in Rigid-flex PCBs. We can handle both production and proto order offshore or within USA.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/10/fabrication-icon-150x150.png",
    action: "Quick Quote",
    href: "/quick-quote",
    isModalAction: false,
  },
  {
    number: "03",
    title: "PCB Assembly",
    description:
      "Our in-house PCB assembly plant ensures quick turnaround times with the most rigorous quality checks. Assured reliability and speed.",
    image:
      "https://flashlineems.com/wp-content/uploads/2023/10/assembly-150x150.png",
    action: "Book A Tour",
    href: "/#booktour",
    isModalAction: true,
  },
];

const whyPoints = [
  {
    number: "01",
    title: "Experienced Team",
    content:
      "Flashline EMS, with the team of 40+ qualified engineers has ability to assist our customer throughout the design processes. Our expert team work on lean manufacturing principles from the concept to manufacturing which increases the manufacturing efficiency of legacy products and improving time to market.",
  },

  {
    number: "02",
    title: "Diversified Capabilities",
    content:
      "Flashline EMS has over 25 years of history of electronics manufacturing serving major customers in the USA. We are accomplished with PCB bare boards including Rigid HDI, Rigid-Flex, flexible circuits or Hybrid materials. Flashline EMS with state-of-art assembly facility capable of smallest SMD 01005, PTH and mixed technology assemblies.",
  },

  {
    number: "03",
    title: "Global Supply Chain",
    content: (
      <>
        <p>
          Flashline EMS has established global supply chain management process
          works on the principle of lean manufacturing and has qualified and
          approved regional and offshore manufacturing partners based in the
          USA, Taiwan, Korea and China. In order to be a market leader in the
          global supply chain, Flashline EMS has setup a Singapore-based
          international purchasing office.
        </p>

        <p className="mt-4">
          Our fundamental supplier approval process carries out robust and
          independent audit of components and bare boards.
        </p>

        <p className="mt-4">
          Flashline EMS has integrated program management team that understands
          the market demands, trends and help customer develop a forecast.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Fair and Competitive",
    content: (
      <>
        <p>
          Service comes first! At Flashline EMS, the perspective of fairness
          comes with value of our hard-work, dedication and diligence. Our
          honest approach, reliable suggestions and willingness to tackle any
          challenge benefits to the customers seamlessly.
        </p>

        <p className="mt-4">
          Flashline EMS has dedicated customer success team that reviews quotes
          and customer feedback to demonstrate competitive pricing by
          optimizing materials, Lead time and resources.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Traceability and Quality Assurance",
    content: (
      <>
        <p>
          Flashline EMS respects the customer deadlines and specification to
          ensure the maximum satisfaction. Our approach towards industry 4.0
          and exclusive digital tracking systems monitors every components and
          assembly process to ensure complete traceability from incoming
          inspection to the final product dispatch. Our state-of-art ERP
          software ensures seamless attention on customers’ needs towards
          special services.
        </p>

        <p className="mt-4">
          Our IPC certified technicians, ISO certified quality processes,
          automated inspections, robust FAI system with functional test and
          X-ray capability ensure high quality products that are safe,
          effective and reliable.
        </p>
      </>
    ),
  },
];

export default function PcbManufacturingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="overflow-hidden">

       {/* =========================================================
    TRUSTED BY THE BEST / INDUSTRIES
========================================================= */}

<section className="relative overflow-hidden bg-white py-24 lg:py-32">

  {/* Background Accent */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2563EB]/5 blur-[100px]" />

  <div className="container-flashline relative">

    {/* =====================================================
        SECTION HEADER
    ====================================================== */}

    <div className="mb-14 max-w-3xl">

      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#F15A24]" />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F15A24]">
          Industries
        </span>
      </div>

      <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.035em] text-[#334155] sm:text-5xl">
        Trusted by the best —
        <span className="block text-[#F15A24]">
          your Go To PCB supplier
        </span>
      </h2>

    </div>


    {/* =====================================================
        CONTENT + INDUSTRY CARDS
    ====================================================== */}

    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">

      {/* ===================================================
          LEFT CONTENT
      ==================================================== */}

      <div className="lg:sticky lg:top-28">

        <div className="max-w-md">

          <p className="leading-8 text-slate-600">
            Our advanced manufacturing capabilities allow us to work on
            all kinds of PCBs including HDI, Rigid-Flex or flex PCB.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Our fully automated assembly line ensures that your product is
            correct right from conception to launch.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Talk to our available experts to consult you on your PCB
            requirements via phone, email or live chat.
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              bg-[#F15A24]
              px-6
              py-4
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EFF6FF]
            "
          >
            Contact Us

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>


      {/* ===================================================
          INDUSTRY CARDS
      ==================================================== */}

      <div className="grid gap-5 sm:grid-cols-2">

        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <Link
              key={industry.title}
              href="/industries"
              className="
                group
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#2563EB]/30
                hover:shadow-[0_18px_45px_rgba(6,45,130,0.10)]
              "
            >

              {/* =================================================
                  CARD TOP
              ================================================== */}

              <div className="flex items-start justify-between">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F15A24]/10
                    text-[#F15A24]
                    transition-all
                    duration-300
                    group-hover:bg-[#EFF6FF]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                  />
                </div>


                {/* Number */}

                <span
                  className="
                    text-xs
                    font-black
                    tracking-[0.12em]
                    text-slate-300
                    transition-colors
                    duration-300
                    group-hover:text-[#F15A24]
                  "
                >
                  0{index + 1}
                </span>

              </div>


              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative z-10 mt-7">

                <h3
                  className="
                    text-xl
                    font-black
                    leading-tight
                    text-[#334155]
                  "
                >
                  {industry.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {industry.description}
                </p>

              </div>


              {/* =================================================
                  CARD FOOTER
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-auto
                  flex
                  items-center
                  justify-between
                  pt-7
                "
              >

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#F15A24]
                  "
                >
                  Explore industry

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

              </div>


              {/* =================================================
                  DECORATIVE ELEMENT
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  -right-10
                  h-28
                  w-28
                  rounded-full
                  bg-[#2563EB]/5
                  transition-transform
                  duration-500
                  group-hover:scale-[1.7]
                "
              />

              {/* Small accent line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-[#F15A24]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </Link>
          );
        })}

      </div>

    </div>

  </div>
</section>

      {/* =========================================================
          PCB MANUFACTURING & ASSEMBLY
      ========================================================== */}
      <section className="relative bg-[#f5f8fc]  py-24 lg:py-32">
        <div className="container-flashline">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Image */}
            <div className="group relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#F15A24]" />

              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#2563EB]" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl">
                <img
                  src="https://flashlineems.com/wp-content/uploads/2023/10/pcb-assembly.jpg"
                  alt="PCB assembly manufacturing facility"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[470px]"
                />

                <div className="absolute bottom-5 left-5 rounded-xl border border-white/60 bg-white/90 px-5 py-4 text-[#334155] shadow-lg backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#2563EB]">
                    Manufacturing
                  </div>

                  <div className="mt-1 font-bold">
                    PCB Assembly & Production
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F15A24]">
                <span className="h-px w-10 bg-[#F15A24]" />
                Flashline EMS
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#334155] sm:text-5xl">
                PCB Manufacturing
                <span className="block text-[#F15A24]">
                  and Assembly Services
                </span>
              </h2>

              <p className="mt-7 text-lg font-bold leading-8 text-slate-800">
                Flashline EMS is an one stop solution for all electronic
                product development and manufacturing needs.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                From concept to production, we take care of everything.
                Founded by the pioneers of PCB industry, Padma Dantu and her
                team have been in the PCB manufacturing and assembly industry
                since inception some 40 years ago! You can count on us to
                deliver some of the most complex HDI designs for prototype and
                production quantities. If you are struggling to find a
                correct partner with a certain niche capability, chances are
                we can get it done.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <span className="font-bold text-[#334155]">
                  Speak to us and find out more.
                </span>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-bold text-[#F15A24]"
                >
                  Contact us
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <Link
                href="services/pcb-assembly"
                className="group mt-8 inline-flex items-center gap-2 bg-[#F15A24] px-6 py-4 font-bold text-white shadow-[0_10px_25px_rgba(241,90,36,0.16)] transition hover:bg-[#E64A19]"
              >
                Read more
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

    

      {/* =========================================================
          TURNKEY SERVICES
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-24 text-[#334155] lg:py-32">

  {/* =========================================================
      BACKGROUND
  ========================================================== */}

  <div className="pointer-events-none absolute inset-0 pcb-grid opacity-[0.018]" />

  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2563EB]/[0.035] blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F15A24]/[0.035] blur-[120px]" />


  <div className="container-flashline relative">

    {/* =======================================================
        SECTION HEADER
    ======================================================== */}

    <div className="mx-auto max-w-4xl text-center">

      {/* Eyebrow */}

      <div className="inline-flex items-center gap-3">

        <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F15A24]">
          End-to-End Manufacturing
        </span>

        <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

      </div>


      {/* Heading */}

      <h2
        className="
          mt-5
          text-4xl
          font-black
          leading-[1.05]
          tracking-[-0.045em]
          text-[#334155]
          sm:text-5xl
          lg:text-[52px]
        "
      >
        PCB Fabrication to Box Build
        <span className="mt-2 block text-[#F15A24]">
          Turnkey Manufacturing Services
        </span>
      </h2>


      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-[15px]
          leading-8
          text-[#64748B]
          sm:text-[16px]
        "
      >
        Flashline EMS provides a comprehensive set of services that
        span the whole product development lifecycle. We go beyond the
        PC boards and complete your product assembly through our complex
        box build capabilities.
      </p>

    </div>


    {/* =======================================================
        SERVICE CARDS
    ======================================================== */}

    <div className="relative mt-16 ">

      {/* Connecting line */}

      <div className="pointer-events-none absolute left-[16%] right-[16%] top-[54px] hidden h-px lg:block" />


      <div className="grid gap-6 lg:grid-cols-3">

        {turnkeyServices.map((service, index) => (

          <div
            key={service.number}
            className="
              group
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-[#E2E8F0]
              bg-white
              p-7
              shadow-[0_8px_30px_rgba(38,54,77,0.045)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#2563EB]/25
              hover:shadow-[0_22px_50px_rgba(38,54,77,0.10)]
            "
          >

            {/* =================================================
                TOP ROW
            ================================================== */}

            <div className="relative z-10 flex items-center justify-between">

              {/* Number */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F7F9FC]
                    text-sm
                    font-black
                    text-[#F15A24]
                    ring-1
                    ring-[#E2E8F0]
                    transition-all
                    duration-300
                    group-hover:bg-[#FFF4ED]
                    group-hover:ring-[#F15A24]/15
                  "
                >
                  {service.number}
                </div>

                <div className="hidden h-px w-8 bg-[#E2E8F0] sm:block" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                  Service
                </span>

              </div>


              {/* Arrow */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E2E8F0]
                  bg-white
                  text-[#94A3B8]
                  transition-all
                  duration-300
                  group-hover:border-[#2563EB]/20
                  group-hover:bg-[#EFF6FF]
                  group-hover:text-[#2563EB]
                "
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

            </div>


            {/* =================================================
                ICON
            ================================================== */}

            <div className="relative z-10 mt-8 flex items-center justify-between">

              <div
                className="
                  flex
                  h-[74px]
                  w-[74px]
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  p-3
                  transition-all
                  duration-500
                  group-hover:border-[#2563EB]/15
                  group-hover:bg-[#EFF6FF]
                "
              >

                <img
                  src={service.image}
                  alt=""
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>


              {/* Decorative dots */}

              <div className="flex items-center gap-1.5 opacity-40">

                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24]" />

              </div>

            </div>


            {/* =================================================
                TITLE
            ================================================== */}

            <div className="relative z-10 mt-7">

              <h3
                className="
                  max-w-[340px]
                  text-[23px]
                  font-black
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#334155]
                  transition-colors
                  duration-300
                  group-hover:text-[#26364D]
                "
              >
                {service.title}
              </h3>


              <p
                className="
                  mt-4
                  text-[14px]
                  leading-7
                  text-[#64748B]
                "
              >
                {service.description}
              </p>

            </div>


            {/* =================================================
                BOTTOM
            ================================================== */}

            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[#E2E8F0] pt-6">

              {service.isModalAction ? (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="
                    group/button
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#F7F9FC]
                    px-4
                    py-3
                    text-sm
                    font-bold
                    text-[#2563EB]
                    transition-all
                    duration-300
                    hover:bg-[#EFF6FF]
                  "
                >
                  {service.action}

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  />
                </button>
              ) : (
                <Link
                  href={service.href}
                  className="
                    group/button
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#F7F9FC]
                    px-4
                    py-3
                    text-sm
                    font-bold
                    text-[#2563EB]
                    transition-all
                    duration-300
                    hover:bg-[#EFF6FF]
                  "
                >
                  {service.action}

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  />
                </Link>
              )}


              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#CBD5E1]">
                Flashline EMS
              </span>

            </div>


            {/* =================================================
                CARD DECORATION
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-44
                w-44
                rounded-full
                bg-[#2563EB]/[0.035]
                transition-all
                duration-700
                group-hover:scale-150
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-[#F15A24]
                transition-all
                duration-500
                group-hover:w-full
              "
            />

          </div>

        ))}

      </div>

    </div>


   
  </div>
</section>


      {/* =========================================================
          WHY FLASHLINE
      ========================================================== */}
     {/* =========================================================
    WHY FLASHLINE
========================================================= */}
<section className="relative overflow-hidden bg-[#F7F9FC] py-24 lg:py-32">

  {/* =======================================================
      BACKGROUND DECORATION
  ======================================================== */}

  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2563EB]/[0.035] blur-[110px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F15A24]/[0.035] blur-[110px]" />


  <div className="container-flashline relative">

    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">


      {/* =====================================================
          LEFT — FACILITY VISUAL
      ====================================================== */}

      <div className="relative lg:sticky lg:top-28">

        {/* Corner accents */}

        <div
          className="
            absolute
            -left-4
            -top-4
            h-20
            w-20
            border-l-2
            border-t-2
            border-[#F15A24]
          "
        />

        <div
          className="
            absolute
            -bottom-4
            -right-4
            h-20
            w-20
            border-b-2
            border-r-2
            border-[#2563EB]
          "
        />


        {/* Main card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#E2E8F0]
            bg-white
            p-8
            shadow-[0_20px_55px_rgba(38,54,77,0.08)]
            sm:p-10
          "
        >

          {/* Technical background */}

          <div className="pointer-events-none absolute inset-0 pcb-grid opacity-[0.025]" />

          {/* Soft blue glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#2563EB]/[0.035] blur-3xl" />


          <div className="relative">

            {/* Icon */}

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#F15A24]/15
                bg-[#FFF4ED]
                text-[#F15A24]
              "
            >
              <Factory
                size={28}
                strokeWidth={1.5}
              />
            </div>


            {/* Number */}

            <div className="mt-10">

              <div className="text-[60px] font-black leading-none tracking-[-0.06em] text-[#334155] sm:text-[70px]">
                100,000+
              </div>

              <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                Square Feet Manufacturing Facility
              </div>

            </div>


            {/* Divider */}

            <div className="mt-10 h-px bg-[#E2E8F0]" />


            {/* Description */}

            <p className="mt-7 text-[15px] leading-7 text-[#64748B]">
              Flashline EMS is over 100,000 square feet state of art,
              brand new manufacturing facility with capacity to grow over
              10 SMT lines aimed to serve prototype to high-mix volume
              for the customers globally.
            </p>


            {/* Capability */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-4
                py-3
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#EFF6FF]
                  text-[#2563EB]
                "
              >
                <Building2
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <span className="text-sm font-bold text-[#334155]">
                Global manufacturing capability
              </span>

            </div>

          </div>

        </div>


        {/* Floating mini stats */}

        <div
          className="
            absolute
            -bottom-7
            left-6
            hidden
            rounded-xl
            border
            border-[#E2E8F0]
            bg-white
            px-5
            py-3
            shadow-[0_12px_30px_rgba(38,54,77,0.10)]
            sm:block
          "
        >

          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
            Manufacturing
          </div>

          <div className="mt-1 text-sm font-black text-[#334155]">
            Prototype to High Mix
          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT — CONTENT + ACCORDION
      ====================================================== */}

      <div>

        {/* Section label */}

        <div className="flex items-center gap-3">

          <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F15A24]">
            Why Flashline EMS
          </span>

        </div>


        {/* Heading */}

        <h2
          className="
            mt-5
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.045em]
            text-[#334155]
            sm:text-5xl
            lg:text-[52px]
          "
        >
          Built for capability,
          <span className="mt-2 block text-[#F15A24]">
            scale and confidence.
          </span>
        </h2>


        {/* Description */}

        <p
          className="
            mt-6
            max-w-2xl
            text-[15px]
            leading-8
            text-[#64748B]
            sm:text-[16px]
          "
        >
          From engineering expertise and diversified manufacturing
          capabilities to global supply chain management and rigorous
          quality assurance, Flashline EMS is built to support complex
          electronics manufacturing requirements.
        </p>


        {/* ===================================================
            ACCORDION
        ==================================================== */}

        <WhyAccordion items={whyPoints} />

      </div>

    </div>

  </div>

</section>

      {/* =========================================================
          NEWS
      ========================================================== */}
   {/* =========================================================
    INSIGHTS / NEWS & UPDATES
========================================================= */}
<section className="relative overflow-hidden bg-white py-20 lg:py-24">

  {/* Soft background decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#2563EB]/[0.035] blur-[90px]" />

  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F15A24]/[0.035] blur-[100px]" />

  <div className="container-flashline relative">

    {/* =======================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

      <div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3">

          <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F15A24]">
            Insights
          </span>

        </div>

        {/* Heading */}
        <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#334155] sm:text-5xl">
          News & Updates
        </h2>

        <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#64748B]">
          Explore the latest insights, manufacturing knowledge and
          electronics industry updates from Flashline EMS.
        </p>

      </div>



    </div>


    {/* =======================================================
        CONTENT GRID
    ======================================================== */}
    <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">

      {/* =====================================================
          ARTICLES
      ====================================================== */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* ===================================================
            FEATURED ARTICLE
        ==================================================== */}
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#E2E8F0]
            bg-white
            shadow-[0_8px_30px_rgba(38,54,77,0.05)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_20px_45px_rgba(38,54,77,0.10)]
            md:col-span-2
          "
        >

          <div className="grid md:grid-cols-[0.95fr_1.05fr]">

            {/* IMAGE */}
            <div className="relative h-[250px] overflow-hidden md:h-full">

             <img
  src="/news.png"
  alt="Engineering design and PCB functional testing"
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/30 via-transparent to-transparent" />

              {/* Category */}
              <div className="absolute left-5 top-5 rounded-full bg-[#F15A24] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg">
                Engineering
              </div>

            </div>


            {/* CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-9">

              <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#94A3B8]">
                November 15, 2021 · Mike Dooley
              </div>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#334155]
                "
              >
                How are custom Functional
                testers Designed?
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-[#64748B]">
                Often in an organization, the design engineer is called
                upon to design the final production tester for a project.
                This is sometimes done concurrent with, or after the
                product design.
              </p>

              {/* <Link
                href="#"
                className="
                  group/link
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[#2563EB]
                "
              >
                Read article

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link> */}

            </div>

          </div>

        </article>


        {/* ===================================================
            SMALL ARTICLE 01
        ==================================================== */}
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#E2E8F0]
            bg-white
            p-6
            shadow-[0_8px_25px_rgba(38,54,77,0.04)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#2563EB]/20
            hover:shadow-[0_15px_35px_rgba(38,54,77,0.08)]
          "
        >

          <div className="flex items-start justify-between gap-5">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#EFF6FF]
                text-[#2563EB]
              "
            >
              <Factory size={20} strokeWidth={1.7} />
            </div>

            <span className="text-[11px] font-black tracking-[0.12em] text-[#CBD5E1]">
              01
            </span>

          </div>

          <div className="mt-6 text-[11px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Manufacturing
          </div>

          <h3 className="mt-3 text-xl font-black leading-tight text-[#334155]">
            How are custom Functional testers Designed?
          </h3>

          {/* <Link
            href="#"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[#2563EB]
            "
          >
            Read more
            <ArrowRight size={15} />
          </Link> */}

        </article>


        {/* ===================================================
            SMALL ARTICLE 02
        ==================================================== */}
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#E2E8F0]
            bg-white
            p-6
            shadow-[0_8px_25px_rgba(38,54,77,0.04)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#F15A24]/20
            hover:shadow-[0_15px_35px_rgba(38,54,77,0.08)]
          "
        >

          <div className="flex items-start justify-between gap-5">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#FFF4ED]
                text-[#F15A24]
              "
            >
              <Box size={20} strokeWidth={1.7} />
            </div>

            <span className="text-[11px] font-black tracking-[0.12em] text-[#CBD5E1]">
              02
            </span>

          </div>

          <div className="mt-6 text-[11px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Box Build
          </div>

          <h3 className="mt-3 text-xl font-black leading-tight text-[#334155]">
            What is the electro-Mechanical Box Build Assembly process?
          </h3>

          {/* <Link
            href="#"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[#F15A24]
            "
          >
            Read more
            <ArrowRight size={15} />
          </Link> */}

        </article>

      </div>


      {/* =====================================================
          NEWSLETTER CARD
      ====================================================== */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#E2E8F0]
          bg-white
          p-7
          shadow-[0_8px_30px_rgba(38,54,77,0.05)]
          sm:p-8
        "
      >

        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2563EB]/[0.045] blur-2xl" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
              <Mail size={18} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F15A24]">
              Stay Connected
            </span>

          </div>

          <h3 className="mt-6 text-3xl font-black leading-[1.12] tracking-[-0.03em] text-[#334155]">
            Get the latest
            <span className="block text-[#2563EB]">
              insights & updates.
            </span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#64748B]">
            Stay informed with electronics manufacturing insights,
            industry news and updates from Flashline EMS.
          </p>


          <form className="mt-7 space-y-3">

            <input
              type="text"
              placeholder="Your Name"
              className="
                h-12
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-4
                text-sm
                text-[#334155]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#2563EB]/40
                focus:bg-white
                focus:ring-4
                focus:ring-[#2563EB]/5
              "
            />

            <input
              type="email"
              placeholder="Email ID"
              className="
                h-12
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-4
                text-sm
                text-[#334155]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#2563EB]/40
                focus:bg-white
                focus:ring-4
                focus:ring-[#2563EB]/5
              "
            />

            <button
              type="submit"
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#F15A24]
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_rgba(241,90,36,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E64A19]
              "
            >
              Subscribe

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </form>


          {/* Questions */}
          <div className="mt-8 border-t border-[#E2E8F0] pt-6">

            <div className="text-lg font-black text-[#334155]">
              Have any Questions?
            </div>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Talk to our team about your next electronics manufacturing
              requirement.
            </p>

            <Link
              href="/contact"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#2563EB]
              "
            >
              Contact us
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
{/* =========================================================
    FINAL CTA — START A CONVERSATION
========================================================= */}
<section className="relative overflow-hidden bg-[#f5f8fc]  py-16 lg:py-20">

  <div className="container-flashline">

    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#E2E8F0]
        bg-[#F7F9FC]
        px-7
        py-10
        shadow-[0_15px_50px_rgba(38,54,77,0.06)]
        sm:px-10
        lg:px-14
        lg:py-12
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563EB]/[0.045] blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-[#F15A24]/[0.035] blur-[80px]" />

      {/* subtle circuit lines */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] opacity-[0.07] lg:block">

        <svg
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M500 55H390L340 105H250L205 150H90"
            stroke="#2563EB"
            strokeWidth="1.5"
          />

          <path
            d="M500 125H420L370 175H290L240 225H150"
            stroke="#F15A24"
            strokeWidth="1.5"
          />

          <path
            d="M470 205H400L350 255H270"
            stroke="#2563EB"
            strokeWidth="1.5"
          />

          <circle
            cx="390"
            cy="105"
            r="4"
            fill="#2563EB"
          />

          <circle
            cx="370"
            cy="175"
            r="4"
            fill="#F15A24"
          />

        </svg>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between ">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#F15A24]">
              <ArrowUpRight size={16} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F15A24]">
              Start a conversation
            </span>

          </div>


          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-[1.08]
              tracking-[-0.04em]
              text-[#334155]
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Need a reliable partner for your next PCB project?
          </h2>


          {/* Description */}
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#64748B]">
            Talk to Flashline EMS about your PCB fabrication,
            assembly and box build requirements.
          </p>

        </div>


        {/* ===================================================
            CTA BUTTON
        ==================================================== */}
        <Link
          href="/quick-quote"
          className="
            group
            relative
            inline-flex
            h-[56px]
            shrink-0
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-lg
            bg-[#F15A24]
            px-7
            text-[15px]
            font-bold
            text-white
            shadow-[0_12px_30px_rgba(241,90,36,0.20)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#E64A19]
            hover:shadow-[0_16px_35px_rgba(241,90,36,0.25)]
          "
        >

          <span className="relative z-10">
            Quick Quote
          </span>

          <ArrowRight
            size={18}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </Link>

      </div>

    </div>

  </div>

</section>
    {isModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
        <div className="relative w-full max-w-xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-8">
          <button
            type="button"
            aria-label="Close dialog"
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#F15A24] hover:text-[#F15A24]"
          >
            <X size={18} />
          </button>

          <div className="mb-6 pr-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">
              Interested?
            </div>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0f172a]">
              Desire additional information!
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Seize the opportunity to experience industry-leading
              electromechanical AI designs!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 8121020371"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your project requirements..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#F15A24] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(241,90,36,0.2)] transition hover:bg-[#E64A19]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
    </main>
  );
}

function NewsMini({ title }: { title: string }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-lg">
      <div className="text-xs text-slate-400">
        November 15, 2021 – Mike Dooley
      </div>

      <h3 className="mt-4 text-xl font-black leading-tight text-[#334155]">
        {title}
      </h3>

      <Link
        href="#"
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F15A24]"
      >
        Read more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}

/* =========================================================
   WHY FLASHLINE ACCORDION
========================================================= */

function WhyAccordion({
  items,
}: {
  items: {
    number: string;
    title: string;
    content: React.ReactNode;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="mt-10 border-t border-[#DDE4EC]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className={`
              border-b border-[#DDE4EC]
              transition-colors duration-300
              ${isOpen ? "bg-white" : "bg-transparent"}
            `}
          >
            {/* ACCORDION HEADER */}
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="
                group flex w-full items-center gap-4
                px-2 py-5 text-left
                sm:px-3
              "
            >
              {/* NUMBER */}
              <span
                className={`
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-lg text-xs font-black
                  transition-all duration-300
                  ${
                    isOpen
                      ? "bg-[#FFF4ED] text-[#F15A24]"
                      : "bg-[#F8FAFC] text-[#94A3B8] ring-1 ring-[#E2E8F0]"
                  }
                `}
              >
                {item.number}
              </span>

              {/* TITLE */}
              <span
                className={`
                  flex-1 text-[16px] font-bold
                  transition-colors duration-300
                  sm:text-[18px]
                  ${
                    isOpen
                      ? "text-[#F15A24]"
                      : "text-[#334155] group-hover:text-[#2563EB]"
                  }
                `}
              >
                {item.title}
              </span>

              {/* CHEVRON */}
              <span
                className={`
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full border
                  transition-all duration-300
                  ${
                    isOpen
                      ? "rotate-180 border-[#F15A24]/20 bg-[#FFF4ED] text-[#F15A24]"
                      : "border-[#E2E8F0] bg-white text-[#94A3B8] group-hover:border-[#2563EB]/20 group-hover:text-[#2563EB]"
                  }
                `}
              >
                <ChevronDown size={17} strokeWidth={2} />
              </span>
            </button>

            {/* EXPANDED CONTENT */}
            <div
              className={`
                grid transition-[grid-template-rows]
                duration-300 ease-out
                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="overflow-hidden">
                <div
                  className="
                    ml-[56px] mr-2
                    border-l-2 border-[#F15A24]/15
                    pb-6 pl-5 pr-2
                    sm:ml-[59px] sm:pl-6
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border border-[#E8EDF3]
                      bg-[#F8FAFC]
                      px-5 py-5
                      text-[14px]
                      leading-7
                      text-[#64748B]
                      sm:px-6
                    "
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}