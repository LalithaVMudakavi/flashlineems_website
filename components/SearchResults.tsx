"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { searchableContent } from "@/lib/searchData";

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const normalizedQuery = query.toLowerCase().trim();

  const results = searchableContent.filter((item) => {
    const searchableText = `
      ${item.title}
      ${item.category}
      ${item.content}
    `.toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-[#F5F8FC]">
        <div className="container-flashline py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#F4511E]">
              <Search size={17} />
              Search
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#062D82] sm:text-5xl">
              Search Results for:
              <span className="ml-2 text-[#F4511E]">
                {query}
              </span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore Flashline EMS services, capabilities, industries and
              resources related to your search.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-flashline">
          {results.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#062D82]/30
                    hover:shadow-[0_18px_50px_rgba(6,45,130,0.10)]
                  "
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        bg-[#F4511E]/10
                        px-3
                        py-1
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#F4511E]
                      "
                    >
                      {item.category}
                    </span>

                    <span className="text-sm font-bold text-slate-300">
                      →
                    </span>
                  </div>

                  <h2
                    className="
                      mt-5
                      text-2xl
                      font-black
                      leading-tight
                      text-[#062D82]
                      transition-colors
                      duration-300
                      group-hover:text-[#F4511E]
                    "
                  >
                    {item.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-600">
                    {item.content}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#062D82]">
                    Read More
                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                  <div
                    className="
                      absolute
                      -bottom-10
                      -right-10
                      h-28
                      w-28
                      rounded-full
                      bg-[#1597E5]/5
                      transition-transform
                      duration-500
                      group-hover:scale-150
                    "
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4511E]/10 text-[#F4511E]">
                <Search size={28} />
              </div>

              <h2 className="mt-6 text-3xl font-black text-[#062D82]">
                No results found
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We couldn't find anything matching{" "}
                <span className="font-bold text-[#062D82]">
                  "{query}"
                </span>
                . Try searching for PCB, fabrication, assembly, HDI,
                engineering or another keyword.
              </p>

              <Link
                href="/"
                className="
                  mt-7
                  inline-flex
                  rounded-2xl
                  items-center
                  gap-2
                  bg-[#F4511E]
                  px-6
                  py-3
                  font-bold
                  text-white
                  transition
                  hover:bg-[#062D82]
                "
              >
                Back to Home
                <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}