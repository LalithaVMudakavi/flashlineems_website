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
//    RIGID FLEX PCB DATA
// ========================================================= */

// const specificationSections: SpecificationSection[] = [
//   /* =======================================================
//      BOARD DIMENSIONS
//   ======================================================== */

//   {
//     title: "Board Dimensions",
//     rows: [
//       {
//         description: "Max. Finish Board Size",
//         production: '16"X20"',
//         advanced: '18"X26"',
//       },
//       {
//         description: "min. Finish Board Size",
//         production: '0.2"x0.2"',
//         advanced: '0.15"x0.15"',
//       },
//       {
//         description: "Max. Board Thickness",
//         production: '0.250"(+/-10%)',
//         advanced: '0.280"(+/-8%)',
//       },
//       {
//         description: "Min. Board Thickness",
//         production: '0.016"(+/-10%) For 4L',
//         advanced: '0.016"(+/-10%) For 4L',
//       },
//     ],
//   },

//   /* =======================================================
//      LAMINATION
//   ======================================================== */

//   {
//     title: "Lamination",
//     rows: [
//       {
//         description: "Layer Count",
//         production: "4~42L",
//         advanced: "50L",
//       },
//       {
//         description: "Layer to Layer Registration",
//         production: "+/-4mils",
//         advanced: "+/-3mils",
//       },
//     ],
//   },

//   /* =======================================================
//      DRILLING
//   ======================================================== */

//   {
//     title: "Drilling",
//     rows: [
//       {
//         description: "Min. Drill Size",
//         production: "6mils",
//         advanced: "5mils",
//       },
//       {
//         description: "Min. Hole to Hole Pitch",
//         production: "20mils(0.5mm)",
//         advanced: "18mils(0.45mm)",
//       },
//       {
//         description: "True position Tolerance",
//         production: "+/-3mils",
//         advanced: "+/-2mils",
//       },
//       {
//         description: "Slot Diameter Tolerance",
//         production: "+/-3mils",
//         advanced: "+/-2mils",
//       },
//       {
//         description: "Min gap from PTH to track inner layers",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Min gap from PTH to the border of rigid flex",
//         production: "30mils",
//         advanced: "20mils",
//       },
//       {
//         description: "Min. PTH Hole edge to PTH Hole edge space",
//         production: "10mils",
//         advanced: "8mils",
//       },
//     ],
//   },

//   /* =======================================================
//      PLATING
//   ======================================================== */

//   {
//     title: "Plating",
//     rows: [
//       {
//         description: "Max. Aspect Ratio",
//         production: "6:1",
//         advanced: "8:1",
//       },
//       {
//         description: "Cu Thickness in Through hole",
//         production: ">1mils",
//         advanced: ">1mils",
//       },
//       {
//         description: "Plated hole size tolerance",
//         production: "+/-2mils",
//         advanced: "+/-1.5mils",
//       },
//       {
//         description: "NPTH hole tolerance",
//         production: "+/-2mils",
//         advanced: "+/-1mils",
//       },
//       {
//         description: "Via in pad Fill Material",
//         production: "Epoxy resin/Copper paste",
//         advanced: "Epoxy resin/Copper paste",
//       },
//     ],
//   },

//   /* =======================================================
//      LAYER
//   ======================================================== */

//   {
//     title: "Layer",
//     rows: [
//       {
//         description: "Min. Trace/Space",
//         production: "3mils / 3mils",
//         advanced: "2.5mils / 2.5mils",
//       },
//       {
//         description: "Min. pad over drill size",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Max. Copper thickness",
//         production: "1~2 oz",
//         advanced: "3 oz",
//       },
//       {
//         description: "Line/ pad to board edge",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Min gap from Copper to the border of rigid flex",
//         production: "15mils",
//         advanced: "10mils",
//       },
//       {
//         description: "Line Tolerance",
//         production: "+/-20%",
//         advanced: "+/-10%",
//       },
//     ],
//   },

//   /* =======================================================
//      METAL FINISH
//   ======================================================== */

//   {
//     title: "Metal Finish",
//     rows: [
//       {
//         description: "HASL",
//         production: '50-1000u"',
//         advanced: '50-1000u"',
//       },
//       {
//         description: "HASL+Selective Hard gold",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "OSP",
//         production: '8-20u"',
//         advanced: '8-20u"',
//       },
//       {
//         description: "Selective ENIG+OSP",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "ENIG(Nickel/Gold)",
//         production: '80-200u"/2-9 u"',
//         advanced: '250u"/ 10u"',
//       },
//       {
//         description: "Immersion Silver",
//         production: '6-18u"',
//         advanced: '6-18u"',
//       },
//       {
//         description: "Hard Gold for Tab",
//         production: '10-80u"',
//         advanced: '10-80u"',
//       },
//       {
//         description: "Immersion Tin",
//         production: '30u"min.',
//         advanced: '30u" min.',
//       },
//       {
//         description: "ENEPIG (Ni/Pd/Au)",
//         production: '125u"/4u"/1u" min.',
//         advanced: '150u"/8u"/2u" min.',
//       },
//       {
//         description: "Soft Gold (Nickel/ Gold)",
//         production: '200u"/ 20u"min.',
//         advanced: '200u"/ 20u"',
//       },
//     ],
//   },

//   /* =======================================================
//      COVERLAY
//   ======================================================== */

//   {
//     title: "Coverlay",
//     rows: [
//       {
//         description: "Thickness(Min) (PI / ADH)",
//         production: "0.5mils / 1mils",
//         advanced: "0.5mils / 1mils",
//       },
//       {
//         description: "dam width",
//         production: "20mils",
//         advanced: "15mils",
//       },
//       {
//         description: "registration tolerance",
//         production: "+/-15mils",
//         advanced: "+/-10mils",
//       },
//     ],
//   },

//   /* =======================================================
//      SOLDER MASK
//   ======================================================== */

//   {
//     title: "Solder Mask",
//     rows: [
//       {
//         description: "S/M Thickness",
//         production: "0.4mils min.",
//         advanced: "3mils max.",
//       },
//       {
//         description: "Solder dam width",
//         production: "4mils",
//         advanced: "3mils",
//       },
//       {
//         description: "S/M registration tolerance",
//         production: "+/-2.5mils",
//         advanced: "+/-2mils",
//       },
//       {
//         description: "S/M over line",
//         production: "3.5mils",
//         advanced: "2mils",
//       },
//     ],
//   },

//   /* =======================================================
//      LEGEND
//   ======================================================== */

//   {
//     title: "Legend",
//     rows: [
//       {
//         description: "Min. Space to SMD pad",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Min. Stroke Width",
//         production: "6mils",
//         advanced: "5mils",
//       },
//       {
//         description: "Min. Space to Copper pad",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Standard Color",
//         production: "White or Yellow",
//         advanced: "N/A",
//       },
//     ],
//   },

//   /* =======================================================
//      ELECTRICAL TESTING
//   ======================================================== */

//   {
//     title: "Electrical Testing",
//     rows: [
//       {
//         description: "Max. Test Points",
//         production: "30000 Points",
//         advanced: "30000 Points",
//       },
//       {
//         description: "Smallest SMT Pitch",
//         production: "20mils",
//         advanced: "16mils",
//       },
//       {
//         description: "Smallest BGA Pitch",
//         production: "20mils",
//         advanced: "16mils",
//       },
//     ],
//   },

//   /* =======================================================
//      LASER ROUT
//   ======================================================== */

//   {
//     title: "Laser Rout (LPKF)",
//     rows: [
//       {
//         description: "Min. Rout to copper space",
//         production: "6mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Rout tolerance",
//         production: "+/-2mils",
//         advanced: "+/-2mils",
//       },
//     ],
//   },

//   /* =======================================================
//      NC ROUT
//   ======================================================== */

//   {
//     title: "NC Rout",
//     rows: [
//       {
//         description: "Min. Rout to copper space",
//         production: "8mils",
//         advanced: "4mils",
//       },
//       {
//         description: "Rout tolerance",
//         production: "+/-4mils",
//         advanced: "+/-3mils",
//       },
//     ],
//   },

//   /* =======================================================
//      IMPEDANCE CONTROL
//   ======================================================== */

//   {
//     title: "Impedance controll",
//     rows: [
//       {
//         description: "Impedance controll",
//         production: "+/-8%",
//         advanced: "+/-5%",
//       },
//     ],
//   },

//   /* =======================================================
//      EMI
//   ======================================================== */

//   {
//     title: "EMI",
//     rows: [
//       {
//         description: "PC-5500&PC-5600",
//         production: "Yes",
//         advanced: "Yes",
//       },
//     ],
//   },

//   /* =======================================================
//      STIFFENER
//   ======================================================== */

//   {
//     title: "Stiffener",
//     rows: [
//       {
//         description: "PI",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "FR4",
//         production: "Yes",
//         advanced: "Yes",
//       },
//       {
//         description: "Metal",
//         production: "Yes",
//         advanced: "Yes",
//       },
//     ],
//   },

//   /* =======================================================
//      CONDUCTIVE & THERMAL ADHESIVE
//   ======================================================== */

//   {
//     title: "Conductive & thermal adhesive",
//     rows: [
//       {
//         description: "3M Type",
//         production: "Yes",
//         advanced: "Yes",
//       },
//     ],
//   },

//   /* =======================================================
//      ECCOBOND
//   ======================================================== */

//   {
//     title: "Eccobond",
//     rows: [
//       {
//         description: "Eccobond over Flex width",
//         production: "60mils",
//         advanced: "60mils",
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
//     <div
//       className="
//         overflow-x-auto
//         rounded-xl
//         border
//         border-[#E2E8F0]
//         bg-white
//         shadow-[0_8px_30px_rgba(15,23,42,0.04)]
//       "
//     >
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

// export default function RigidFlexPcbPage() {
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

//       <section
//         className="
//           relative
//           mt-26
//           overflow-hidden
//           bg-[#F7F9FC]
//           pt-[145px]
//           pb-14
//           lg:pb-16
//         "
//       >
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

//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.2em]
//                   text-[#F4511E]
//                 "
//               >
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
//               Rigid Flex Pcb
//             </h1>

//             {/* Accent */}

//             <div className="mt-5 flex items-center gap-2">
//               <span className="h-[3px] w-14 rounded-full bg-[#F4511E]" />

//               <span className="h-[3px] w-4 rounded-full bg-[#F4511E]/30" />

//               <span className="h-[3px] w-2 rounded-full bg-[#F4511E]/15" />
//             </div>

//             {/* Intro */}

//             <p
//               className="
//                 mt-5
//                 max-w-3xl
//                 text-base
//                 leading-8
//                 text-[#64748B]
//                 sm:text-lg
//               "
//             >
//               Rigid-flex PCB technology combining rigid and flexible
//               construction for compact, reliable and high-performance
//               electronic applications.
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
//               {specificationSections.map((section) => (
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

//       <section
//         className="
//           border-t
//           border-[#E8EDF2]
//           bg-[#F7F9FC]
//           py-10
//         "
//       >
//         <div className="container-flashline">
//           <div
//             className="
//               flex
//               flex-col
//               gap-3
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//             "
//           >
//             <div>
//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#F4511E]
//                 "
//               >
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
              Rigid Flex PCB
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
            Rigid Flex PCB specifications and manufacturing capabilities
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
                      Detailed Rigid Flex PCB specifications and manufacturing
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