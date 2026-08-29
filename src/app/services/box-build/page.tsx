// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowDown, ArrowRight, Upload } from "lucide-react";
// import { TopBar } from "../../../../components/layout/top-bar";
// import { Header } from "../../../../components/layout/header";


// const boxBuildContent = {
//   title: "BOX BUILD",
//   description: `When it comes to boxing build assembly, there is such a vast range of products that varies from person to person. It can be as basic as putting electronic systems into simple enclosures with interfaces or displays. It can be as complex as system integrations with thousands of separate components or sub-assemblies. We offer box build integration assembly for sub-systems and modules and full product integration to printed circuit board assembly (PCBA) and support you from beginning to end, from quotation to mass manufacturing, through our network of preferred suppliers. Our teams dedicated to your product are essential ingredients for a smooth market entry.`,
// };

// const boxBuildImages = [
//   {
//     src: "/boxbuild-1.png",
//     alt: "Box build electronic system",
//   },
//   {
//     src: "/boxbuild-2.png",
//     alt: "Box build assembly",
//   },
//   {
//     src: "/boxbuild-3.png",
//     alt: "Box build product integration",
//   },
// ];

// export default function BoxBuildPage() {
//   return (
//     <>
//       {/* TOP BAR + HEADER */}
//       <TopBar />
//       <Header />

//       <main className="overflow-hidden bg-white">

//         {/* =====================================================
//             BOX BUILD INTRODUCTION
//         ====================================================== */}

//         <section className="mt-32 bg-white pb-20 pt-20 lg:pb-24 lg:pt-24">
//           <div className="mx-auto max-w-[1500px] px-6 lg:px-16">

//             <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">

//               {/* LEFT - CONTENT */}
//               <div className="pt-2">

//                 <h1 className="text-3xl font-bold tracking-[0.04em] text-[#F4511E] sm:text-4xl">
//                   {boxBuildContent.title}
//                 </h1>

//                 <p className="mt-8 text-[18px] leading-[1.9] text-black sm:text-[19px]">
//                   {boxBuildContent.description}
//                 </p>

//               </div>

//               {/* RIGHT - VISUAL */}
//               <div className="relative">

//                 <div className="relative h-[340px] w-full overflow-hidden border border-slate-300 bg-slate-100 lg:h-[390px]">
//                   <Image
//                     src="/boxbuild-1.png"
//                     alt="Box build electronic system"
//                     fill
//                     priority
//                     className="object-cover transition duration-700 hover:scale-105"
//                   />
//                 </div>

//               </div>

//             </div>
//           </div>
//         </section>


//         {/* =====================================================
//             BOX BUILD IMAGES
//         ====================================================== */}

//         <section className="bg-white py-20 lg:py-24">
//           <div className="mx-auto max-w-[1500px] px-6 lg:px-16">

//             <div className="mb-12">
//               <h2 className="text-3xl font-bold tracking-[0.05em] text-[#F4511E] sm:text-4xl">
//                 Box Build Integration
//               </h2>

//               <p className="mt-5 max-w-3xl text-[17px] leading-8 text-black sm:text-[18px]">
//                 From component integration to complete product assembly,
//                 Flashline EMS provides reliable box build manufacturing and
//                 system integration support.
//               </p>
//             </div>


//             {/* IMAGE GRID */}
//             <div className="grid gap-8 md:grid-cols-3">

//               {boxBuildImages.map((image, index) => (
//                 <div
//                   key={image.src}
//                   className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
//                 >

//                   <div className="relative h-[300px] overflow-hidden sm:h-[330px]">
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       fill
//                       className="object-cover transition duration-700 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* NUMBER */}
//                   <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#F4511E] shadow">
//                     0{index + 1}
//                   </div>

//                 </div>
//               ))}

//             </div>


//             {/* EXPLORE INDICATOR */}
//             <div className="mt-12 flex justify-center">
//               <div className="flex flex-col items-center gap-2 text-[#F4511E]">
//                 <span className="text-xs font-semibold uppercase tracking-[0.18em]">
//                   Explore
//                 </span>

//                 <ArrowDown size={22} strokeWidth={1.8} />
//               </div>
//             </div>

//           </div>
//         </section>


//         {/* =====================================================
//             GET IN TOUCH
//         ====================================================== */}

//         <GetInTouch />

//       </main>
//     </>
//   );
// }


// /* =============================================================
//    GET IN TOUCH
// ============================================================= */

// function GetInTouch() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 lg:py-28">

//       {/* SOFT ORANGE BACKGROUND SHAPES */}
//       <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[720px] rotate-[20deg] bg-[#F4511E]/10" />

//       <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[720px] rotate-[-20deg] bg-[#F4511E]/10" />


//       <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">

//         <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">


//           {/* =================================================
//               LEFT CONTENT
//           ================================================= */}

//           <div className="pt-4">

//             <h2 className="text-3xl font-bold text-[#F4511E] sm:text-4xl">
//               GET IN TOUCH
//             </h2>


//             <div className="mt-7 space-y-6 text-[16px] leading-[1.8] text-slate-500">

//               <p>
//                 Flashline EMS is aninnovativeAI driven electronics
//                 manufacturing service (EMS) partner to leading OEMs, offering
//                 high-quality design, prototype, and full-scale production for
//                 anysorts of complex printed circuit boards assemblies.
//                 Flashline EMS has years of experience in the industry,
//                 resulting in vast expertise in printed circuit board
//                 manufacturing, assembly and Box build.
//               </p>


//               <p>
//                 Flashline EMS is over 100,000 square feet state of art, brand
//                 new manufacturing facility with capacity to grow over 10 SMT
//                 lines aimed to serve prototype to high-mix volume for the
//                 customers globally.
//               </p>

//             </div>

//           </div>


//           {/* =================================================
//               FORM
//           ================================================= */}

//           <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_5px_20px_rgba(0,0,0,0.15)] sm:p-9">

//             <form className="space-y-5">


//               {/* FIRST NAME */}
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="mb-2 block text-sm font-medium text-[#062D82]"
//                 >
//                   First Name{" "}
//                   <span className="text-[#F4511E]">*</span>
//                 </label>

//                 <input
//                   id="first-name"
//                   type="text"
//                   placeholder="E.g. John"
//                   className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/10"
//                 />
//               </div>


//               {/* EMAIL */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-medium text-[#062D82]"
//                 >
//                   Email Address{" "}
//                   <span className="text-[#F4511E]">*</span>
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="E.g. john@doe.com"
//                   className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/10"
//                 />
//               </div>


//               {/* PHONE */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="mb-2 block text-sm font-medium text-[#062D82]"
//                 >
//                   Phone Number{" "}
//                   <span className="text-[#F4511E]">*</span>
//                 </label>

//                 <input
//                   id="phone"
//                   type="tel"
//                   placeholder="E.g. +1 3004005000"
//                   className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/10"
//                 />
//               </div>


//               {/* MESSAGE */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-2 block text-sm font-medium text-[#062D82]"
//                 >
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   maxLength={180}
//                   rows={5}
//                   placeholder="Enter your message..."
//                   className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/10"
//                 />

//                 <div className="mt-1 text-right text-xs text-slate-400">
//                   0 / 180
//                 </div>
//               </div>


//               {/* UPLOAD */}
//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#062D82]">
//                   Upload file
//                 </label>

//                 <label
//                   htmlFor="box-build-file"
//                   className="flex h-[95px] cursor-pointer flex-col items-center justify-center border border-dashed border-slate-400 transition hover:border-[#F4511E]"
//                 >

//                   <Upload
//                     size={25}
//                     className="text-slate-500"
//                   />

//                   <span className="mt-2 text-sm text-slate-500">
//                     Drag and Drop (or)
//                     <span className="ml-1 font-semibold text-[#062D82]">
//                       Choose Files
//                     </span>
//                   </span>

//                   <input
//                     id="box-build-file"
//                     type="file"
//                     className="hidden"
//                   />

//                 </label>

//               </div>


//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-[#F4511E] px-7 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-[#d94316]"
//               >
//                 Submit

//                 <ArrowRight size={17} />
//               </button>

//             </form>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

const boxBuildContent = {
  title: "Box Build",
  description: `When it comes to boxing build assembly, there is such a vast range of products that varies from person to person. It can be as basic as putting electronic systems into simple enclosures with interfaces or displays. It can be as complex as system integrations with thousands of separate components or sub-assemblies. We offer box build integration assembly for sub-systems and modules and full product integration to printed circuit board assembly (PCBA) and support you from beginning to end, from quotation to mass manufacturing, through our network of preferred suppliers. Our teams dedicated to your product are essential ingredients for a smooth market entry.`,
};

const boxBuildImages = [
  {
     src: "/box-build/ecg.png",
    alt: "Box build electronic system",
  },
  {
    src: "/box-build/image.png",
    alt: "Box build assembly",
  },
  {
    src: "/box-build/camera.png",
    alt: "Box build product integration",
  },
];

export default function BoxBuildPage() {
  return (
    <main className="overflow-hidden bg-[#F7F9FC] text-[#334155]">

      {/* =========================================================
          BOX BUILD
      ========================================================== */}

      <section className="relative mt-20 overflow-hidden bg-white py-20 lg:py-28">

        {/* Soft background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#F15A24]/[0.035]
            blur-[110px]
          "
        />

        <div className="container-flashline relative">

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="order-2 lg:order-1">

              {/* Eyebrow */}

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#F15A24]
                  "
                >
                  Manufacturing Capability
                </span>

              </div>


              {/* Heading */}

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#334155]
                  sm:text-5xl
                "
              >
                Box{" "}

                <span className="text-[#F15A24]">
                  Build
                </span>
              </h1>


              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  leading-8
                  text-[#64748B]
                  sm:text-[16px]
                "
              >
                {boxBuildContent.description}
              </p>


              {/* Existing content presented as key points */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "System integration",
                  "Sub-system and module integration",
                  "Full product integration",
                  "Mass manufacturing",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-[#475569]
                    "
                  >

                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#F15A24]"
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="order-1 lg:order-2">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  p-2
                  shadow-[0_20px_55px_rgba(38,54,77,0.09)]
                "
              >

                {/* Decorative corners */}

                <div
                  className="
                    absolute
                    -left-1
                    -top-1
                    h-20
                    w-20
                    rounded-tl-[24px]
                    border-l-2
                    border-t-2
                    border-[#F15A24]/50
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-1
                    -right-1
                    h-20
                    w-20
                    rounded-br-[24px]
                    border-b-2
                    border-r-2
                    border-[#2563EB]/40
                  "
                />


                <div className="relative overflow-hidden rounded-[18px]">

                <Image
  src="/box-build/boxbuildimage.png"
  alt="Box build electronic system"
  width={1200}
  height={700}
  priority
  className="
    h-[340px]
    w-full
    object-cover
    transition-transform
    duration-700
    hover:scale-105
    lg:h-[440px]
  "
/>


                  {/* Image overlay */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-32
                      bg-gradient-to-t
                      from-[#334155]/60
                      to-transparent
                    "
                  />


                  {/* Image label */}

                  <div className="absolute bottom-5 left-5">

                    <div
                      className="
                        inline-flex
                        rounded-full
                        bg-white/90
                        px-3
                        py-1.5
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#2563EB]
                        backdrop-blur-md
                      "
                    >
                      Flashline EMS
                    </div>

                    <div className="mt-2 text-xl font-black text-white">
                      Box Build
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BOX BUILD IMAGES
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F7F9FC] py-20 lg:py-28">

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[120px]
          "
        />

        <div className="container-flashline relative">

          {/* Section heading */}

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#F15A24]
                "
              >
                Box Build
              </span>

            </div>


            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-[#334155]
                sm:text-5xl
              "
            >
              Box Build{" "}

              <span className="text-[#F15A24]">
                Integration
              </span>
            </h2>


            <p
              className="
                mt-6
                max-w-3xl
                text-[15px]
                leading-8
                text-[#64748B]
                sm:text-[16px]
              "
            >
              From component integration to complete product assembly,
              Flashline EMS provides reliable box build manufacturing and
              system integration support.
            </p>

          </div>


          {/* =================================================
              IMAGE GRID
          ================================================= */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {boxBuildImages.map((image, index) => (

              <div
                key={image.src}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#E2E8F0]
                  bg-white
                  p-2
                  shadow-[0_12px_35px_rgba(38,54,77,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(38,54,77,0.10)]
                "
              >

                <div className="relative h-[280px] overflow-hidden rounded-[18px] sm:h-[280px]">

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />


                  {/* Image gradient */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-28
                      bg-gradient-to-t
                      from-[#334155]/55
                      to-transparent
                    "
                  />


                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/50
                      bg-white/90
                      text-xs
                      font-black
                      text-[#2563EB]
                      shadow-sm
                      backdrop-blur-md
                    "
                  >
                    0{index + 1}
                  </div>

                </div>

              </div>

            ))}

          </div>

</div>
      </section>


      {/* =========================================================
          GET IN TOUCH
      ========================================================== */}

      <GetInTouch />

    </main>
  );
}


/* =============================================================
   GET IN TOUCH
============================================================= */

function GetInTouch() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        lg:py-28
      "
    >

      {/* Soft background glows */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F15A24]/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#2563EB]/[0.035]
          blur-[120px]
        "
      />


      <div className="container-flashline relative">

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#F15A24]
                "
              >
                Get In Touch
              </span>

            </div>


            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-[#334155]
                sm:text-5xl
              "
            >
              Let&apos;s build your{" "}

              <span className="block text-[#F15A24]">
                next solution.
              </span>
            </h2>


            <div
              className="
                mt-7
                space-y-6
                text-[15px]
                leading-8
                text-[#64748B]
              "
            >

              <p>
                Flashline EMS is aninnovativeAI driven electronics
                manufacturing service (EMS) partner to leading OEMs,
                offering high-quality design, prototype, and full-scale
                production for anysorts of complex printed circuit boards
                assemblies. Flashline EMS has years of experience in the
                industry, resulting in vast expertise in printed circuit
                board manufacturing, assembly and Box build.
              </p>


              <p>
                Flashline EMS is over 100,000 square feet state of art,
                brand new manufacturing facility with capacity to grow
                over 10 SMT lines aimed to serve prototype to high-mix
                volume for the customers globally.
              </p>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#E2E8F0]
              bg-white
              p-7
              shadow-[0_15px_50px_rgba(38,54,77,0.07)]
              sm:p-9
              lg:p-10
            "
          >

            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-[#F15A24]
                via-[#2563EB]
                to-[#F15A24]
              "
            />


            <form className="space-y-6">

              {/* First Name */}

              <div>

                <label
                  htmlFor="first-name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#475569]
                  "
                >
                  First Name

                  <span className="ml-1 text-[#F15A24]">
                    *
                  </span>
                </label>


                <input
                  id="first-name"
                  type="text"
                  placeholder="E.g. John"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-[#CBD5E1]
                    bg-[#FCFDFE]
                    px-4
                    text-sm
                    text-[#334155]
                    outline-none
                    transition
                    placeholder:text-[#94A3B8]
                    focus:border-[#2563EB]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2563EB]/[0.08]
                  "
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#475569]
                  "
                >
                  Email Address

                  <span className="ml-1 text-[#F15A24]">
                    *
                  </span>
                </label>


                <input
                  id="email"
                  type="email"
                  placeholder="E.g. john@doe.com"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-[#CBD5E1]
                    bg-[#FCFDFE]
                    px-4
                    text-sm
                    text-[#334155]
                    outline-none
                    transition
                    placeholder:text-[#94A3B8]
                    focus:border-[#2563EB]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2563EB]/[0.08]
                  "
                />

              </div>


              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#475569]
                  "
                >
                  Phone Number

                  <span className="ml-1 text-[#F15A24]">
                    *
                  </span>
                </label>


                <input
                  id="phone"
                  type="tel"
                  placeholder="E.g. +1 3004005000"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-[#CBD5E1]
                    bg-[#FCFDFE]
                    px-4
                    text-sm
                    text-[#334155]
                    outline-none
                    transition
                    placeholder:text-[#94A3B8]
                    focus:border-[#2563EB]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2563EB]/[0.08]
                  "
                />

              </div>


              {/* Message */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="message"
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#475569]
                    "
                  >
                    Message
                  </label>

                  <span className="text-xs text-[#94A3B8]">
                    0 / 180
                  </span>

                </div>


                <textarea
                  id="message"
                  maxLength={180}
                  rows={5}
                  placeholder="Enter your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#CBD5E1]
                    bg-[#FCFDFE]
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-[#334155]
                    outline-none
                    transition
                    placeholder:text-[#94A3B8]
                    focus:border-[#2563EB]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2563EB]/[0.08]
                  "
                />

              </div>


              {/* Upload */}

              <div>

                <label
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#475569]
                  "
                >
                  Upload File
                </label>


                <label
                  htmlFor="box-build-file"
                  className="
                    group
                    flex
                    min-h-[125px]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-dashed
                    border-[#CBD5E1]
                    bg-[#FAFBFD]
                    transition-all
                    duration-300
                    hover:border-[#2563EB]/40
                    hover:bg-[#EFF6FF]/40
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EFF6FF]
                      text-[#2563EB]
                      transition
                      group-hover:bg-[#FFF4ED]
                      group-hover:text-[#F15A24]
                    "
                  >
                    <Upload size={20} />
                  </div>


                  <span className="mt-3 text-sm text-[#64748B]">
                    Drag and Drop (or)
                  </span>


                  <span className="mt-1 text-sm font-bold text-[#2563EB]">
                    Choose Files
                  </span>


                  <input
                    id="box-build-file"
                    type="file"
                    className="hidden"
                  />

                </label>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#F15A24]
                  px-8
                  text-sm
                  font-black
                  text-white
                  shadow-[0_12px_30px_rgba(241,90,36,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E64A19]
                  hover:shadow-[0_15px_35px_rgba(241,90,36,0.24)]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#F15A24]/20
                "
              >
                Submit

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}