import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  User,
} from "lucide-react";

import { blogs } from "@/lib/blogs";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {

  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#F5F8FC]">

        <section className="container-flashline py-32 text-center">

          <h1 className="text-4xl font-black text-[#062D82]">
            Blog Not Found
          </h1>

          <Link
            href="/new-blog"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              bg-[#F4511E]
              px-6
              py-3
              font-bold
              text-white
            "
          >
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>

        </section>

      </main>
    );
  }


  return (
    <main className="bg-white">

      {/* =====================================================
          ARTICLE HEADER
      ====================================================== */}

      <section className="border-b border-slate-200 bg-[#F5F8FC] mt-20">

        <div className="container-flashline py-14 lg:py-20">

          <Link
            href="/blogs"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[#062D82]
              transition-colors
              hover:text-[#F4511E]
            "
          >
            <ArrowLeft
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to all posts
          </Link>


          <div className="mt-10 max-w-5xl">

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">

              <span className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-[#F4511E]"
                />

                {blog.date}
              </span>

              <span className="flex items-center gap-2">
                <User
                  size={16}
                  className="text-[#F4511E]"
                />

                By {blog.author}
              </span>

            </div>


            {/* IMPORTANT:
                This keeps the first heading clearly visible.
            */}

            <h1
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.08]
                tracking-[-0.035em]
                text-[#062D82]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {blog.title}
            </h1>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE
      ====================================================== */}

      <section className="py-16 lg:py-24">

        <div className="container-flashline">

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">

            {/* =================================================
                MAIN ARTICLE
            ================================================== */}

            <article className="min-w-0">

              {/* FEATURED IMAGE */}

              <div className="relative mb-12 aspect-[16/7] overflow-hidden rounded-2xl bg-[#F5F8FC]">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                />

              </div>


              {/* ARTICLE CONTENT */}

              <div className="max-w-none">

                {blog.content.map((section, index) => (

                  <section
                    key={`${section.heading}-${index}`}
                    className="mb-10"
                  >

                    {section.heading && (
                      <h2
                        className="
                          mb-5
                          text-2xl
                          font-black
                          leading-tight
                          text-[#69B8DF]
                          sm:text-3xl
                        "
                      >
                        {section.heading}
                      </h2>
                    )}


                    <div className="space-y-5">

                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (

                          <p
                            key={paragraphIndex}
                            className="
                              text-base
                              leading-8
                              text-slate-600
                            "
                          >
                            {paragraph}
                          </p>

                        )
                      )}

                    </div>

                  </section>

                ))}

              </div>


              {/* =================================================
                  YOU MIGHT ALSO LIKE
              ================================================== */}

              <div className="mt-16 border-t border-slate-200 pt-10">

                <h3
                  className="
                    text-sm
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#69B8DF]
                  "
                >
                  You Might Also Like
                </h3>


                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {blogs
                    .filter((item) => item.slug !== blog.slug)
                    .map((item) => (

                      <Link
                        key={item.slug}
                        href={`/blogs/${item.slug}`}
                        className="
                          group
                          rounded-xl
                          border
                          border-slate-200
                          bg-[#F5F8FC]
                          p-5
                          transition-all
                          duration-300
                          hover:border-[#F4511E]
                          hover:bg-white
                          hover:shadow-lg
                        "
                      >

                        <div className="flex items-start justify-between gap-4">

                          <h4 className="font-bold leading-6 text-[#062D82] transition-colors group-hover:text-[#F4511E]">
                            {item.title}
                          </h4>

                          <ArrowRight
                            size={18}
                            className="
                              shrink-0
                              text-[#F4511E]
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />

                        </div>

                      </Link>

                    ))}

                </div>

              </div>


              {/* =================================================
                  COMMENTS
              ================================================== */}

              <CommentForm />

            </article>


            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="lg:sticky lg:top-28 lg:self-start">

              <div className="rounded-2xl border border-slate-200 bg-[#F5F8FC] p-6">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4511E]">
                  Recent Posts
                </p>


                <div className="mt-5 space-y-4">

                  {blogs.map((item) => (

                    <Link
                      key={item.slug}
                      href={`/blogs/${item.slug}`}
                      className="
                        group
                        block
                        border-b
                        border-slate-200
                        pb-4
                        last:border-0
                        last:pb-0
                      "
                    >

                      <span className="text-sm font-semibold leading-6 text-[#062D82] transition-colors group-hover:text-[#F4511E]">
                        {item.title}
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   COMMENT FORM
============================================================= */

function CommentForm() {

  return (
    <section className="mt-20 border-t border-slate-200 pt-10">

      <h3 className="text-2xl font-bold text-[#062D82]">
        Leave a Comment
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Your email address will not be published. Required fields
        are marked *
      </p>


      <form className="mt-7 space-y-6">

        {/* COMMENT */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Comment
          </label>

          <textarea
            rows={7}
            placeholder="Type here.."
            className="
              w-full
              resize-y
              rounded-lg
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-slate-700
              outline-none
              transition
              focus:border-[#1597E5]
              focus:ring-2
              focus:ring-[#1597E5]/10
            "
          />

        </div>


        {/* NAME / EMAIL / WEBSITE */}

        <div className="grid gap-5 md:grid-cols-3">

          <input
            type="text"
            placeholder="Name*"
            className="
              h-12
              rounded-lg
              border
              border-slate-200
              px-4
              text-sm
              outline-none
              transition
              focus:border-[#1597E5]
            "
          />

          <input
            type="email"
            placeholder="Email*"
            className="
              h-12
              rounded-lg
              border
              border-slate-200
              px-4
              text-sm
              outline-none
              transition
              focus:border-[#1597E5]
            "
          />

          <input
            type="text"
            placeholder="Website"
            className="
              h-12
              rounded-lg
              border
              border-slate-200
              px-4
              text-sm
              outline-none
              transition
              focus:border-[#1597E5]
            "
          />

        </div>


        {/* CHECKBOX */}

        <label className="flex items-start gap-3 text-sm text-slate-500">

          <input
            type="checkbox"
            className="mt-1 accent-[#062D82]"
          />

          <span>
            Save my name, email, and website in this browser for
            the next time I comment.
          </span>

        </label>


        {/* BUTTON */}

        <button
          type="submit"
          className="
            bg-[#062D82]
            px-6
            py-3
            text-sm
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#F4511E]
          "
        >
          Post Comment
        </button>

      </form>

    </section>
  );
}