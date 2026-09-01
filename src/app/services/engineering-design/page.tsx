
// "use client";

// import { useRef, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   ChevronRight,
//   FileText,
//   Mail,
//   Phone,
//   Upload,
// } from "lucide-react";
// import Link from "next/link";


// type EngineeringTab = {
//   id: string;
//   label: string;
//   heading: string;
//   description: string;
//   image: string;
//   imageAlt: string;
// };


// const engineeringTabs: EngineeringTab[] = [
//   {
//     id: "product-development",
//     label: "Product Development",
//     heading:
//       "Product development services can be customized to meet your specific requirements.",
//     description:
//       "Some customers come to us with only a sketch of an idea, and in these circumstances, we take on the entire project from conception to completion. Other customers have their design team and want to keep control of the fundamental elements of the design while enlisting our assistance with certain aspects of the design, such as mechanical or firmware development. Our approach begins with understanding your needs, establishing the solution design, project planning, prototype evaluation, system integration, and product quality validation, regardless of the breadth of services you require.",
//     image:
//       "https://resources.news.e.abb.com/images/2021/1/27/0/GLAUB_3970_bv2.jpg",
//     imageAlt: "Product development and electronics manufacturing",
//   },

//   {
//     id: "hardware-design",
//     label: "Hardware Design",
//     heading:
//       "Embedded hardware development is an important element of product development.",
//     description:
//       "Our hardware engineering services include board design, PCB layout, programmable logic, and enclosure designs that integrate FPGAs, DSPs, microprocessors, and complicated RF, analog, and power systems, from the basic architecture phase to production support. We thoroughly examine all PCB designs for timing, signal integrity, power, heat dissipation, and EMC/EMI compliance.",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Hardware engineering and PCB development",
//   },

//   {
//     id: "pcb-layout",
//     label: "PCB Layout Design",
//     heading:
//       "The design group at Flashline EMS combines knowledge with industry-standard design principles, ensuring that PCB layouts are tested and compliant with specific requirements.",
//     description:
//       "Our hardware engineering services include board design, PCB layout, programmable logic, and enclosure designs that integrate FPGAs, DSPs, microprocessors, and complicated RF, analog, and power systems, from the basic architecture phase to production support. We thoroughly examine all PCB designs for timing, signal integrity, power, heat dissipation, and EMC/EMI compliance.",
//     image:
//       "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "PCB layout design",
//   },

//   {
//     id: "mechanical-design",
//     label: "Mechanical Design",
//     heading:
//       "Mechanical design experts at Flashline EMS have a wealth of experience and understanding of designing fixtures and enclosures.",
//     description:
//       "Because of our integrated nature, clients can rest assured that our mechanical engineers will design any assembly aid, test jig, or product enclosure using sound design for manufacturing principles. Flashline EMS will combine our electronics and mechanical design skills to ensure the most appropriate and effective interface with our customers’ products. We can provide simple and complex solutions for multi-board electronics enclosures, electrical cabinets, pogo pin interface jigs, and manufacturing test fixtures.",
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Mechanical design and engineering",
//   },
// ];


// export default function EngineeringDesignPage() {
//   const [activeTab, setActiveTab] = useState(
//     "product-development"
//   );

//   const activeContent =
//     engineeringTabs.find(
//       (item) => item.id === activeTab
//     ) ?? engineeringTabs[0];
// const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <main className="overflow-hidden bg-[#F7F9FC] text-[#334155]">

//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       {/* =========================================================
//     ENGINEERING DESIGN — INTRO
// ========================================================= */}

// <section className="relative overflow-hidden bg-white py-20 lg:py-28 mt-20">
//   {/* Background decoration */}
//   <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#2563EB]/[0.035] blur-[120px]" />
//   <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#F15A24]/[0.03] blur-[110px]" />

//   <div className="container-flashline relative">
//     <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

//       {/* LEFT — CONTENT */}
//       <div>
//         {/* Eyebrow */}
//         <div className="flex items-center gap-3">
//           <span className="h-[2px] w-10 rounded-full bg-[#F15A24]" />

//           <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F15A24]">
//             Engineering Services
//           </span>
//         </div>

//         {/* Heading */}
//         <h1
//           className="
//             mt-5
//             text-4xl
//             font-black
//             leading-[1.05]
//             tracking-[-0.045em]
//             text-[#334155]
//             sm:text-5xl
//             lg:text-[58px]
//           "
//         >
//           Engineering
//           <span className="block text-[#F15A24]">
//             Design
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#64748B]">
//           At Flashline EMS, we collaborate with our clients to develop
//           unique solutions that meet their specific product requirements.
//           Our engineering team works closely with customers from concept
//           through development to deliver reliable and cost-effective
//           solutions.
//         </p>

//         {/* CTA */}
//        <Link
//  href="#get-in-touch"
//   className="
//     group
//     mt-8
//     inline-flex
//     items-center
//     gap-3
//     rounded-xl
//     bg-[#F15A24]
//     px-6
//     py-4
//     text-sm
//     font-bold
//     text-white
//     shadow-[0_12px_30px_rgba(241,90,36,0.18)]
//     transition-all
//     duration-300
//     hover:-translate-y-0.5
//     hover:bg-[#E64A19]
//     hover:shadow-[0_16px_35px_rgba(241,90,36,0.24)]
//     focus:outline-none
//     focus:ring-4
//     focus:ring-[#F15A24]/20
//   "
// >
//   Talk to our team

//   <ArrowRight
//     size={18}
//     className="transition-transform duration-300 group-hover:translate-x-1"
//   />
// </Link>
//       </div>

//       {/* RIGHT — IMAGE */}
//       <div className="relative">
//         {/* Decorative corners */}
//         <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-[#F15A24]" />
//         <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-[#2563EB]" />

//         <div className="relative overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_20px_55px_rgba(38,54,77,0.08)]">
//           <img
//             src="/services/engineer-design.png"
//             alt="Engineering design and PCB development"
//             className="
//               h-[340px]
//               w-full
//               object-cover
//               transition-transform
//               duration-700
//               hover:scale-105
//               sm:h-[430px]
//             "
//           />

//           {/* Image overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/45 via-transparent to-transparent" />

//           {/* Image label */}
//           <div className="absolute bottom-6 left-6">
//             <div className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F15A24] shadow-lg backdrop-blur">
//               Engineering Services
//             </div>

//             <div className="mt-3 text-2xl font-black text-white">
//               PCB Development
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

//       {/* =========================================================
//           ENGINEERING CAPABILITIES
//       ========================================================== */}

//       <section className="bg-[#F7F9FC] py-20 lg:py-28">

//         <div className="container-flashline">

//           {/* Section heading */}

//           <div className="max-w-3xl">

//             <div
//               className="
//                 text-[10px]
//                 font-black
//                 uppercase
//                 tracking-[0.22em]
//                 text-[#F15A24]
//               "
//             >
//               Our Engineering Capabilities
//             </div>


//             <h2
//               className="
//                 mt-4
//                 text-4xl
//                 font-black
//                 tracking-[-0.04em]
//                 text-[#334155]
//                 sm:text-5xl
//               "
//             >

//               Engineering expertise from

//               <span className="text-[#F15A24]">
//                 {" "}concept to production.
//               </span>

//             </h2>

//           </div>


//           {/* =====================================================
//               CAPABILITY CARD
//           ====================================================== */}

//           <div
//             className="
//               mt-12
//               overflow-hidden
//               rounded-[24px]
//               border
//               border-[#E2E8F0]
//               bg-white
//               shadow-[0_15px_50px_rgba(38,54,77,0.07)]
//             "
//           >

//             {/* =================================================
//                 TABS
//             ================================================== */}

//             <div
//               className="
//                 grid
//                 border-b
//                 border-[#E2E8F0]
//                 md:grid-cols-4
//               "
//             >

//               {engineeringTabs.map((tab, index) => {

//                 const isActive =
//                   activeTab === tab.id;

//                 return (
//                   <button
//                     key={tab.id}
//                     type="button"
//                     onClick={() =>
//                       setActiveTab(tab.id)
//                     }
//                     className={`
//                       group
//                       relative
//                       flex
//                       min-h-[88px]
//                       items-center
//                       justify-between
//                       gap-4
//                       border-b
//                       border-[#E2E8F0]
//                       px-5
//                       py-5
//                       text-left
//                       transition-all
//                       duration-300
//                       md:border-b-0
//                       md:border-r
//                       md:last:border-r-0
//                       ${
//                         isActive
//                           ? "bg-[#F8FAFC]"
//                           : "bg-white hover:bg-[#FAFBFD]"
//                       }
//                     `}
//                   >

//                     {/* Active indicator */}

//                     <span
//                       className={`
//                         absolute
//                         bottom-0
//                         left-0
//                         h-[3px]
//                         rounded-r-full
//                         bg-[#F15A24]
//                         transition-all
//                         duration-300
//                         ${
//                           isActive
//                             ? "w-full"
//                             : "w-0 group-hover:w-1/2"
//                         }
//                       `}
//                     />


//                     <div>

//                       <div
//                         className={`
//                           text-[10px]
//                           font-black
//                           tracking-[0.2em]
//                           ${
//                             isActive
//                               ? "text-[#F15A24]"
//                               : "text-[#94A3B8]"
//                           }
//                         `}
//                       >
//                         0{index + 1}
//                       </div>


//                       <div
//                         className={`
//                           mt-2
//                           text-sm
//                           font-black
//                           ${
//                             isActive
//                               ? "text-[#334155]"
//                               : "text-[#64748B]"
//                           }
//                         `}
//                       >
//                         {tab.label}
//                       </div>

//                     </div>


//                     <ChevronRight
//                       size={17}
//                       className={`
//                         shrink-0
//                         transition-all
//                         duration-300
//                         ${
//                           isActive
//                             ? "translate-x-1 text-[#F15A24]"
//                             : "text-[#CBD5E1] group-hover:translate-x-1 group-hover:text-[#2563EB]"
//                         }
//                       `}
//                     />

//                   </button>
//                 );

//               })}

//             </div>


//             {/* =================================================
//                 ACTIVE CONTENT
//             ================================================== */}

//             <div className="grid lg:grid-cols-[1fr_0.9fr]">

//               {/* Content */}

//               <div
//                 className="
//                   order-2
//                   p-8
//                   sm:p-10
//                   lg:order-1
//                   lg:p-14
//                 "
//               >

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     text-[10px]
//                     font-black
//                     uppercase
//                     tracking-[0.2em]
//                     text-[#F15A24]
//                   "
//                 >

//                   <span className="h-[2px] w-8 rounded-full bg-[#F15A24]" />

//                   {activeContent.label}

//                 </div>


//                 <h3
//                   className="
//                     mt-6
//                     max-w-xl
//                     text-3xl
//                     font-black
//                     leading-tight
//                     tracking-[-0.035em]
//                     text-[#334155]
//                     sm:text-4xl
//                   "
//                 >
//                   {activeContent.heading}
//                 </h3>


//                 <p
//                   className="
//                     mt-7
//                     max-w-2xl
//                     text-[15px]
//                     leading-8
//                     text-[#64748B]
//                   "
//                 >
//                   {activeContent.description}
//                 </p>


//                 {/* Support indicator */}

//                 <div
//                   className="
//                     mt-8
//                     flex
//                     items-center
//                     gap-3
//                     border-t
//                     border-[#E2E8F0]
//                     pt-6
//                   "
//                 >

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-[#FFF4ED]
//                     "
//                   >
//                     <CheckCircle2
//                       size={19}
//                       className="text-[#F15A24]"
//                     />
//                   </div>


//                   <span
//                     className="
//                       text-sm
//                       font-bold
//                       text-[#475569]
//                     "
//                   >
//                     Integrated engineering support
//                   </span>

//                 </div>

//               </div>


//               {/* Image */}

//               <div
//                 className="
//                   order-1
//                   min-h-[320px]
//                   bg-[#F8FAFC]
//                   lg:order-2
//                   lg:min-h-full
//                 "
//               >

//                 <div
//                   className="
//                     relative
//                     h-full
//                     min-h-[320px]
//                     overflow-hidden
//                   "
//                 >

//                   <img
//                     key={activeContent.id}
//                     src={activeContent.image}
//                     alt={activeContent.imageAlt}
//                     className="
//                       h-full
//                       min-h-[320px]
//                       w-full
//                       object-cover
//                       transition-transform
//                       duration-700
//                     "
//                   />


//                   {/* Image overlay */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-[#334155]/65
//                       via-transparent
//                       to-transparent
//                     "
//                   />


//                   {/* Image information */}

//                   <div className="absolute bottom-6 left-6">

//                     <div
//                       className="
//                         inline-flex
//                         rounded-full
//                         bg-white/90
//                         px-3
//                         py-1.5
//                         text-[9px]
//                         font-black
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#2563EB]
//                         backdrop-blur-md
//                       "
//                     >
//                       Engineering Services
//                     </div>


//                     <div className="mt-2 text-xl font-black text-white">
//                       {activeContent.label}
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           GET IN TOUCH
//       ========================================================== */}

//       <GetInTouchSection />

//     </main>
//   );
// }


// /* =============================================================
//    GET IN TOUCH
// ============================================================= */

// function GetInTouchSection() {

//   const [message, setMessage] = useState("");
//   const [fileName, setFileName] = useState("");

//   const fileInputRef =
//     useRef<HTMLInputElement | null>(null);


//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {

//     const file = event.target.files?.[0];

//     if (file) {
//       setFileName(file.name);
//     }

//   };


//   return (
//     <section
//       id="get-in-touch"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         lg:py-28
//       "
//     >

//       {/* Background glows */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-0
//           h-[400px]
//           w-[400px]
//           rounded-full
//           bg-[#2563EB]/[0.035]
//           blur-[120px]
//         "
//       />


//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           right-0
//           h-[350px]
//           w-[350px]
//           rounded-full
//           bg-[#F15A24]/[0.03]
//           blur-[110px]
//         "
//       />


//       <div className="container-flashline relative">

//         <div
//           className="
//             grid
//             gap-14
//             lg:grid-cols-[0.85fr_1.15fr]
//             lg:gap-20
//           "
//         >

//           {/* =================================================
//               LEFT CONTENT
//           ================================================== */}

//           <div>

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 text-[10px]
//                 font-black
//                 uppercase
//                 tracking-[0.22em]
//                 text-[#F15A24]
//               "
//             >

//               <span className="h-[2px] w-10 rounded-full bg-[#F15A24]" />

//               Get In Touch

//             </div>


//             <h2
//               className="
//                 mt-5
//                 text-4xl
//                 font-black
//                 tracking-[-0.04em]
//                 text-[#334155]
//                 sm:text-5xl
//               "
//             >

//               Let&apos;s build your

//               <span className="block text-[#F15A24]">
//                 next solution.
//               </span>

//             </h2>


//             {/* Content */}

//             <div
//               className="
//                 mt-7
//                 space-y-6
//                 text-[15px]
//                 leading-8
//                 text-[#64748B]
//               "
//             >

//               <p>
//                 Flashline EMS is aninnovativeAI driven
//                 electronics manufacturing service (EMS)
//                 partner to leading OEMs, offering
//                 high-quality design, prototype, and
//                 full-scale production for anysorts of
//                 complex printed circuit boards assemblies.
//                 Flashline EMS has years of experience in
//                 the industry, resulting in vast expertise
//                 in printed circuit board manufacturing,
//                 assembly and Box build.
//               </p>


//               <p>
//                 Flashline EMS is over 100,000 square feet
//                 state of art, brand new manufacturing
//                 facility with capacity to grow over 10 SMT
//                 lines aimed to serve prototype to high-mix
//                 volume for the customers globally.
//               </p>

//             </div>


//             {/* Trust points */}

//             <div className="mt-8 space-y-3">

//               {[
//                 "High-quality design and prototype support",
//                 "Full-scale production capability",
//                 "100,000+ square feet manufacturing facility",
//                 "Prototype to high-mix volume production",
//               ].map((item) => (

//                 <div
//                   key={item}
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     text-sm
//                     font-bold
//                     text-[#475569]
//                   "
//                 >

//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-[#F15A24]"
//                   />

//                   {item}

//                 </div>

//               ))}

//             </div>

//           </div>


//           {/* =================================================
//               FORM
//           ================================================== */}

//           <div
//             className="
//               relative
//               overflow-hidden
//               rounded-[24px]
//               border
//               border-[#E2E8F0]
//               bg-white
//               p-7
//               shadow-[0_15px_50px_rgba(38,54,77,0.07)]
//               sm:p-9
//               lg:p-10
//             "
//           >

//             {/* Top accent */}

//             <div
//               className="
//                 absolute
//                 left-0
//                 right-0
//                 top-0
//                 h-1
//                 bg-gradient-to-r
//                 from-[#F15A24]
//                 via-[#2563EB]
//                 to-[#F15A24]
//               "
//             />


//             <form className="space-y-6">

//               {/* First Name */}

//               <div>

//                 <label
//                   htmlFor="firstName"
//                   className="
//                     mb-2
//                     block
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-[0.08em]
//                     text-[#475569]
//                   "
//                 >
//                   First Name
//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
//                 </label>


//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   placeholder="E.g. John"
//                   required
//                   className="
//                     h-14
//                     w-full
//                     rounded-xl
//                     border
//                     border-[#CBD5E1]
//                     bg-[#FCFDFE]
//                     px-4
//                     text-sm
//                     text-[#334155]
//                     outline-none
//                     transition-all
//                     placeholder:text-[#94A3B8]
//                     focus:border-[#2563EB]/50
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-[#2563EB]/[0.08]
//                   "
//                 />

//               </div>


//               {/* Email */}

//               <div>

//                 <label
//                   htmlFor="email"
//                   className="
//                     mb-2
//                     block
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-[0.08em]
//                     text-[#475569]
//                   "
//                 >
//                   Email Address
//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
//                 </label>


//                 <div className="relative">

//                   <Mail
//                     size={17}
//                     className="
//                       absolute
//                       left-4
//                       top-1/2
//                       -translate-y-1/2
//                       text-[#94A3B8]
//                     "
//                   />


//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="E.g. john@doe.com"
//                     required
//                     className="
//                       h-14
//                       w-full
//                       rounded-xl
//                       border
//                       border-[#CBD5E1]
//                       bg-[#FCFDFE]
//                       pl-11
//                       pr-4
//                       text-sm
//                       text-[#334155]
//                       outline-none
//                       transition-all
//                       placeholder:text-[#94A3B8]
//                       focus:border-[#2563EB]/50
//                       focus:bg-white
//                       focus:ring-4
//                       focus:ring-[#2563EB]/[0.08]
//                     "
//                   />

//                 </div>

//               </div>


//               {/* Phone */}

//               <div>

//                 <label
//                   htmlFor="phone"
//                   className="
//                     mb-2
//                     block
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-[0.08em]
//                     text-[#475569]
//                   "
//                 >
//                   Phone Number
//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
//                 </label>


//                 <div className="relative">

//                   <Phone
//                     size={17}
//                     className="
//                       absolute
//                       left-4
//                       top-1/2
//                       -translate-y-1/2
//                       text-[#94A3B8]
//                     "
//                   />


//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="E.g. +1 3004005000"
//                     required
//                     className="
//                       h-14
//                       w-full
//                       rounded-xl
//                       border
//                       border-[#CBD5E1]
//                       bg-[#FCFDFE]
//                       pl-11
//                       pr-4
//                       text-sm
//                       text-[#334155]
//                       outline-none
//                       transition-all
//                       placeholder:text-[#94A3B8]
//                       focus:border-[#2563EB]/50
//                       focus:bg-white
//                       focus:ring-4
//                       focus:ring-[#2563EB]/[0.08]
//                     "
//                   />

//                 </div>

//               </div>


//               {/* Message */}

//               <div>

//                 <div className="mb-2 flex items-center justify-between">

//                   <label
//                     htmlFor="message"
//                     className="
//                       text-xs
//                       font-bold
//                       uppercase
//                       tracking-[0.08em]
//                       text-[#475569]
//                     "
//                   >
//                     Message
//                   </label>


//                   <span className="text-xs text-[#94A3B8]">
//                     {message.length} / 180
//                   </span>

//                 </div>


//                 <textarea
//                   id="message"
//                   name="message"
//                   value={message}
//                   maxLength={180}
//                   onChange={(event) =>
//                     setMessage(event.target.value)
//                   }
//                   placeholder="Enter your message..."
//                   rows={5}
//                   className="
//                     w-full
//                     resize-none
//                     rounded-xl
//                     border
//                     border-[#CBD5E1]
//                     bg-[#FCFDFE]
//                     p-4
//                     text-sm
//                     leading-6
//                     text-[#334155]
//                     outline-none
//                     transition-all
//                     placeholder:text-[#94A3B8]
//                     focus:border-[#2563EB]/50
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-[#2563EB]/[0.08]
//                   "
//                 />

//               </div>


//               {/* Upload */}

//               <div>

//                 <label
//                   className="
//                     mb-2
//                     block
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-[0.08em]
//                     text-[#475569]
//                   "
//                 >
//                   Upload File
//                 </label>


//                 <button
//                   type="button"
//                   onClick={() =>
//                     fileInputRef.current?.click()
//                   }
//                   className="
//                     group
//                     flex
//                     min-h-[130px]
//                     w-full
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-xl
//                     border
//                     border-dashed
//                     border-[#CBD5E1]
//                     bg-[#FAFBFD]
//                     px-5
//                     py-6
//                     text-center
//                     transition-all
//                     duration-300
//                     hover:border-[#2563EB]/40
//                     hover:bg-[#EFF6FF]/40
//                   "
//                 >

//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-[#EFF6FF]
//                       text-[#2563EB]
//                       transition
//                       group-hover:bg-[#FFF4ED]
//                       group-hover:text-[#F15A24]
//                     "
//                   >

//                     {fileName ? (
//                       <FileText size={21} />
//                     ) : (
//                       <Upload size={21} />
//                     )}

//                   </div>


//                   {fileName ? (

//                     <span
//                       className="
//                         mt-3
//                         max-w-full
//                         truncate
//                         text-sm
//                         font-bold
//                         text-[#334155]
//                       "
//                     >
//                       {fileName}
//                     </span>

//                   ) : (

//                     <>
//                       <span className="mt-3 text-sm text-[#64748B]">
//                         Drag and Drop (or)
//                       </span>

//                       <span
//                         className="
//                           mt-1
//                           text-sm
//                           font-bold
//                           text-[#2563EB]
//                         "
//                       >
//                         Choose Files
//                       </span>
//                     </>

//                   )}

//                 </button>


//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />

//               </div>


//               {/* Submit */}

//               <button
//                 type="submit"
//                 className="
//                   group
//                   inline-flex
//                   h-14
//                   w-full
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-xl
//                   bg-[#F15A24]
//                   px-8
//                   text-sm
//                   font-black
//                   text-white
//                   shadow-[0_12px_30px_rgba(241,90,36,0.18)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-0.5
//                   hover:bg-[#E64A19]
//                   hover:shadow-[0_15px_35px_rgba(241,90,36,0.24)]
//                   focus:outline-none
//                   focus:ring-4
//                   focus:ring-[#F15A24]/20
//                 "
//               >

//                 Submit

//                 <ArrowRight
//                   size={17}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />

//               </button>

//             </form>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



"use client";

import { Header } from "../../../../components/layout/header";
import { TopBar } from "../../../../components/layout/top-bar";


export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          TOP BAR + HEADER
      ===================================================== */}

      <TopBar />
      <Header />


      {/* =====================================================
          CERTIFICATION CONTENT
      ===================================================== */}

      <section className="mt-20 bg-white py-14 lg:py-20">
        <div className="container-flashline">

          <div className="mx-auto max-w-6xl">

            <section className="py-8 mt-20">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  px-6
                  py-16
                  text-center
                  shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  sm:px-10
                  sm:py-20
                "
              >

                {/* =================================================
                    DECORATIVE BACKGROUND
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#F4511E]/[0.06]
                    blur-3xl
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#63B5DC]/[0.06]
                    blur-3xl
                  "
                />


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative">

                  {/* Accent */}

                  <div className="mb-6 flex justify-center">
                    <div className="h-[3px] w-14 rounded-full bg-[#63B5DC]" />
                  </div>


                  {/* Heading */}

                  <h1
                    className="
                      text-3xl
                      font-black
                      tracking-tight
                      text-[#F4511E]
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    More Information Coming Soon
                  </h1>


                  {/* Description */}

                  <p
                    className="
                      mx-auto
                      mt-4
                      max-w-2xl
                      text-base
                      leading-7
                      text-[#64748B]
                      sm:text-lg
                    "
                  >
                    Detailed information about Engineering Design Service,
                    quality standards, and compliance will be available
                    here soon.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </div>
      </section>

    </main>
  );
}