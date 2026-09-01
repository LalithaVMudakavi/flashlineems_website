// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { TopBar } from "../../../../../components/layout/top-bar";
// import { Header } from "../../../../../components/layout/header";


// /* =========================================================
//    TYPES
// ========================================================= */

// type SpecificationRow = {
//   description: string;
//   production: string;
//   advanced: string;
// };

// type SpecificationSection = {
//   title: string;
//   rows: SpecificationRow[];
// };


// /* =========================================================
//    HDI PCB DATA
// ========================================================= */

// const specificationSections: SpecificationSection[] = [
//   {
//     title: "HDI PCB",
//     rows: [
//       {
//         description: "Layer Count",
//         production: "2~42L",
//         advanced: "50L",
//       },
//       {
//         description: "Min. Board thickness",
//         production: '0.005" (+/-10%)',
//         advanced: '0.005" (+/-10%)',
//       },
//       {
//         description: "Max. Board thickness",
//         production: '0.250" (+/-10%)',
//         advanced: '0.280" (+/-8%)',
//       },
//       {
//         description: "BGA Pitch",
//         production: "10mils (0.25mm)",
//         advanced: "7mils (0.175mm)",
//       },
//       {
//         description: "Min.BGA pad/space",
//         production: "7mils/3mils",
//         advanced: "5mils/2mils",
//       },
//     ],
//   },

//   {
//     title: "Materials for build up",
//     rows: [
//       {
//         description: "Prepreg (FR4 1067/1086/2113)",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "Prepreg (ceramics Ro4350)",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "Laser Drillable Prepreg",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "laser Drillable core (FR4, PI, PTFE, ceramics)",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "laser Drillable Min.Dielectric thickness",
//         production: "1.5mils",
//         advanced: "1.5mils",
//       },
//       {
//         description: "laser Drillable Max.Dielectric thickness",
//         production: "5mils",
//         advanced: "6mils",
//       },
//     ],
//   },

//   {
//     title: "Laser Via",
//     rows: [
//       {
//         description: "Min / Max",
//         production: "2.5mils / 6mils",
//         advanced: "2mils / 6mils",
//       },
//       {
//         description: "Min via edge to via edge space",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "True position Tolerance",
//         production: "+/-1mils",
//         advanced: "+/-1mils",
//       },
//     ],
//   },

//   {
//     title: "Drilling",
//     rows: [
//       {
//         description: "Min. Drilled blind via diameter (as drilled)",
//         production: "10mils",
//         advanced: "8mils",
//       },
//       {
//         description: "Min via edge to via edge space (as drilled)",
//         production: "8mils",
//         advanced: "6mils",
//       },
//     ],
//   },

//   {
//     title: "PTH Design",
//     rows: [
//       {
//         description:
//           "Blind via aspect ratio (dielectric thickness/ Laser drill hole size)",
//         production: "0.8",
//         advanced: "1",
//       },
//       {
//         description: "Blind via plating thickness",
//         production: "0.3~1mils",
//         advanced: "0.3~1mils",
//       },
//       {
//         description: "Capture pad A/R",
//         production: "2mils",
//         advanced: "1.5mils",
//       },
//       {
//         description: "Laser via Fill Material",
//         production: "Epoxy resin/Copper paste",
//         advanced: "Epoxy resin/Copper paste",
//       },
//       {
//         description:
//           "Blind via aspect ratio (as drilled) (dielectric thickness/ drilling hole size)",
//         production: "0.5",
//         advanced: "0.5",
//       },
//       {
//         description: "Blind via plating thickness (as drilled)",
//         production: "0.5mils",
//         advanced: "0.8mils",
//       },
//       {
//         description: "Capture pad A/R (as drilled)",
//         production: "4mils",
//         advanced: "3mils",
//       },
//     ],
//   },
// ];


// /* =========================================================
//    TABLE COMPONENT
// ========================================================= */

// function SpecificationTable({
//   rows,
// }: {
//   rows: SpecificationRow[];
// }) {
//   return (
//     <div className="overflow-x-auto rounded-xl border border-[#E2E8F0] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

//       <table className="w-full min-w-[760px] border-collapse">

//         <thead>
//           <tr className="bg-[#F8FAFC]">

//             <th
//               className="
//                 w-[52%]
//                 border-b
//                 border-[#E2E8F0]
//                 px-5
//                 py-4
//                 text-left
//                 text-sm
//                 font-bold
//                 text-[#334155]
//                 sm:px-6
//               "
//             >
//               Description
//             </th>

//             <th
//               className="
//                 w-[24%]
//                 border-b
//                 border-l
//                 border-[#E2E8F0]
//                 px-5
//                 py-4
//                 text-left
//                 text-sm
//                 font-bold
//                 text-[#334155]
//                 sm:px-6
//               "
//             >
//               Production
//             </th>

//             <th
//               className="
//                 w-[24%]
//                 border-b
//                 border-l
//                 border-[#E2E8F0]
//                 px-5
//                 py-4
//                 text-left
//                 text-sm
//                 font-bold
//                 text-[#334155]
//                 sm:px-6
//               "
//             >
//               Advanced
//             </th>

//           </tr>
//         </thead>


//         <tbody>

//           {rows.map((row, index) => (

//             <tr
//               key={index}
//               className="transition-colors duration-200 hover:bg-[#FFF9F6]"
//             >

//               <td
//                 className="
//                   border-b
//                   border-[#E8EDF2]
//                   px-5
//                   py-3.5
//                   text-sm
//                   leading-6
//                   text-[#475569]
//                   sm:px-6
//                 "
//               >
//                 {row.description}
//               </td>


//               <td
//                 className="
//                   border-b
//                   border-l
//                   border-[#E8EDF2]
//                   px-5
//                   py-3.5
//                   text-sm
//                   leading-6
//                   text-[#475569]
//                   sm:px-6
//                 "
//               >
//                 {row.production}
//               </td>


//               <td
//                 className="
//                   border-b
//                   border-l
//                   border-[#E8EDF2]
//                   px-5
//                   py-3.5
//                   text-sm
//                   leading-6
//                   text-[#475569]
//                   sm:px-6
//                 "
//               >
//                 {row.advanced}
//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }


// /* =========================================================
//    PAGE
// ========================================================= */

// export default function HdiPcbPage() {
//   return (
//     <main className="min-h-screen bg-white">

//       {/* =====================================================
//           TOP BAR + HEADER
//       ===================================================== */}

//       <TopBar />
//       <Header />


//       {/* =====================================================
//           PAGE INTRO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#F7F9FC] pt-[145px] pb-14 lg:pb-16 mt-26">

//         {/* Decorative accent */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-24
//             -top-24
//             h-[320px]
//             w-[320px]
//             rounded-full
//             bg-[#F4511E]/[0.05]
//             blur-3xl
//           "
//         />

//         <div className="container-flashline relative">

//           <div className="max-w-4xl">

//             {/* Category */}

//             <div className="flex items-center gap-3">

//               <span className="h-[2px] w-9 bg-[#F4511E]" />

//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//                 PCB Fabrication
//               </p>

//             </div>


//             {/* Main heading */}

//             <h1
//               className="
//                 mt-4
//                 text-4xl
//                 font-black
//                 tracking-[-0.035em]
//                 text-[#1F2937]
//                 sm:text-5xl
//                 lg:text-[3.5rem]
//               "
//             >
//               HDI PCB
//             </h1>


//             {/* Accent */}

//             <div className="mt-5 flex items-center gap-2">

//               <span className="h-[3px] w-14 rounded-full bg-[#F4511E]" />

//               <span className="h-[3px] w-4 rounded-full bg-[#F4511E]/30" />

//               <span className="h-[3px] w-2 rounded-full bg-[#F4511E]/15" />

//             </div>


//             {/* Intro */}

//             <p className="mt-5 max-w-3xl text-base leading-8 text-[#64748B] sm:text-lg">
//               High-density interconnect PCB technology supporting advanced
//               multilayer designs, fine-pitch components, microvias and
//               high-precision manufacturing requirements.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           SPECIFICATIONS
//       ===================================================== */}

//       <section className="bg-white py-14 lg:py-20">

//         <div className="container-flashline">

//           <div className="mx-auto max-w-6xl">

//             {/* =================================================
//                 SPECIFICATION SECTIONS
//             ================================================= */}

//             <div className="space-y-14">

//               {specificationSections.map((section, index) => (

//                 <section key={section.title}>

//                   {/* Section heading */}

//                   <div className="mb-6 flex items-center gap-4">

//                     <div className="h-[3px] w-10 rounded-full bg-[#F4511E]" />

//                     <h2
//                       className="
//                         text-2xl
//                         font-black
//                         tracking-tight
//                         text-[#63B5DC]
//                         sm:text-3xl
//                       "
//                     >
//                       {section.title}
//                     </h2>

//                   </div>


//                   {/* Table */}

//                   <SpecificationTable rows={section.rows} />

//                 </section>

//               ))}

//             </div>


//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           BOTTOM LIGHT ACCENT
//       ===================================================== */}

//       <section className="border-t border-[#E8EDF2] bg-[#F7F9FC] py-10">

//         <div className="container-flashline">

//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

//             <div>

//               <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4511E]">
//                 Flashline EMS
//               </p>

//               <p className="mt-1 text-sm text-[#64748B]">
//                 Advanced PCB fabrication for demanding electronic applications.
//               </p>

//             </div>


//             <Link
//               href="/capabilities/pcb-fabrication"
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 gap-2
//                 text-sm
//                 font-bold
//                 text-[#F4511E]
//                 transition
//                 hover:text-[#D93E10]
//               "
//             >
//               Explore PCB Fabrication

//               <ArrowRight
//                 size={17}
//                 className="
//                   transition-transform
//                   group-hover:translate-x-1
//                 "
//               />

//             </Link>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TopBar } from "../../../../../components/layout/top-bar";
import { Header } from "../../../../../components/layout/header";

/* =========================================================
   TYPES
========================================================= */

type SpecificationRow = {
  description: string;
  production: string;
  advanced: string;
};

type SpecificationSection = {
  title: string;
  rows: SpecificationRow[];
};

/* =========================================================
   METAL CORE PCB DATA
   Add specification sections here later.
========================================================= */

const specificationSections: SpecificationSection[] = [
  // Example for future use:
  //
  // {
  //   title: "Board Dimensions",
  //   rows: [
  //     {
  //       description: "Max. Board Size",
  //       production: "Coming Soon",
  //       advanced: "Coming Soon",
  //     },
  //   ],
  // },
];

/* =========================================================
   TABLE COMPONENT
========================================================= */

function SpecificationTable({
  rows,
}: {
  rows: SpecificationRow[];
}) {
  return (
    <div
      className="
        overflow-x-auto
        rounded-xl
        border
        border-[#E2E8F0]
        bg-white
        shadow-[0_8px_30px_rgba(15,23,42,0.04)]
      "
    >
      <table className="w-full min-w-[760px] border-collapse">
        <thead>
          <tr className="bg-[#F8FAFC]">
            <th
              className="
                w-[52%]
                border-b
                border-[#E2E8F0]
                px-5
                py-4
                text-left
                text-sm
                font-bold
                text-[#334155]
                sm:px-6
              "
            >
              Description
            </th>

            <th
              className="
                w-[24%]
                border-b
                border-l
                border-[#E2E8F0]
                px-5
                py-4
                text-left
                text-sm
                font-bold
                text-[#334155]
                sm:px-6
              "
            >
              Production
            </th>

            <th
              className="
                w-[24%]
                border-b
                border-l
                border-[#E2E8F0]
                px-5
                py-4
                text-left
                text-sm
                font-bold
                text-[#334155]
                sm:px-6
              "
            >
              Advanced
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="transition-colors duration-200 hover:bg-[#FFF9F6]"
            >
              <td
                className="
                  border-b
                  border-[#E8EDF2]
                  px-5
                  py-3.5
                  text-sm
                  leading-6
                  text-[#475569]
                  sm:px-6
                "
              >
                {row.description}
              </td>

              <td
                className="
                  border-b
                  border-l
                  border-[#E8EDF2]
                  px-5
                  py-3.5
                  text-sm
                  leading-6
                  text-[#475569]
                  sm:px-6
                "
              >
                {row.production}
              </td>

              <td
                className="
                  border-b
                  border-l
                  border-[#E8EDF2]
                  px-5
                  py-3.5
                  text-sm
                  leading-6
                  text-[#475569]
                  sm:px-6
                "
              >
                {row.advanced}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function MetalCorePcbPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          TOP BAR + HEADER
      ===================================================== */}

      <TopBar />
      <Header />

      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <section
        className="
          relative
          mt-26
          overflow-hidden
          bg-[#F7F9FC]
          pt-[145px]
          pb-14
          lg:pb-16
        "
      >
        {/* Decorative accent */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#F4511E]/[0.05]
            blur-3xl
          "
        />

        <div className="container-flashline relative">
          <div className="max-w-4xl">

            {/* Category */}

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F4511E]" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F4511E]
                "
              >
                PCB Fabrication
              </p>
            </div>

            {/* Main heading */}

            <h1
              className="
                mt-4
                text-4xl
                font-black
                tracking-[-0.035em]
                text-[#1F2937]
                sm:text-5xl
                lg:text-[3.5rem]
              "
            >
              HDI PCB
            </h1>

            {/* Accent */}

            <div className="mt-5 flex items-center gap-2">
              <span className="h-[3px] w-14 rounded-full bg-[#F4511E]" />

              <span className="h-[3px] w-4 rounded-full bg-[#F4511E]/30" />

              <span className="h-[3px] w-2 rounded-full bg-[#F4511E]/15" />
            </div>

            {/* Intro */}

            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-8
                text-[#64748B]
                sm:text-lg
              "
            >
             HDI PCB specifications and manufacturing capabilities
              will be added soon.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIFICATIONS / COMING SOON
      ===================================================== */}

      <section className="bg-white py-14 lg:py-20">
        <div className="container-flashline">
          <div className="mx-auto max-w-6xl">

            {specificationSections.length > 0 ? (
              /* =================================================
                 SPECIFICATION SECTIONS
              ================================================= */

              <div className="space-y-14">
                {specificationSections.map((section) => (
                  <section key={section.title}>

                    {/* Section heading */}

                    <div className="mb-6 flex items-center gap-4">
                      <div className="h-[3px] w-10 rounded-full bg-[#F4511E]" />

                      <h2
                        className="
                          text-2xl
                          font-black
                          tracking-tight
                          text-[#63B5DC]
                          sm:text-3xl
                        "
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Table */}

                    <SpecificationTable rows={section.rows} />

                  </section>
                ))}
              </div>
            ) : (
              /* =================================================
                 MORE INFORMATION COMING SOON
              ================================================= */

              <section className="py-8">
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
                  {/* Decorative accent */}

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

                  <div className="relative">

                    {/* Small accent */}

                    <div className="mb-6 flex justify-center">
                      <div className="h-[3px] w-14 rounded-full bg-[#F4511E]" />
                    </div>

                    {/* Heading */}

                    <h2
                      className="
                        text-3xl
                        font-black
                        tracking-tight
                        text-[#63B5DC]
                        sm:text-4xl
                      "
                    >
                      More Information Coming Soon
                    </h2>

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
                      Detailed HDI PCB specifications and manufacturing
                      capabilities will be available here soon.
                    </p>

                  </div>
                </div>
              </section>
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM LIGHT ACCENT
      ===================================================== */}

      <section
        className="
          border-t
          border-[#E8EDF2]
          bg-[#F7F9FC]
          py-10
        "
      >
        <div className="container-flashline">
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#F4511E]
                "
              >
                Flashline EMS
              </p>

              <p className="mt-1 text-sm text-[#64748B]">
                Advanced PCB fabrication for demanding electronic applications.
              </p>
            </div>

            <Link
              href="/capabilities/pcb-fabrication"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#F4511E]
                transition
                hover:text-[#D93E10]
              "
            >
              Explore PCB Fabrication

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}