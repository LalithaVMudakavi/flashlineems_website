

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Factory,
//   Layers3,
//   Cpu,
//   CircuitBoard,
//   Upload,
// } from "lucide-react";

// const pcbTypes = [
//   {
//     title: "HDI Rigid PCB",
//     href: "/capabilities/pcb-fabrication/rigidpcb",
//     image: "/pcbfabricationserviceimages/hdirigidpcb.png",
//     icon: Layers3,
//     description:
//       "High-density interconnect boards designed for compact and high-performance electronic applications.",
//     accent: "blue",
//   },
//   {
//     title: "HDI Flex PCB",
//     href: "/capabilities/pcb-fabrication/hdipcb",
//     image: "/pcbfabricationserviceimages/hdiflexpcb.png",
//     icon: CircuitBoard,
//     description:
//       "Flexible PCB solutions designed for applications requiring compact routing and reliable flexibility.",
//     accent: "orange",
//   },
//   {
//     title: "HDI Rigid Flex PCB",
//      href: "/capabilities/pcb-fabrication/rigid-flex-pcb",
//     image: "/pcbfabricationserviceimages/hdiflexrigidpcb.png",
//     icon: Cpu,
//     description:
//       "Rigid-flex solutions combining mechanical flexibility with reliable rigid board performance.",
//     accent: "blue",
//   },
//   {
//     title: "Metal-core PCB",
//      href: "/capabilities/pcb-fabrication/metal-core-pcb",
//     image: "/pcbfabricationserviceimages/metalcorepcb.png",
//     icon: Factory,
//     description:
//       "Thermally efficient PCB solutions designed for demanding power and heat-management applications.",
//     accent: "orange",
//   },
// ];

// const fabricationHighlights = [
//   "Advanced PCB fabrication processes",
//   "Prototype to high-volume production",
//   "Product layout to production",
//   "Warehousing and shipping support",
// ];

// export default function PcbFabricationPage() {
//   return (
//     <main className="overflow-hidden bg-[#F7F9FC] text-[#334155]">

//       {/* =========================================================
//           INTRODUCTION / HERO
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 mt-20">

//         {/* Technical background */}

//         <div className="pointer-events-none absolute inset-0 pcb-grid opacity-[0.018]" />

//         {/* Blue glow */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-40
//             -top-40
//             h-[480px]
//             w-[480px]
//             rounded-full
//             bg-[#2563EB]/[0.045]
//             blur-[130px]
//           "
//         />

//         {/* Orange glow */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -left-40
//             bottom-0
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-[#F15A24]/[0.035]
//             blur-[120px]
//           "
//         />

//         <div className="container-flashline relative">

//           <div
//             className="
//               grid
//               items-center
//               gap-14
//               lg:grid-cols-2
//               lg:gap-20
//             "
//           >

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================= */}

//             <div className="max-w-[680px]">

//               {/* Eyebrow */}

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//                 <span
//                   className="
//                     text-[10px]
//                     font-black
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#F15A24]
//                   "
//                 >
//                   Flashline EMS
//                 </span>

//               </div>


//               {/* Heading */}

//               <h1
//                 className="
//                   mt-5
//                   text-4xl
//                   font-black
//                   leading-[1.04]
//                   tracking-[-0.045em]
//                   text-[#334155]
//                   sm:text-5xl
//                   lg:text-[60px]
//                 "
//               >
//                 PCB {" "}

//                 <span className=" text-[#F15A24]">
//                   Fabrication
//                 </span>
//               </h1>

//               {/* Description */}

//               <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#64748B] sm:text-[16px]">

//                 <p>
//                   Flashline EMS is a premier producer and supplier of bespoke
//                   PCB fabrication and prototype services, with a diverse team
//                   of professionals and extensive experience in providing PCB
//                   assembly and layout services.
//                 </p>

//                 <p>
//                   Our full-service PCB fabrication capabilities cover the
//                   complete journey from product layout and production through
//                   warehousing and shipping.
//                 </p>

//               </div>


//               {/* CTA */}

//               <div className="mt-8 flex flex-wrap gap-4">

//                 <Link
//                   href="/quick-quote"
//                   className="
//                     group
//                     inline-flex
//                     h-14
//                     items-center
//                     justify-center
//                     gap-3
//                     rounded-xl
//                     bg-[#F15A24]
//                     px-7
//                     text-sm
//                     font-black
//                     text-white
//                     shadow-[0_12px_30px_rgba(241,90,36,0.18)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                     hover:bg-[#E64A19]
//                   "
//                 >
//                   Get a Quote

//                   <ArrowRight
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>


//                 <Link
//                   href="#pcb-types"
//                   className="
//                     group
//                     inline-flex
//                     h-14
//                     items-center
//                     justify-center
//                     gap-3
//                     rounded-xl
//                     border
//                     border-[#CBD5E1]
//                     bg-white
//                     px-7
//                     text-sm
//                     font-black
//                     text-[#475569]
//                     shadow-sm
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                     hover:border-[#2563EB]/40
//                     hover:text-[#2563EB]
//                   "
//                 >
//                   Explore PCB Types

//                   <ArrowRight
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//               </div>


//               {/* Highlights */}

//               <div className="mt-9 flex flex-wrap gap-3">

//                 {[
//                   "Prototype support",
//                   "High-volume production",
//                   "Advanced processes",
//                   "Global supply",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       rounded-lg
//                       border
//                       border-[#E2E8F0]
//                       bg-[#FAFBFD]
//                       px-3.5
//                       py-2.5
//                       text-xs
//                       font-bold
//                       text-[#64748B]
//                     "
//                   >

//                     <CheckCircle2
//                       size={15}
//                       className="text-[#2563EB]"
//                     />

//                     {item}

//                   </div>

//                 ))}

//               </div>

//             </div>


//             {/* =================================================
//                 RIGHT IMAGE
//             ================================================= */}

//             <div className="relative">

//               {/* Glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-8
//                   -top-8
//                   h-40
//                   w-40
//                   rounded-full
//                   bg-[#2563EB]/10
//                   blur-[70px]
//                 "
//               />

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -bottom-8
//                   -left-8
//                   h-40
//                   w-40
//                   rounded-full
//                   bg-[#F15A24]/10
//                   blur-[70px]
//                 "
//               />


//               {/* Image Card */}

//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[26px]
//                   border
//                   border-[#E2E8F0]
//                   bg-[#F8FAFC]
//                   p-2
//                   shadow-[0_25px_65px_rgba(38,54,77,0.09)]
//                 "
//               >

//                 {/* Decorative corners */}

//                 <div
//                   className="
//                     absolute
//                     -left-1
//                     -top-1
//                     z-20
//                     h-20
//                     w-20
//                     rounded-tl-[26px]
//                     border-l-2
//                     border-t-2
//                     border-[#F15A24]/50
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     -bottom-1
//                     -right-1
//                     z-20
//                     h-20
//                     w-20
//                     rounded-br-[26px]
//                     border-b-2
//                     border-r-2
//                     border-[#2563EB]/40
//                   "
//                 />


//                 <div className="relative overflow-hidden rounded-[20px]">

//                   <Image
//                     src="/services/pcbfabrication.png"
//                     alt="PCB fabrication and manufacturing"
//                     width={1200}
//                     height={800}
//                     priority
//                     className="
//                       h-[350px]
//                       w-full
//                       object-cover
//                       transition-transform
//                       duration-700
//                       hover:scale-105
//                       lg:h-[500px]
//                     "
//                   />


//                   {/* Light overlay */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-[#334155]/45
//                       via-transparent
//                       to-transparent
//                     "
//                   />


//                   {/* Floating label */}

//                   <div className="absolute bottom-5 left-5">

//                     <div
//                       className="
//                         inline-flex
//                         rounded-full
//                         border
//                         border-white/30
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
//                       Manufacturing Capability
//                     </div>

//                     <div className="mt-2 text-xl font-black text-white">
//                       Advanced PCB Fabrication
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           PCB TYPES
//       ========================================================== */}

//       <section
//         id="pcb-types"
//         className="relative overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
//       >

//         {/* Background glow */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             right-0
//             top-0
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-[#2563EB]/[0.035]
//             blur-[120px]
//           "
//         />

//         <div className="container-flashline relative">

//           {/* Section header */}

//           <div className="mx-auto max-w-3xl text-center">

//             <div className="flex items-center justify-center gap-3">

//               <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//               <span
//                 className="
//                   text-[10px]
//                   font-black
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#F15A24]
//                 "
//               >
//                 Our Capabilities
//               </span>

//               <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//             </div>


//             <h2
//               className="
//                 mt-5
//                 text-4xl
//                 font-black
//                 leading-[1.08]
//                 tracking-[-0.04em]
//                 text-[#334155]
//                 sm:text-5xl
//               "
//             >
//               PCB Manufacturing

//               <span className="block text-[#F15A24]">
//                 Capabilities
//               </span>
//             </h2>


//             <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#64748B] sm:text-[16px]">
//               Explore our range of PCB fabrication capabilities designed to
//               support prototype development, complex designs and high-volume
//               production.
//             </p>

//           </div>


//           {/* PCB Cards */}

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//             {pcbTypes.map((pcb) => {

//               const Icon = pcb.icon;

//               const isOrange = pcb.accent === "orange";

//               return (

//                 <Link
//                   key={pcb.title}
//                   href={pcb.href}
//                   className="group"
//                 >

//                   <article
//                     className="
//                       relative
//                       h-full
//                       overflow-hidden
//                       rounded-[22px]
//                       border
//                       border-[#E2E8F0]
//                       bg-white
//                       shadow-[0_8px_25px_rgba(38,54,77,0.04)]
//                       transition-all
//                       duration-500
//                       hover:-translate-y-2
//                       hover:shadow-[0_22px_50px_rgba(38,54,77,0.09)]
//                     "
//                   >

//                     {/* Image */}

//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">

//                       <Image
//                         src={pcb.image}
//                         alt={pcb.title}
//                         fill
//                         className="
//                           object-contain
//                           p-6
//                           transition-transform
//                           duration-700
//                           group-hover:scale-105
//                         "
//                       />


//                       {/* Soft image gradient */}

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/30 to-transparent" />


//                       {/* Icon */}

//                       <div
//                         className={`
//                           absolute
//                           left-4
//                           top-4
//                           flex
//                           h-10
//                           w-10
//                           items-center
//                           justify-center
//                           rounded-xl
//                           border
//                           ${
//                             isOrange
//                               ? "border-[#F15A24]/15 bg-[#FFF4ED] text-[#F15A24]"
//                               : "border-[#2563EB]/15 bg-[#EFF6FF] text-[#2563EB]"
//                           }
//                         `}
//                       >
//                         <Icon size={19} />

//                       </div>

//                     </div>


//                     {/* Content */}

//                     <div className="p-6">

//                       <h3
//                         className="
//                           text-xl
//                           font-black
//                           tracking-[-0.02em]
//                           text-[#334155]
//                           transition-colors
//                           group-hover:text-[#F15A24]
//                         "
//                       >
//                         {pcb.title}
//                       </h3>


//                       <p className="mt-3 text-sm leading-6 text-[#64748B]">
//                         {pcb.description}
//                       </p>


//                       <div
//                         className="
//                           mt-5
//                           flex
//                           items-center
//                           gap-2
//                           text-sm
//                           font-black
//                           text-[#2563EB]
//                         "
//                       >
//                         Explore Capability

//                         <ArrowRight
//                           size={16}
//                           className="transition-transform group-hover:translate-x-1"
//                         />

//                       </div>

//                     </div>


//                     {/* Bottom accent */}

//                     <div
//                       className={`
//                         absolute
//                         bottom-0
//                         left-0
//                         h-[3px]
//                         w-0
//                         transition-all
//                         duration-500
//                         group-hover:w-full
//                         ${
//                           isOrange
//                             ? "bg-[#F15A24]"
//                             : "bg-[#2563EB]"
//                         }
//                       `}
//                     />

//                   </article>

//                 </Link>

//               );

//             })}

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           WHY FLASHLINE
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -left-40
//             top-20
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-[#F15A24]/[0.03]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-40
//             bottom-0
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-[#2563EB]/[0.035]
//             blur-[120px]
//           "
//         />


//         <div className="container-flashline relative">

//           <div
//             className="
//               grid
//               items-center
//               gap-14
//               lg:grid-cols-[0.85fr_1.15fr]
//               lg:gap-20
//             "
//           >

//             {/* Left */}

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//                 <span
//                   className="
//                     text-[10px]
//                     font-black
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#F15A24]
//                   "
//                 >
//                   Why Flashline EMS
//                 </span>

//               </div>


//               <h2
//                 className="
//                   mt-5
//                   text-4xl
//                   font-black
//                   leading-[1.08]
//                   tracking-[-0.04em]
//                   text-[#334155]
//                   sm:text-5xl
//                 "
//               >
//                 From product layout

//                 <span className="block  text-[#F15A24]">
//                   to production.
//                 </span>
//               </h2>


//               <p
//                 className="
//                   mt-6
//                   max-w-xl
//                   text-[15px]
//                   leading-8
//                   text-[#64748B]
//                   sm:text-[16px]
//                 "
//               >
//                 Our full-service PCB fabrication approach covers the complete
//                 journey from product layout and fabrication through production,
//                 warehousing and shipping.
//               </p>


//               {/* Stats */}

//               <div className="mt-9 grid grid-cols-2 gap-4">

//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-[#E2E8F0]
//                     bg-[#F8FAFC]
//                     p-5
//                   "
//                 >

//                   <div className="text-3xl font-black text-[#334155]">
//                     25+
//                   </div>

//                   <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#64748B]">
//                     Years Experience
//                   </div>

//                 </div>


//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-[#E2E8F0]
//                     bg-[#F8FAFC]
//                     p-5
//                   "
//                 >

//                   <div className="text-3xl font-black text-[#334155]">
//                     100K+
//                   </div>

//                   <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#64748B]">
//                     Sq. Ft. Facility
//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* Right */}

//             <div className="grid gap-4 sm:grid-cols-2">

//               {fabricationHighlights.map((item, index) => (

//                 <div
//                   key={item}
//                   className="
//                     group
//                     rounded-[20px]
//                     border
//                     border-[#E2E8F0]
//                     bg-white
//                     p-6
//                     shadow-[0_8px_25px_rgba(38,54,77,0.035)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-[#2563EB]/20
//                     hover:shadow-[0_15px_35px_rgba(38,54,77,0.07)]
//                   "
//                 >

//                   <div className="flex items-center justify-between">

//                     <span
//                       className="
//                         text-xs
//                         font-black
//                         tracking-[0.18em]
//                         text-[#F15A24]
//                       "
//                     >
//                       0{index + 1}
//                     </span>


//                     <span
//                       className="
//                         flex
//                         h-9
//                         w-9
//                         items-center
//                         justify-center
//                         rounded-lg
//                         bg-[#EFF6FF]
//                         text-[#2563EB]
//                         transition
//                         group-hover:bg-[#FFF4ED]
//                         group-hover:text-[#F15A24]
//                       "
//                     >
//                       <CheckCircle2 size={17} />
//                     </span>

//                   </div>


//                   <p
//                     className="
//                       mt-7
//                       text-base
//                       font-black
//                       leading-7
//                       text-[#475569]
//                     "
//                   >
//                     {item}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           GET IN TOUCH
//       ========================================================== */}

//       <GetInTouch />

//     </main>
//   );
// }


// /* =========================================================
//    GET IN TOUCH
// ========================================================= */

// function GetInTouch() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F7F9FC]
//         py-20
//         sm:py-24
//         lg:py-28
//       "
//     >

//       {/* Background */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-40
//           bottom-0
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#F15A24]/[0.035]
//           blur-[120px]
//         "
//       />


//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-40
//           top-0
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#2563EB]/[0.035]
//           blur-[120px]
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
//               LEFT
//           ================================================== */}

//           <div className="pt-3">

//             <div className="flex items-center gap-3">

//               <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//               <span
//                 className="
//                   text-[10px]
//                   font-black
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#F15A24]
//                 "
//               >
//                 Start a Conversation
//               </span>

//             </div>


//             <h2
//               className="
//                 mt-5
//                 text-4xl
//                 font-black
//                 leading-[1.08]
//                 tracking-[-0.04em]
//                 text-[#334155]
//                 sm:text-5xl
//               "
//             >
//               Need a reliable PCB

//               <span className="block text-[#F15A24]">
//                 manufacturing partner?
//               </span>
//             </h2>


//             <p
//               className="
//                 mt-6
//                 max-w-xl
//                 text-[15px]
//                 leading-8
//                 text-[#64748B]
//                 sm:text-[16px]
//               "
//             >
//               Talk to Flashline EMS about your PCB fabrication requirements.
//               Our team can support your project from prototype development
//               through production.
//             </p>


//             {/* Benefits */}

//             <div className="mt-8 space-y-3">

//               {[
//                 "Prototype and production support",
//                 "Advanced PCB fabrication capabilities",
//                 "Engineering and manufacturing expertise",
//                 "Global customer support",
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

//             {/* Accent line */}

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

//               {/* Name */}

//               <div>

//                 <label
//                   htmlFor="pcb-first-name"
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
//                   id="pcb-first-name"
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
//                     transition
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
//                   htmlFor="pcb-email"
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


//                 <input
//                   id="pcb-email"
//                   type="email"
//                   placeholder="E.g. john@doe.com"
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
//                     transition
//                     placeholder:text-[#94A3B8]
//                     focus:border-[#2563EB]/50
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-[#2563EB]/[0.08]
//                   "
//                 />

//               </div>


//               {/* Phone */}

//               <div>

//                 <label
//                   htmlFor="pcb-phone"
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


//                 <input
//                   id="pcb-phone"
//                   type="tel"
//                   placeholder="E.g. +91 8121020371"
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
//                     transition
//                     placeholder:text-[#94A3B8]
//                     focus:border-[#2563EB]/50
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-[#2563EB]/[0.08]
//                   "
//                 />

//               </div>


//               {/* Message */}

//               <div>

//                 <div className="mb-2 flex items-center justify-between">

//                   <label
//                     htmlFor="pcb-message"
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
//                     0 / 180
//                   </span>

//                 </div>


//                 <textarea
//                   id="pcb-message"
//                   maxLength={180}
//                   rows={5}
//                   placeholder="Tell us about your PCB requirements..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-xl
//                     border
//                     border-[#CBD5E1]
//                     bg-[#FCFDFE]
//                     px-4
//                     py-3.5
//                     text-sm
//                     leading-6
//                     text-[#334155]
//                     outline-none
//                     transition
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


//                 <label
//                   htmlFor="pcb-file"
//                   className="
//                     group
//                     flex
//                     min-h-[120px]
//                     cursor-pointer
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-xl
//                     border
//                     border-dashed
//                     border-[#CBD5E1]
//                     bg-[#FAFBFD]
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
//                     <Upload size={20} />
//                   </div>


//                   <span className="mt-3 text-sm text-[#64748B]">
//                     Drag and Drop (or)
//                   </span>


//                   <span className="mt-1 text-sm font-bold text-[#2563EB]">
//                     Choose Files
//                   </span>


//                   <input
//                     id="pcb-file"
//                     type="file"
//                     className="hidden"
//                   />

//                 </label>

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
//                   className="transition-transform duration-300 group-hover:translate-x-1"
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
                    Detailed information about PCB Fabrication Service,
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