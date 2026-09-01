

"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navigation = [
  {
    label: "Services",
    items: [
      {
        label: "Engineering Design",
        href: "/services/engineering-design",
      },
      {
        label: "PCB Fabrication",
        href: "/services/pcb-fabrication",
      },
      {
        label: "PCB Assembly",
        href: "/services/pcb-assembly",
      },
      {
        label: "Box Build",
        href: "/services/box-build",
      },
    ],
  },

  {
    label: "Capabilities",
    items: [
      {
        label: "PCB Assembly",
        href: "/capabilities/pcb-assembly-2",
      },

      {
        label: "PCB Fabrication",
        href: "/capabilities/pcb-fabrication",
        children: [
          {
            label: "HDI PCB",
            href: "/capabilities/pcb-fabrication/hdipcb",
          },
          {
            label: "Rigid PCB",
            href: "/capabilities/pcb-fabrication/rigidpcb",
          },
          {
            label: "Rigid Flex PCB",
            href: "/capabilities/pcb-fabrication/rigid-flex-pcb",
          },
          {
            label: "Metal-core PCB",
            href: "/capabilities/pcb-fabrication/metal-core-pcb",
          },
        ],
      },
    ],
  },
];

export function Header() {
  const router = useRouter();
const [searchQuery, setSearchQuery] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
const [openSection, setOpenSection] = useState<string | null>(null);
const [openSubSection, setOpenSubSection] = useState<string | null>(null);

useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

const toggleSection = (section: string) => {
  setOpenSection((current) =>
    current === section ? null : section
  );
};

const toggleSubSection = (section: string) => {
  setOpenSubSection((current) =>
    current === section ? null : section
  );
};

  return (
    <>
{/* <header className="fixed left-0 right-0 top-[66px] z-[50] h-[90px] border-b border-[#e5e7eb] bg-white"> */}
<header className="fixed left-0 right-0 top-[58px] z-[50] h-[88px] border-b border-[#e5e7eb] bg-white">
  <div className="mx-auto flex h-full w-full max-w-[1600px] items-center gap-8 px-6 lg:px-16 xl:px-20">

    {/* LOGO */}
    <Link
      href="/"
      onClick={() => setMenuOpen(false)}
      className="flex w-[300px] shrink-0 items-center"
    >
      <Image
        src="/logo.png"
        alt="Flashline EMS"
        width={300}
        height={90}
        priority
        className="h-auto w-[270px] object-contain"
      />
    </Link>

    {/* SEARCH */}
<div className="hidden min-w-0 flex-1 lg:block">
  <form
    onSubmit={(e) => {
      e.preventDefault();

      const query = searchQuery.trim();

      if (!query) return;

      router.push(`/?s=${encodeURIComponent(query)}`);
    }}
    className="
      mx-auto flex h-[56px] w-full
      items-stretch
      overflow-hidden
      rounded-[15px]
      border border-[#d9dee8]
      bg-[#f8fafc]
      shadow-sm
      transition-all duration-300
      focus-within:border-[#062D82]/40
      focus-within:bg-white
      focus-within:shadow-[0_0_0_3px_rgba(6,45,130,0.08)]
    "
  >
    <input
      type="search"
      aria-label="Search Product"
      placeholder="Search Product..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        min-w-0 flex-1
        bg-white
        px-5
        text-[16px]
        font-medium
        text-[#0f172a]
        outline-none
        placeholder:text-[#64748b]
        placeholder:font-normal
      "
    />

    <button
      type="submit"
      aria-label="Search"
      className="
        flex w-[62px] shrink-0
        items-center justify-center
        bg-[#f4511e]
        text-white
        transition-all duration-300
        hover:bg-[#e94716]
      "
    >
      <Search size={27} strokeWidth={2.4} />
    </button>
  </form>
</div>

    {/* MOBILE SEARCH */}
<button
  type="button"
  aria-label="Search"
  className="
    ml-auto flex h-11 w-11
    items-center justify-center
    rounded-lg
    border border-[#D7E5E3]
    bg-[#F7FAF9]
    text-[#0F5C5E]
    transition-all duration-300
    hover:border-[#167A78]
    hover:bg-[#E3F1EF]
    hover:text-[#0B4F51]
    lg:hidden
  "
>
  <Search size={21} strokeWidth={2} />
</button>

    {/* MENU */}
    <button
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={() => {
  setMenuOpen((value) => !value);
  setOpenSection(null);
}}
      className="
        flex h-[52px] w-[52px] shrink-0
        items-center justify-center
        rounded-lg
        text-[#062D82]
        transition-all duration-300
        hover:bg-[#062D82]/5
        hover:text-[#f4511e]
      "
    >
      {menuOpen ? (
        <X size={31} strokeWidth={1.8} />
      ) : (
        <Menu size={32} strokeWidth={1.8} />
      )}
    </button>

  </div>
</header>

{/* =========================================================
    MOBILE / SIDE MENU
========================================================= */}
{menuOpen && (
  <div
    className="fixed inset-0 z-[100]"
    onClick={() => setMenuOpen(false)}
  >

    {/* =====================================================
        BACKDROP
    ====================================================== */}

    <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[3px]" />


    {/* =====================================================
        SIDEBAR
    ====================================================== */}

    <aside
      onClick={(event) => event.stopPropagation()}
      className="
        absolute
        right-0
        top-[58px]
        flex
        h-[calc(100dvh-58px)]
        w-full
        max-w-[430px]
        flex-col
        overflow-hidden
        border-l
        border-[#E2E8F0]
        bg-white
        text-[#334155]
        shadow-[-20px_0_60px_rgba(38,54,77,0.12)]
        animate-slide-in-right
      "
    >

      {/* =================================================
          SIDEBAR HEADER
      ================================================== */}

      <div
        className="
          shrink-0
          border-b
          border-[#E2E8F0]
          bg-white
          px-6
          py-5
          sm:px-7
        "
      >

        <div className="flex items-center justify-between">

          {/* TITLE */}

          <div>

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#2563EB]
                "
              >
                Navigation
              </p>

            </div>


            <h2
              className="
                mt-1.5
                text-xl
                font-black
                tracking-tight
                text-[#334155]
              "
            >
              Explore Flashline
            </h2>

          </div>


          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#E2E8F0]
              bg-[#F8FAFC]
              text-[#64748B]
              transition-all
              duration-200
              hover:border-[#F15A24]/25
              hover:bg-[#FFF4ED]
              hover:text-[#F15A24]
            "
          >
            <X size={20} strokeWidth={2} />
          </button>

        </div>

      </div>


      {/* =================================================
          SCROLLABLE NAVIGATION
      ================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          px-5
          py-5
          sm:px-6
        "
      >

        <nav className="space-y-1">

          {/* =================================================
              HOME
          ================================================= */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Home</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>

               <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Services</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>


          {/* =================================================
              SERVICES
          ================================================== */}

          {/* <div>

            <button
              type="button"
              onClick={() => toggleSection("Services")}
              aria-expanded={openSection === "Services"}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-between
                rounded-xl
                px-3.5
                text-left
                text-sm
                font-semibold
                text-[#334155]
                transition-all
                duration-200
                hover:bg-[#F8FAFC]
     
              "
            >

              <span>Services</span>


              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  transition-all
                  duration-200
                  ${
                    openSection === "Services"
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "bg-[#F8FAFC] text-[#94A3B8]"
                  }
                `}
              >

                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      openSection === "Services"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </span>

            </button> */}


            {/* SERVICES CHILDREN */}

            {/* <div
              className={`
                grid
                transition-all
                duration-300
                ${
                  openSection === "Services"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >

              <div className="overflow-hidden">

                <div
                  className="
                    ml-3
                    border-l
                    border-[#E2E8F0]
                    pl-3
                  "
                >

                  {navigation[0].items.map((item) => (

                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        group
                        flex
                        min-h-10
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2
                        text-[14px]
                        font-medium
                        text-[#64748B]
                        transition-all
                        duration-200
                        hover:bg-[#F8FAFC]
                        hover:text-[#2563EB]
                      "
                    >

                      <span>{item.label}</span>

                      <span
                        className="
                          translate-x-0
                          text-[#CBD5E1]
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:translate-x-1
                          group-hover:opacity-100
                          group-hover:text-[#F15A24]
                        "
                      >
                        →
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          </div> */}


          {/* =================================================
              CAPABILITIES
          ================================================== */}
{/* 
          <div>

            <button
              type="button"
              onClick={() => {
                toggleSection("capabilities");
                setOpenSubSection(null);
              }}
              aria-expanded={openSection === "capabilities"}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-between
                rounded-xl
                px-3.5
                text-left
                text-sm
                font-semibold
                text-[#334155]
                transition-all
                duration-200
                hover:bg-[#F8FAFC]
       
              "
            >

              <span>Capabilities</span>


              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  transition-all
                  duration-200
                  ${
                    openSection === "capabilities"
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "bg-[#F8FAFC] text-[#94A3B8]"
                  }
                `}
              >

                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      openSection === "capabilities"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </span>

            </button> */}


            {/* CAPABILITIES CHILDREN */}
{/* 
            <div
              className={`
                grid
                transition-all
                duration-300
                ${
                  openSection === "capabilities"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >

              <div className="overflow-hidden">

                <div
                  className="
                    ml-3
                    border-l
                    border-[#E2E8F0]
                    pl-3
                  "
                > */}

                  {/* PCB ASSEMBLY */}

                  {/* <Link
                    href="/capabilities/pcb-assembly-2"
                    onClick={() => setMenuOpen(false)}
                    className="
                      group
                      flex
                      min-h-10
                      items-center
                      justify-between
                      rounded-lg
                      px-3
                      py-2
                      text-[14px]
                      font-medium
                      text-[#64748B]
                      transition-all
                      duration-200
                      hover:bg-[#F8FAFC]
                      hover:text-[#2563EB]
                    "
                  >

                    <span>PCB Assembly</span>

                    <span
                      className="
                        text-[#CBD5E1]
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                        group-hover:opacity-100
                        group-hover:text-[#F15A24]
                      "
                    >
                      →
                    </span>

                  </Link>
 */}

                  {/* PCB FABRICATION */}

                  {/* <div>

                    <button
                      type="button"
                      onClick={() =>
                        toggleSubSection("pcb-fabrication")
                      }
                      aria-expanded={
                        openSubSection === "pcb-fabrication"
                      }
                      className="
                        group
                        flex
                        min-h-10
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2
                        text-left
                        text-[14px]
                        font-medium
                        text-[#64748B]
                        transition-all
                        duration-200
                        hover:bg-[#F8FAFC]
                        hover:text-[#2563EB]
                      "
                    >

                      <span>PCB Fabrication</span>

                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className={`
                          text-[#94A3B8]
                          transition-transform
                          duration-300
                          ${
                            openSubSection === "pcb-fabrication"
                              ? "rotate-180 text-[#2563EB]"
                              : ""
                          }
                        `}
                      />

                    </button> */}


                    {/* PCB FABRICATION CHILDREN */}

                    {/* <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ${
                          openSubSection === "pcb-fabrication"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <div
                          className="
                            ml-3
                            border-l
                            border-[#E8EDF3]
                            pl-3
                          "
                        >

                          {navigation[1].items[1].children?.map(
                            (item) => (

                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() =>
                                  setMenuOpen(false)
                                }
                                className="
                                  group
                                  flex
                                  min-h-9
                                  items-center
                                  justify-between
                                  rounded-md
                                  px-3
                                  py-1.5
                                  text-[13px]
                                  font-normal
                                  text-[#94A3B8]
                                  transition-all
                                  duration-200
                                  hover:bg-[#FAFBFD]
                                  hover:text-[#2563EB]
                                "
                              >

                                <span>{item.label}</span>

                                <span
                                  className="
                                    text-[#CBD5E1]
                                    opacity-0
                                    transition-all
                                    duration-200
                                    group-hover:translate-x-1
                                    group-hover:opacity-100
                                    group-hover:text-[#F15A24]
                                  "
                                >
                                  →
                                </span>

                              </Link>

                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
 */}

        <Link
            href="/capabilities"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Capabilities</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>

          {/* =================================================
              DIVIDER
          ================================================== */}

          {/* <div className="my-4 border-t border-[#E2E8F0]" /> */}


          {/* =================================================
              COMPANY LINKS
          ================================================== */}

          <Link
            href="/industries"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Industries Served</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>

            <Link
            href="/certification"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Certification</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>


          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>About Us</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>


          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Contact Us</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>


          <Link
            href="/blogs"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Blogs</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>

            <Link
            href="/termsofuse"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              text-sm
              font-semibold
              text-[#334155]
              transition-all
              duration-200
              hover:bg-[#F8FAFC]
              hover:text-[#2563EB]
            "
          >

            <span>Terms of use</span>

            <span
              className="
                text-[#CBD5E1]
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#F15A24]
              "
            >
              →
            </span>

          </Link>


        </nav>

      </div>


      {/* =================================================
          SIDEBAR CTA
      ================================================== */}

      <div
        className="
          shrink-0
          border-t
          border-[#E2E8F0]
          bg-[#F8FAFC]
          p-5
          sm:p-6
        "
      >

        <Link
          href="/quick-quote"
          onClick={() => setMenuOpen(false)}
          className="
            group
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-[#F15A24]
            px-5
            text-sm
            font-bold
            text-white
            shadow-[0_10px_25px_rgba(241,90,36,0.18)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#E64A19]
            hover:shadow-[0_14px_30px_rgba(241,90,36,0.24)]
          "
        >

          <span>
            Start Your Project
          </span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </Link>

      </div>

    </aside>

  </div>
)}
    </>
  );
}