


// "use client";

// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

// const assemblyContent = {
//   title: "PCB Assembly",
//   description: `For gaining an advantage over your competition, nothing beats a quick turnaround for your PCB assembly services. Flashline PCB is a one-stop shop for all of your PCB fabrication and assembly needs. We will work directly with you to achieve the best quality and the shortest turn around, whether you need low-volume or high-volume PCB assembly. We are the renowned leader in PCB assembly, for our customers using the most up-to-date equipment for PCB assembly. Our electronic PCB assembly services go above and beyond what you expect from a typical PCB assembly firm.`,
//   image: "/pcbassemblyimage.png",
// };

// const procurementContent = {
//   title: "Component Procurement",
//   description: `For gaining an advantage over your competition, nothing beats a quick turnaround for your PCB assembly services. Flashline PCB is a one-stop shop for all of your PCB fabrication and assembly needs. We will work directly with you to achieve the best quality and the shortest turn around, whether you need low-volume or high-volume PCB assembly. We are the renowned leader in PCB assembly, for our customers using the most up-to-date equipment for PCB assembly. Our electronic PCB assembly services go above and beyond what you expect from a typical PCB assembly firm.`,
//   image: "/componentprocurementimage.png",
// };


// export default function PcbAssemblyPage() {
//   return (
//     <main className="overflow-hidden bg-[#F7F9FC] text-[#334155]">


//       {/* =========================================================
//           PCB ASSEMBLY
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-white py-20 lg:py-28 mt-20">

//         <div className="container-flashline">

//           <div
//             className="
//               grid
//               items-center
//               gap-12
//               lg:grid-cols-[0.9fr_1.1fr]
//               lg:gap-20
//             "
//           >

//             {/* =================================================
//                 CONTENT
//             ================================================= */}

//             <div className="order-2 lg:order-1">

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//                 <span
//                   className="
//                     text-[10px]
//                     font-black
//                     uppercase
//                     tracking-[0.2em]
//                     text-[#F15A24]
//                   "
//                 >
//                   Manufacturing Capability
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
//                 PCB {" "}

//                 <span className=" text-[#F15A24]">
//                   Assembly
//                 </span>
//               </h2>


//               <p
//                 className="
//                   mt-7
//                   max-w-2xl
//                   text-[15px]
//                   leading-8
//                   text-[#64748B]
//                   sm:text-[16px]
//                 "
//               >
//                 {assemblyContent.description}
//               </p>


//               {/* Key points */}

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">

//                 {[
//                   "Prototype support",
//                   "Low-volume production",
//                   "High-volume assembly",
//                   "Modern equipment",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       rounded-xl
//                       border
//                       border-[#E2E8F0]
//                       bg-[#F8FAFC]
//                       px-4
//                       py-3
//                       text-sm
//                       font-bold
//                       text-[#475569]
//                     "
//                   >

//                     <CheckCircle2
//                       size={17}
//                       className="shrink-0 text-[#F15A24]"
//                     />

//                     {item}

//                   </div>

//                 ))}

//               </div>

//             </div>


//             {/* =================================================
//                 IMAGE
//             ================================================= */}

//             <div className="order-1 lg:order-2">

//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[24px]
//                   border
//                   border-[#E2E8F0]
//                   bg-[#F8FAFC]
//                   p-2
//                   shadow-[0_20px_55px_rgba(38,54,77,0.09)]
//                 "
//               >

//                 {/* Decorative corners */}

//                 <div
//                   className="
//                     absolute
//                     -left-1
//                     -top-1
//                     h-20
//                     w-20
//                     rounded-tl-[24px]
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
//                     h-20
//                     w-20
//                     rounded-br-[24px]
//                     border-b-2
//                     border-r-2
//                     border-[#2563EB]/40
//                   "
//                 />


//                 <div className="relative overflow-hidden rounded-[18px]">

//                  <Image
//   src="/services/pcbassemblyimage.png"
//   alt="Component procurement"
//   width={1200}
//   height={700}
//   className="
//     h-[340px]
//     w-full
//     object-cover
//     transition-transform
//     duration-700
//     hover:scale-105
//     lg:h-[420px]
//   "
// />


//                   {/* Image overlay */}

//                   <div
//                     className="
//                       absolute
//                       inset-x-0
//                       bottom-0
//                       h-32
//                       bg-gradient-to-t
//                       from-[#334155]/60
//                       to-transparent
//                     "
//                   />


//                   {/* Image label */}

//                   <div className="absolute bottom-5 left-5">

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
//                       Flashline EMS
//                     </div>


//                     <div className="mt-2 text-xl font-black text-white">
//                       PCB Assembly
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           COMPONENT PROCUREMENT
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#F7F9FC] py-20 lg:py-28">

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

//           <div
//             className="
//               grid
//               items-center
//               gap-12
//               lg:grid-cols-[1.05fr_0.95fr]
//               lg:gap-20
//             "
//           >

//             {/* =================================================
//                 IMAGE
//             ================================================= */}

//             <div className="order-2 lg:order-1">

//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[24px]
//                   border
//                   border-[#E2E8F0]
//                   bg-white
//                   p-2
//                   shadow-[0_20px_55px_rgba(38,54,77,0.08)]
//                 "
//               >

//                 <div className="relative overflow-hidden rounded-[18px]">

//               <Image
//   src="/services/componentprocurementimage.png"
//   alt="Component procurement"
//   width={1200}
//   height={700}
//   className="
//     h-[340px]
//     w-full
//     object-cover
//     transition-transform
//     duration-700
//     hover:scale-105
//     lg:h-[420px]
//   "
// />

//                   {/* Overlay */}

//                   <div
//                     className="
//                       absolute
//                       inset-x-0
//                       bottom-0
//                       h-32
//                       bg-gradient-to-t
//                       from-[#334155]/60
//                       to-transparent
//                     "
//                   />


//                   <div className="absolute bottom-5 left-5">

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
//                         text-[#F15A24]
//                         backdrop-blur-md
//                       "
//                     >
//                       Supply Chain
//                     </div>


//                     <div className="mt-2 text-xl font-black text-white">
//                       Component Procurement
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//               <div className="order-2 lg:order-1">

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//                 <span
//                   className="
//                     text-[10px]
//                     font-black
//                     uppercase
//                     tracking-[0.2em]
//                     text-[#F15A24]
//                   "
//                 >
//                     Supply Chain
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
//                  Component {" "}

//                 <span className=" text-[#F15A24]">
//                   Procurement
//                 </span>
//               </h2>


//               <p
//                 className="
//                   mt-7
//                   max-w-2xl
//                   text-[15px]
//                   leading-8
//                   text-[#64748B]
//                   sm:text-[16px]
//                 "
//               >
//                   {procurementContent.description}
//               </p>


//               {/* Capability highlights */}

//               <div className="mt-8 space-y-3">

//                 {[
//                   "Reliable component sourcing",
//                   "Quality-focused procurement",
//                   "Shorter manufacturing lead times",
//                   "Support for production requirements",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       rounded-xl
//                       border
//                       border-[#E2E8F0]
//                       bg-white
//                       px-4
//                       py-3.5
//                       text-sm
//                       font-bold
//                       text-[#475569]
//                       shadow-[0_5px_18px_rgba(38,54,77,0.03)]
//                     "
//                   >

//                     <span
//                       className="
//                         flex
//                         h-7
//                         w-7
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-lg
//                         bg-[#EFF6FF]
//                         text-[#2563EB]
//                       "
//                     >
//                       <CheckCircle2 size={15} />
//                     </span>

//                     {item}

//                   </div>

//                 ))}

//               </div>

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

//           <div>

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
//                 Get In Touch
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
//               Let&apos;s build your

//               <span className="block text-[#F15A24]">
//                 next solution.
//               </span>
//             </h2>


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
//                 Flashline EMS is an innovative AI driven
//                 electronics manufacturing service (EMS)
//                 partner to leading OEMs, offering
//                 high-quality design, prototype, and
//                 full-scale production for complex printed
//                 circuit board assemblies. Flashline EMS
//                 has years of experience in the industry,
//                 resulting in vast expertise in printed
//                 circuit board manufacturing, assembly and
//                 Box build.
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

//             {/* Accent */}

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
//                   htmlFor="first-name"
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
//                   <span className="ml-1 text-[#F15A24]">*</span>
//                 </label>


//                 <input
//                   id="first-name"
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
//                   <span className="ml-1 text-[#F15A24]">*</span>
//                 </label>


//                 <input
//                   id="email"
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
//                   <span className="ml-1 text-[#F15A24]">*</span>
//                 </label>


//                 <input
//                   id="phone"
//                   type="tel"
//                   placeholder="E.g. +1 3004005000"
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
//                     0 / 180
//                   </span>

//                 </div>


//                 <textarea
//                   id="message"
//                   maxLength={180}
//                   rows={5}
//                   placeholder="Enter your message..."
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
//                   htmlFor="assembly-file"
//                   className="
//                     group
//                     flex
//                     min-h-[125px]
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


//                   <span
//                     className="
//                       mt-1
//                       text-sm
//                       font-bold
//                       text-[#2563EB]
//                     "
//                   >
//                     Choose Files
//                   </span>


//                   <input
//                     id="assembly-file"
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
                    Detailed information about PCB Assembly Service,
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