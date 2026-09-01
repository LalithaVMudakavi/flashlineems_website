
// "use client";

// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

// const boxBuildContent = {
//   title: "Box Build",
//   description: `When it comes to boxing build assembly, there is such a vast range of products that varies from person to person. It can be as basic as putting electronic systems into simple enclosures with interfaces or displays. It can be as complex as system integrations with thousands of separate components or sub-assemblies. We offer box build integration assembly for sub-systems and modules and full product integration to printed circuit board assembly (PCBA) and support you from beginning to end, from quotation to mass manufacturing, through our network of preferred suppliers. Our teams dedicated to your product are essential ingredients for a smooth market entry.`,
// };

// const boxBuildImages = [
//   {
//      src: "/box-build/ecg.png",
//     alt: "Box build electronic system",
//   },
//   {
//     src: "/box-build/image.png",
//     alt: "Box build assembly",
//   },
//   {
//     src: "/box-build/camera.png",
//     alt: "Box build product integration",
//   },
// ];

// export default function BoxBuildPage() {
//   return (
//     <main className="overflow-hidden bg-[#F7F9FC] text-[#334155]">

//       {/* =========================================================
//           BOX BUILD
//       ========================================================== */}

//       <section className="relative mt-20 overflow-hidden bg-white py-20 lg:py-28">

//         {/* Soft background glow */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-40
//             -top-40
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-[#2563EB]/[0.035]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -left-40
//             bottom-0
//             h-[360px]
//             w-[360px]
//             rounded-full
//             bg-[#F15A24]/[0.035]
//             blur-[110px]
//           "
//         />

//         <div className="container-flashline relative">

//           <div
//             className="
//               grid
//               items-center
//               gap-12
//               lg:grid-cols-2
//               lg:gap-20
//             "
//           >

//             {/* =================================================
//                 CONTENT
//             ================================================= */}

//             <div className="order-2 lg:order-1">

//               {/* Eyebrow */}

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


//               {/* Heading */}

//               <h1
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
//                 Box{" "}

//                 <span className="text-[#F15A24]">
//                   Build
//                 </span>
//               </h1>


//               {/* Description */}

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
//                 {boxBuildContent.description}
//               </p>


//               {/* Existing content presented as key points */}

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">

//                 {[
//                   "System integration",
//                   "Sub-system and module integration",
//                   "Full product integration",
//                   "Mass manufacturing",
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

//                 <Image
//   src="/box-build/boxbuildimage.png"
//   alt="Box build electronic system"
//   width={1200}
//   height={700}
//   priority
//   className="
//     h-[340px]
//     w-full
//     object-cover
//     transition-transform
//     duration-700
//     hover:scale-105
//     lg:h-[440px]
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
//                       Box Build
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           BOX BUILD IMAGES
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#F7F9FC] py-20 lg:py-28">

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

//           {/* Section heading */}

//           <div className="max-w-3xl">

//             <div className="flex items-center gap-3">

//               <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//               <span
//                 className="
//                   text-[10px]
//                   font-black
//                   uppercase
//                   tracking-[0.2em]
//                   text-[#F15A24]
//                 "
//               >
//                 Box Build
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
//               Box Build{" "}

//               <span className="text-[#F15A24]">
//                 Integration
//               </span>
//             </h2>


//             <p
//               className="
//                 mt-6
//                 max-w-3xl
//                 text-[15px]
//                 leading-8
//                 text-[#64748B]
//                 sm:text-[16px]
//               "
//             >
//               From component integration to complete product assembly,
//               Flashline EMS provides reliable box build manufacturing and
//               system integration support.
//             </p>

//           </div>


//           {/* =================================================
//               IMAGE GRID
//           ================================================= */}

//           <div className="mt-12 grid gap-6 md:grid-cols-3">

//             {boxBuildImages.map((image, index) => (

//               <div
//                 key={image.src}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[22px]
//                   border
//                   border-[#E2E8F0]
//                   bg-white
//                   p-2
//                   shadow-[0_12px_35px_rgba(38,54,77,0.06)]
//                   transition-all
//                   duration-500
//                   hover:-translate-y-1
//                   hover:shadow-[0_20px_45px_rgba(38,54,77,0.10)]
//                 "
//               >

//                 <div className="relative h-[280px] overflow-hidden rounded-[18px] sm:h-[280px]">

//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="
//                       object-cover
//                       transition-transform
//                       duration-700
//                       group-hover:scale-105
//                     "
//                   />


//                   {/* Image gradient */}

//                   <div
//                     className="
//                       absolute
//                       inset-x-0
//                       bottom-0
//                       h-28
//                       bg-gradient-to-t
//                       from-[#334155]/55
//                       to-transparent
//                     "
//                   />


//                   {/* Number */}

//                   <div
//                     className="
//                       absolute
//                       left-4
//                       top-4
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-white/50
//                       bg-white/90
//                       text-xs
//                       font-black
//                       text-[#2563EB]
//                       shadow-sm
//                       backdrop-blur-md
//                     "
//                   >
//                     0{index + 1}
//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

// </div>
//       </section>


//       {/* =========================================================
//           GET IN TOUCH
//       ========================================================== */}

//       <GetInTouch />

//     </main>
//   );
// }


// /* =============================================================
//    GET IN TOUCH
// ============================================================= */

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

//       {/* Soft background glows */}

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
//               LEFT CONTENT
//           ================================================= */}

//           <div>

//             <div className="flex items-center gap-3">

//               <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

//               <span
//                 className="
//                   text-[10px]
//                   font-black
//                   uppercase
//                   tracking-[0.2em]
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
//               Let&apos;s build your{" "}

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
//                 Flashline EMS is aninnovativeAI driven electronics
//                 manufacturing service (EMS) partner to leading OEMs,
//                 offering high-quality design, prototype, and full-scale
//                 production for anysorts of complex printed circuit boards
//                 assemblies. Flashline EMS has years of experience in the
//                 industry, resulting in vast expertise in printed circuit
//                 board manufacturing, assembly and Box build.
//               </p>


//               <p>
//                 Flashline EMS is over 100,000 square feet state of art,
//                 brand new manufacturing facility with capacity to grow
//                 over 10 SMT lines aimed to serve prototype to high-mix
//                 volume for the customers globally.
//               </p>

//             </div>

//           </div>


//           {/* =================================================
//               FORM
//           ================================================= */}

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

//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
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

//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
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

//                   <span className="ml-1 text-[#F15A24]">
//                     *
//                   </span>
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
//                   htmlFor="box-build-file"
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


//                   <span className="mt-1 text-sm font-bold text-[#2563EB]">
//                     Choose Files
//                   </span>


//                   <input
//                     id="box-build-file"
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
                    Detailed information about Box Build Service,
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