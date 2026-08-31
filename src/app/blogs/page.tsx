"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import { blogs } from "@/lib/blogs";

export default function BlogsPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          BLOG HEADER
      ====================================================== */}

      <section className="border-b border-slate-200 bg-[#F5F8FC] mt-32">
        <div className="container-flashline py-16 lg:py-20">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#F4511E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
                Resources
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#062D82] sm:text-5xl lg:text-6xl">
              Latest from Flashline EMS
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Explore insights, updates, and expertise from Flashline EMS
              covering PCB fabrication, electronics manufacturing, and
              emerging technologies.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          BLOG LIST
      ====================================================== */}

      <section className="bg-white py-20 lg:py-28">

        <div className="container-flashline">

          <div className="grid gap-8 lg:grid-cols-2">

            {blogs.map((blog, index) => (

              <article
                key={blog.slug}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#1597E5]/40
                  hover:shadow-[0_25px_60px_rgba(6,45,130,0.12)]
                "
              >

                {/* IMAGE */}

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="relative block h-[280px] overflow-hidden"
                >

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#062D82]/50 to-transparent opacity-60" />

                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-[#062D82] shadow-lg">
                    0{index + 1}
                  </div>

                </Link>


                {/* CONTENT */}

                <div className="p-7 sm:p-8">

                  <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">

                    <span className="flex items-center gap-2">
                      <CalendarDays
                        size={15}
                        className="text-[#F4511E]"
                      />
                      {blog.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <User
                        size={15}
                        className="text-[#F4511E]"
                      />
                      By {blog.author}
                    </span>

                  </div>


                  <h2 className="mt-5 text-2xl font-black leading-tight tracking-tight text-[#062D82] transition-colors duration-300 group-hover:text-[#F4511E] sm:text-3xl">
                    {blog.title}
                  </h2>


                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {blog.excerpt}
                  </p>


                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="
                      group/read
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      bg-[#687383]
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#F4511E]
                      rounded-xl
                    "
                  >
                    Read more

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover/read:translate-x-1
                      "
                    />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}