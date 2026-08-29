// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Box,
//   Factory,
//   Layers3,
//   PencilRuler,
// } from "lucide-react";

// export function HeroSection() {
//   return (
//     <section className="relative isolate min-h-[600px] overflow-hidden bg-[#020d1d] text-white lg:min-h-[600px]">
//       {/* =========================================================
//           BACKGROUND IMAGE
//       ========================================================== */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src="/heroimage.png"
//           alt=""
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />
//       </div>

//       {/* =========================================================
//           DARK OVERLAY
//           Stronger on left, transparent on right
//       ========================================================== */}
//       <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(1,12,27,0.98)_0%,rgba(1,12,27,0.94)_28%,rgba(1,12,27,0.72)_48%,rgba(1,12,27,0.25)_72%,rgba(1,12,27,0.05)_100%)]" />

//       {/* Bottom blending */}
//       <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#020d1d]/80 to-transparent" />

//       {/* =========================================================
//           HERO CONTAINER
//       ========================================================== */}
//       <div className="mx-auto flex min-h-[720px] w-full max-w-[1600px] items-center px-6 lg:px-16 xl:px-20">
//         <div className="relative w-full">
//           {/* =====================================================
//               MAIN CONTENT
//           ====================================================== */}
//           <div className="relative z-20 w-full max-w-[650px] pt-10 lg:pt-2">
//             {/* BADGE */}
//             <div className="inline-flex items-center gap-3 rounded-full border border-[#f4511e]/70 bg-[#03172c]/70 px-4 py-2.5 backdrop-blur-md">
//               <span className="relative flex h-3 w-3 shrink-0">
//                 <span className="absolute inset-0 animate-ping rounded-full bg-[#f4511e]/60" />

//                 <span className="relative h-3 w-3 rounded-full bg-[#f4511e]" />
//               </span>

//               <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff7544]">
//                 End-to-End Electronics Manufacturing
//               </span>
//             </div>

//             {/* HEADING */}
//             <h1 className="mt-7 max-w-[650px] text-[54px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[62px] lg:text-[64px] xl:text-[66px]">
//               <span className="block whitespace-nowrap">
//                 PCB Fabrication to
//               </span>

//               <span className="mt-2 block whitespace-nowrap text-[#f4511e]">
//                 Box Build - Turnkey
//               </span>

//               <span className="mt-2 block">
//                 Services
//               </span>
//             </h1>

//             {/* DECORATIVE LINES */}
//             <div className="mt-7 flex items-center gap-2">
//               <span className="h-[3px] w-8 rounded-full bg-[#f4511e]" />
//               <span className="h-[3px] w-5 rounded-full bg-[#f4511e]/70" />
//               <span className="h-[3px] w-7 rounded-full bg-[#1597e5]" />
//               <span className="h-[3px] w-3 rounded-full bg-[#1597e5]/60" />
//             </div>

//             {/* DESCRIPTION */}
//             <p className="mt-7 max-w-[610px] text-[15px] font-normal leading-[1.9] text-slate-200/90 sm:text-[18px]">
//               Flashline EMS provides a comprehensive set of services that
//               span the whole product development lifecycle. We go beyond PC
//               boards to complete your product assembly through our complex
//               box build capabilities.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-8 flex items-center gap-5">
//               <Link
//                 href="/box-build"
//                 className="group inline-flex h-[60px] items-center justify-center gap-4 rounded-lg bg-[#f4511e] px-8 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(244,81,30,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff6428]"
//               >
//                 <span>Read more</span>

//                 <ArrowRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/quick-quote"
//                 className="group inline-flex h-[60px] items-center justify-center gap-4 rounded-lg border border-white/50 bg-[#061426]/45 px-8 text-[15px] font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
//               >
//                 <span>Quick Quote</span>

//                 <ArrowUpRight
//                   size={20}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

            

//             {/* SERVICE TYPES */}
//             <div className="mt-10 flex items-center">

//                   {/* ENGINEERING DESIGN */}
//               <div className="flex items-center gap-2.5 pr-5">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1597e5]/60 bg-[#1597e5]/10 text-[#1597e5]">
//                   <PencilRuler size={19} strokeWidth={1.6} />
//                 </div>

//                 <div className="leading-tight">
//                   <div className="text-[14px] font-bold text-white">
//                     Engineering
//                   </div>

//                   <div className="mt-1 text-[12px] text-white/85">
//                     Design
//                   </div>
//                 </div>
//               </div>

//               {/* DIVIDER */}
//               <div className="h-9 w-px bg-white/25" />
                
//               {/* PCB FABRICATION */}
//               <div className="flex items-center gap-3 px-7">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#f4511e]/60 bg-[#f4511e]/10 text-[#f4511e]">
//                   <Factory size={20} strokeWidth={1.6} />
//                 </div>

//                 <div className="leading-tight">
//                   <div className="text-[15px] font-bold text-white">
//                     PCB
//                   </div>

//                   <div className="mt-1 text-[13px] text-white/85">
//                     Fabrication
//                   </div>
//                 </div>
//               </div>

//               {/* DIVIDER */}
//               <div className="h-10 w-px bg-white/25" />

//               {/* PCB ASSEMBLY */}
//               <div className="flex items-center gap-3 px-7">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1597e5]/60 bg-[#1597e5]/10 text-[#1597e5]">
//                   <Layers3 size={20} strokeWidth={1.6} />
//                 </div>

//                 <div className="leading-tight">
//                   <div className="text-[15px] font-bold text-white">
//                     PCB
//                   </div>

//                   <div className="mt-1 text-[13px] text-white/85">
//                     Assembly
//                   </div>
//                 </div>
//               </div>

//               {/* DIVIDER */}
//               <div className="h-10 w-px bg-white/25" />

//               {/* BOX BUILD */}
//               <div className="flex items-center gap-3 pl-7">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#f4511e]/60 bg-[#f4511e]/10 text-[#f4511e]">
//                   <Box size={20} strokeWidth={1.6} />
//                 </div>

//                 <div className="leading-tight">
//                   <div className="text-[15px] font-bold text-white">
//                     Box
//                   </div>

//                   <div className="mt-1 text-[13px] text-white/85">
//                     Build
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               40+ STAT
//           ====================================================== */}
//           <div className="pointer-events-none absolute left-[66%] top-[6%] z-30 hidden lg:block">
//             <div className="flex min-w-[195px] items-center gap-4 rounded-2xl border border-[#1597e5]/60 bg-[#05254a]/85 px-5 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-md">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1597e5]/50 bg-[#1597e5]/10 text-[#67c7ff]">
//                 <Factory size={20} />
//               </div>

//               <div>
//                 <div className="text-[29px] font-black leading-none">
//                   40+
//                 </div>

//                 <div className="mt-2 whitespace-nowrap text-[12px] font-medium text-blue-100">
//                   Years of Expertise
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               100K STAT
//           ====================================================== */}
//           <div className="pointer-events-none absolute right-[3%] top-[15%] z-30 hidden lg:block">
//             <div className="flex min-w-[195px] items-center gap-4 rounded-2xl border border-[#f4511e]/65 bg-[#351a18]/85 px-5 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-md">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#f4511e]/50 bg-[#f4511e]/10 text-[#ff936e]">
//                 <Factory size={20} />
//               </div>

//               <div>
//                 <div className="text-[29px] font-black leading-none">
//                   100K+
//                 </div>

//                 <div className="mt-2 whitespace-nowrap text-[12px] font-medium text-orange-100">
//                   Sq. Ft. Facility
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Factory,
  Layers3,
  PencilRuler,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-[#F7F9FC] text-[#14233B] lg:min-h-[600px]">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/imageforhero.png"
          alt="Electronics manufacturing and PCB technology"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          LIGHT OVERLAY
          Strong white area on left → image visible on right
      ========================================================== */}
      <div
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(90deg,
          rgba(255,255,255,0.99)_0%,
          rgba(255,255,255,0.97)_25%,
          rgba(255,255,255,0.91)_43%,
          rgba(255,255,255,0.72)_57%,
          rgba(255,255,255,0.32)_74%,
          rgba(255,255,255,0.08)_100%)]
        "
      />

      {/* =========================================================
          SOFT WHITE / BLUE BLEND
      ========================================================== */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_50%,rgba(37,99,235,0.06),transparent_34%)]" />

      {/* =========================================================
          SUBTLE BOTTOM BLEND
      ========================================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-32
          bg-gradient-to-t
          from-[#F7F9FC]
          to-transparent
        "
      />

      {/* =========================================================
          HERO CONTAINER
      ========================================================== */}
      <div className="mx-auto flex min-h-[720px] w-full max-w-[1600px] items-center px-6 lg:px-16 xl:px-20">

        <div className="relative w-full">

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="relative z-20 w-full max-w-[650px] pt-10 lg:pt-2">

            {/* =================================================
                BADGE
            ================================================== */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#F15A24]/20
                bg-white/90
                px-4
                py-2.5
                shadow-[0_6px_20px_rgba(20,35,59,0.05)]
                backdrop-blur-md
              "
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#F15A24]/30" />

                <span className="relative h-3 w-3 rounded-full bg-[#F15A24]" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E95420]">
                End-to-End Electronics Manufacturing
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}
            <h1
              className="
                mt-7
                max-w-[650px]
                text-[54px]
                font-black
                leading-[0.98]
                tracking-[-0.045em]
                text-[#14233B]
                sm:text-[62px]
                lg:text-[64px]
                xl:text-[66px]
              "
            >
              <span className="block whitespace-nowrap">
                PCB Fabrication to
              </span>

              <span
                className="
                  mt-2
                  block
                  whitespace-nowrap
                  text-[#F15A24]
                "
              >
                Box Build - Turnkey
              </span>

              <span className="mt-2 block">
                Services
              </span>
            </h1>

            {/* =================================================
                DECORATIVE LINES
            ================================================== */}
            <div className="mt-7 flex items-center gap-2">
              <span className="h-[3px] w-8 rounded-full bg-[#F15A24]" />
              <span className="h-[3px] w-5 rounded-full bg-[#F15A24]/45" />
              <span className="h-[3px] w-7 rounded-full bg-[#2563EB]" />
              <span className="h-[3px] w-3 rounded-full bg-[#2563EB]/50" />
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-7
                max-w-[610px]
                text-[15px]
                font-normal
                leading-[1.9]
                text-[#596B82]
                sm:text-[18px]
              "
            >
              Flashline EMS provides a comprehensive set of services that
              span the whole product development lifecycle. We go beyond PC
              boards to complete your product assembly through our complex
              box build capabilities.
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <div className="mt-8 flex items-center gap-5">

              {/* READ MORE */}
              <Link
                href="/box-build"
                className="
                  group
                  inline-flex
                  h-[60px]
                  items-center
                  justify-center
                  gap-4
                  rounded-lg
                  bg-[#F15A24]
                  px-8
                  text-[15px]
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(241,90,36,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E64A19]
                  hover:shadow-[0_16px_34px_rgba(241,90,36,0.24)]
                "
              >
                <span>Read more</span>

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* QUICK QUOTE */}
              <Link
                href="/quick-quote"
                className="
                  group
                  inline-flex
                  h-[60px]
                  items-center
                  justify-center
                  gap-4
                  rounded-lg
                  border
                  border-[#2563EB]/25
                  bg-white/90
                  px-8
                  text-[15px]
                  font-bold
                  text-[#2563EB]
                  shadow-[0_8px_25px_rgba(20,35,59,0.05)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2563EB]/50
                  hover:bg-[#EFF6FF]
                "
              >
                <span>Quick Quote</span>

                <ArrowUpRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* =================================================
                SERVICE TYPES
            ================================================== */}
            <div
              className="
                mt-10
                flex
                items-center
                rounded-xl
                border
                border-white/80
                bg-white/75
                py-2.5
                shadow-[0_10px_30px_rgba(20,35,59,0.05)]
                backdrop-blur-md
              "
            >

              {/* ===============================================
                  ENGINEERING DESIGN
              ================================================ */}
              <div className="flex flex-1 items-center gap-2.5 px-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#2563EB]/15
                    bg-[#EFF6FF]
                    text-[#2563EB]
                  "
                >
                  <PencilRuler
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-[14px] font-bold text-[#14233B]">
                    Engineering
                  </div>

                  <div className="mt-1 text-[12px] text-[#64748B]">
                    Design
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#DCE3EC]" />

              {/* ===============================================
                  PCB FABRICATION
              ================================================ */}
              <div className="flex flex-1 items-center gap-3 px-5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#F15A24]/15
                    bg-[#FFF4ED]
                    text-[#EA580C]
                  "
                >
                  <Factory
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-[15px] font-bold text-[#14233B]">
                    PCB
                  </div>

                  <div className="mt-1 text-[13px] text-[#64748B]">
                    Fabrication
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#DCE3EC]" />

              {/* ===============================================
                  PCB ASSEMBLY
              ================================================ */}
              <div className="flex flex-1 items-center gap-3 px-5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#3B82F6]/15
                    bg-[#EFF6FF]
                    text-[#3B82F6]
                  "
                >
                  <Layers3
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-[15px] font-bold text-[#14233B]">
                    PCB
                  </div>

                  <div className="mt-1 text-[13px] text-[#64748B]">
                    Assembly
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#DCE3EC]" />

              {/* ===============================================
                  BOX BUILD
              ================================================ */}
              <div className="flex flex-1 items-center gap-3 pl-5 pr-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#8B5CF6]/15
                    bg-[#F5F3FF]
                    text-[#7C3AED]
                  "
                >
                  <Box
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-[15px] font-bold text-[#14233B]">
                    Box
                  </div>

                  <div className="mt-1 text-[13px] text-[#64748B]">
                    Build
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              40+ STAT CARD
          ====================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              left-[66%]
              top-[6%]
              z-30
              hidden
              lg:block
            "
          >
            <div
              className="
                flex
                min-w-[200px]
                items-center
                gap-4
                rounded-2xl
                border
                border-[#2563EB]/10
                bg-white/95
                px-5
                py-4
                shadow-[0_15px_40px_rgba(20,35,59,0.10)]
                backdrop-blur-md
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#2563EB]/10
                  bg-[#EFF6FF]
                  text-[#2563EB]
                "
              >
                <Factory
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <div className="text-[29px] font-black leading-none text-[#14233B]">
                  40+
                </div>

                <div className="mt-2 whitespace-nowrap text-[12px] font-medium text-[#64748B]">
                  Years of Expertise
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              100K STAT CARD
          ====================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              right-[3%]
              top-[15%]
              z-30
              hidden
              lg:block
            "
          >
            <div
              className="
                flex
                min-w-[200px]
                items-center
                gap-4
                rounded-2xl
                border
                border-[#F15A24]/10
                bg-white/95
                px-5
                py-4
                shadow-[0_15px_40px_rgba(20,35,59,0.10)]
                backdrop-blur-md
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#F15A24]/10
                  bg-[#FFF4ED]
                  text-[#EA580C]
                "
              >
                <Factory
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <div className="text-[29px] font-black leading-none text-[#14233B]">
                  100K+
                </div>

                <div className="mt-2 whitespace-nowrap text-[12px] font-medium text-[#64748B]">
                  Sq. Ft. Facility
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}