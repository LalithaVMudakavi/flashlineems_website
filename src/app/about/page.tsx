"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Handshake,
  SearchCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { TopBar } from "../../../components/layout/top-bar";
import { Header } from "../../../components/layout/header";



/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#64748B]">
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <TopBar />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          ABOUT COMPANY
      ===================================================== */}

      <section className="bg-white pt-16 pb-14 lg:pt-20 lg:pb-20 mt-32">
        <div className="container-flashline">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* LEFT - IMAGE */}

            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[560px] overflow-hidden">
               <Image
  src="/aboutimage.png"
  alt="Flashline EMS"
  width={1024}
  height={1024}
  className="h-auto w-full object-contain"
  priority
/>
              </div>
            </div>

            {/* RIGHT - CONTENT */}

            <div className="pt-1">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#F4511E]
                "
              >
                About Company
              </p>

              <h1
                className="
                  mt-3
                  max-w-[700px]
                  text-4xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-[#63B5DC]
                  sm:text-5xl
                "
              >
                Flashline EMS is committed to delivering the finest service.
              </h1>

              <div className="mt-6 space-y-5">

                <p className="text-base leading-7 text-[#64748B]">
                  Flashline EMS aspires to be the best in High-End full turnkey
                  manufacturing Services. Flashline EMS has State ofArt
                  manufacturing facility in Hyderabad, India having the
                  expertise to serve new product development from quick turn
                  proto type quantity to volume manufacturing.
                </p>

                <p className="text-base leading-7 text-[#64748B]">
                  Flashline EMS, with the inspiration of its promoters and key
                  entrepreneur, determined to serve globally and serving large
                  companies in the USA over the many years.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PADMA DANTU
      ===================================================== */}

      <section className="bg-white pb-14 lg:pb-20">
        <div className="container-flashline">

          <div className="max-w-[1150px]">

            <h2
              className="
                text-3xl
                font-extrabold
                tracking-tight
                text-[#63B5DC]
                sm:text-4xl
              "
            >
              Padma Dantu
            </h2>

            <h3
              className="
                mt-3
                text-2xl
                font-extrabold
                tracking-tight
                text-[#63B5DC]
                sm:text-3xl
              "
            >
              Co- Founder
            </h3>

            <p
              className="
                mt-5
                max-w-[1100px]
                text-base
                leading-7
                text-[#64748B]
              "
            >
              An engineering graduate with over 20 years of experience in the
              Electronics Manufacturing Services. Her leadership and Vision has
              been instrumental in ushering world class manufacturing and is
              well respected in the Industry globally for the changes in the
              landscape of Electronics Manufacturing.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          MISSION + VISION
      ===================================================== */}

      <section className="bg-white py-10 lg:py-16">
        <div className="container-flashline">

          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* LEFT IMAGE */}

            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[540px]">
                <Image
                  src="/hdirigidpcb.png"
                  alt="PCB manufacturing"
                  width={540}
                  height={400}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div>

              {/* OUR MISSION */}

              <div>
                <h2
                  className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-[#63B5DC]
                    sm:text-4xl
                  "
                >
                  OUR MISSION
                </h2>

                <p className="mt-5 text-base leading-7 text-[#64748B]">
                  We strive to be the best in what we commit and we Deliver.
                </p>

                <p className="mt-8 text-base leading-7 text-[#64748B]">
                  Flashline EMS is dedicated to be ahead of technology. Our
                  capability to quickly adapt to customers changes due to market
                  conditions helps our clients to deliver their products in
                  time.
                </p>

                <p className="mt-8 text-base leading-7 text-[#64748B]">
                  Flashline EMS with long-standing experience, impeccable supply
                  chainand cutting-edge process models,bound to provide
                  best-in-class electronics manufacturing services to the
                  customers in the areas of Healthcare, Aerospace, Industrial,
                  Energy and Electric
                </p>
              </div>

              {/* VISION */}

              <div className="mt-12">

                <h2
                  className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-[#63B5DC]
                    sm:text-4xl
                  "
                >
                  VISION
                </h2>

                <p className="mt-5 text-base leading-7 text-[#64748B]">
                  The vision of Flashline EMS is to be the leading one-stop
                  electronics manufacturing service company and provide our
                  customers a world-class quality through innovative technology.
                </p>

                {/* QUICK QUOTE */}

                <div className="mt-8">
                <Link
  href="/quick-quote"
  className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-md
    bg-[#687383]
    px-6
    py-3
    text-sm
    font-semibold
    !text-white
    no-underline
    transition-all
    duration-200
    hover:bg-[#F4511E]
    hover:!text-white
  "
>
  <span className="!text-white">
    Quick Quote
  </span>

  <ArrowRight
    size={17}
    className="
      !text-white
      transition-transform
      duration-200
      group-hover:translate-x-1
    "
  />
</Link>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CORE VALUES / CAPABILITIES
      ===================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="container-flashline">

          <div
            className="
              grid
              gap-x-12
              gap-y-20
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-x-14
              lg:gap-y-24
            "
          >

            {/* =================================================
                EXPERIENCED TEAM
            ================================================= */}

            <AboutFeature
              icon={<Users size={38} strokeWidth={1.7} />}
              title="Experienced Team"
            >
              <p>
                Flashline EMS, with the team of 40+ qualified engineers has
                ability to assist our customer throughout the design processes.
                Our expert team works on lean manufacturing principles from the
                concept to manufacturing which increases the manufacturing
                efficiency of legacy products and improving time to market.
              </p>

              <p className="mt-7">
                With the help of advanced design tools and combination of
                skilled people, Flashline EMS provides value added services
                like, building a PCB board stack-up, DFM (Design For
                Manufacturing), DFA (Design For Assembly), component engineering
                and global supply chain resources, which reward customers the
                best quality and delivery performance.
              </p>
            </AboutFeature>

            {/* =================================================
                DIVERSIFIED CAPABILITIES
            ================================================= */}

            <AboutFeature
              icon={<Sparkles size={38} strokeWidth={1.7} />}
              title="Diversified capabilities"
            >
              <p>
                Flashline EMS has over 25 years of history of electronics
                manufacturing serving major customers in the USA. We are
                accomplished with PCB bare boards including Rigid HDI,
                Rigid-Flex, flexible circuits or Hybrid materials. Flashline EMS
                with state-of-art assembly facility capable of smallest SMD
                01005, PTH and mixed technology assemblies.
              </p>
            </AboutFeature>

            {/* =================================================
                GLOBAL SUPPLY CHAIN
            ================================================= */}

            <AboutFeature
              icon={<Globe2 size={38} strokeWidth={1.7} />}
              title="Global supply Chain"
            >
              <p>
                Flashline EMS has established global supply chain management
                process works on the principle of lean manufacturing and has
                qualified and approved regional and offshore manufacturing
                partners based in the USA, Taiwan, Korea and China.In order to
                be a market leader in the global supply chain, Flashline EMS
                has setup a Singapore-based international purchasing office.
              </p>

              <p className="mt-7">
                Our fundamental supplier approval process carries out robust and
                independent audit of components and bare boards.
              </p>

              <p className="mt-7">
                Flashline EMS has integrated program management team that
                understands the market demands, trends and help customer
                develop a forecast.
              </p>
            </AboutFeature>

            {/* =================================================
                FAIR AND COMPETITIVE
            ================================================= */}

            <AboutFeature
              icon={<Handshake size={38} strokeWidth={1.7} />}
              title="Fair and Competitive"
            >
              <p>
                Service comes first! At Flashline EMS, the perspective of
                fairness comes with value of our hard-work, dedication and
                diligence.Our honest approach, reliable suggestions and
                willingness to tackle any challengebenefits to the customers
                seamlessly.
              </p>

              <p className="mt-7">
                Flashline EMS has dedicated customer success team that reviews
                quotes and customer feedback to demonstrate competitive pricing
                by optimizing materials, Lead time and resources.
              </p>
            </AboutFeature>

            {/* =================================================
                TRACEABILITY AND QUALITY ASSURANCE
            ================================================= */}

            <AboutFeature
              icon={<SearchCheck size={38} strokeWidth={1.7} />}
              title={
                <>
                  Traceability and
                  <br />
                  Quality Assurance
                </>
              }
            >
              <p>
                Flashline EMS respects the customer deadlines and specification
                to ensure the maximum satisfaction. Our approach towards
                industry 4.0 and exclusive digital tracking systems monitors
                every components and assembly process to ensure complete
                traceability from incoming inspection to the final product
                dispatch. Our state-of-art ERP software ensures seamless
                attention on customers’ needs towards special services.
              </p>

              <p className="mt-7">
                Our IPC certified technicians, ISO certified quality processes,
                automated inspections, robust FAI system with functional test
                and X-ray capability ensure high quality products that are safe,
                effective and reliable.
              </p>
            </AboutFeature>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM SPACE / LIGHT SECTION
      ===================================================== */}

      <section className="h-8 bg-white" />
    </main>
  );
}

/* =========================================================
   FEATURE COMPONENT
========================================================= */

function AboutFeature({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col">

      {/* ICON */}

      <div
        className="
          mb-7
          flex
          h-[94px]
          w-[94px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-[#7B8794]
          text-[#6B7684]
        "
      >
        {icon}
      </div>

      {/* TITLE */}

      <h2
        className="
          text-2xl
          font-extrabold
          leading-tight
          tracking-tight
          text-[#63B5DC]
          sm:text-[1.75rem]
        "
      >
        {title}
      </h2>

      {/* CONTENT */}

      <div
        className="
          mt-6
          text-[15px]
          leading-7
          text-[#64748B]
        "
      >
        {children}
      </div>

    </article>
  );
}