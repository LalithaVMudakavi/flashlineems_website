"use client";

import { TopBar } from "../../../components/layout/top-bar";
import { Header } from "../../../components/layout/header";

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
                    <div className="h-[3px] w-14 rounded-full bg-[#F4511E]" />
                  </div>


                  {/* Heading */}

                  <h1
                    className="
                      text-3xl
                      font-black
                      tracking-tight
                      text-[#63B5DC]
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
                    Detailed information about our certifications,
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