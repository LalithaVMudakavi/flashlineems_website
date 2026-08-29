"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { TopBar } from "../../../../components/layout/top-bar";
import { Header } from "../../../../components/layout/header";

const capabilities = [
  "Feeder loading capacity of 222 nos of 8 mm feeders and 10 different tray components.",
  "Option to use loose ICs through vibratory stick feeder.",
  "Can support assembly for PCBs upto under 0.3 mm thickness.",
  "Placing accuracy of 50 Microns with chips and 30 Microns in ICs.",
  "Minimum ball size of 0.15 mm dia and maximum BGA size upto 75 mm x75 mm.",
  "Equipped with 3D Zenith Alpha HS+, KOH YOUNG 3D Automated Optical Inspection System With 5way 3D Projection Light Source to measure height of components upto 25 mm.",
  "Being supported BGA x-ray inspection thru sub-contracting from the near by EMS companies.",
  "Single side, double sided PCB assemblies with SMD and leaded components, testing and system Integration / Box-build assemblies.",
  "Reflow oven with N2 option to reduce the oxidation of the welding surface and improve the wettability of the welding.",
  "PCB Assemblies with in-house conformal coating.",
  "Rework of BGA`s and re-balling facility.",
  "Functional Testing, Burn-in and Environmental tests as per Customer needs.",
  "Provide support on PCBA prototype, New product introduction and Sample production.",
  "Flexa Software for line optimization.",
  "ERP to provide clear visibility of the product status.",
  "Certifications under process : ISO9001:2015 international quality system & AS9100D:2016",
];

export default function PcbAssemblyCapabilityPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          TOP BAR + HEADER
      ===================================================== */}

      <TopBar />
      <Header />


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7F9FC] pt-[145px] pb-14 lg:pb-16 mt-20">

        {/* Subtle decorative element */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#F4511E]/[0.05] blur-3xl" />

        <div className="container-flashline relative">

          <div className="max-w-4xl">

            {/* Category */}
            <div className="flex items-center gap-3">

              <span className="h-[2px] w-9 bg-[#F4511E]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
                Capabilities
              </p>

            </div>


            {/* Page Title */}
            <h1 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#1F2937] sm:text-5xl lg:text-[3.5rem]">
              PCB Assembly
            </h1>


            {/* Accent */}
            <div className="mt-5 flex items-center gap-2">

              <span className="h-[3px] w-14 rounded-full bg-[#F4511E]" />

              <span className="h-[3px] w-4 rounded-full bg-[#F4511E]/30" />

              <span className="h-[3px] w-2 rounded-full bg-[#F4511E]/15" />

            </div>


            {/* Description */}
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#64748B] sm:text-lg">
              Advanced PCB assembly capabilities supporting high-quality,
              high-precision electronic manufacturing from prototype through
              production.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PCB ASSEMBLY CAPABILITIES
      ===================================================== */}

      <section className="bg-white py-14 lg:py-20">

        <div className="container-flashline">

          <div className="mx-auto max-w-6xl">

            {/* Capability List */}

            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]">

              {/* List Header */}

              <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 sm:px-7">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                  PCB Assembly Capabilities
                </p>

              </div>


              {/* Capability Items */}

              <div className="divide-y divide-[#EEF2F6]">

                {capabilities.map((item, index) => (

                  <div
                    key={index}
                    className="
                      group
                      flex
                      gap-4
                      px-5
                      py-5
                      transition-all
                      duration-200
                      hover:bg-[#FFF9F6]
                      sm:px-7
                    "
                  >

                    {/* Number */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#F4511E]/20
                        bg-[#FFF4EF]
                        text-[11px]
                        font-bold
                        text-[#F4511E]
                        transition-all
                        duration-200
                        group-hover:border-[#F4511E]
                        group-hover:bg-[#F4511E]
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* Icon + Text */}

                    <div className="flex min-w-0 flex-1 items-start gap-3">

                      <CheckCircle2
                        size={18}
                        strokeWidth={2}
                        className="
                          mt-1
                          shrink-0
                          text-[#F4511E]
                          opacity-60
                          transition-opacity
                          duration-200
                          group-hover:opacity-100
                        "
                      />

                      <p className="text-[15px] leading-7 text-[#475569] sm:text-base">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                REQUEST QUOTE
            ================================================= */}

            <div className="mt-9">

              <Link
                href="/quick-quote"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#F4511E]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_24px_rgba(244,81,30,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E94716]
                  hover:shadow-[0_12px_30px_rgba(244,81,30,0.22)]
                "
              >
                Request a Quote

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}