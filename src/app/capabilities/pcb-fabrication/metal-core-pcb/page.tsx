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
              Metal Core PCB
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
              Metal core PCB specifications and manufacturing capabilities
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
                      Detailed Metal Core PCB specifications and manufacturing
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