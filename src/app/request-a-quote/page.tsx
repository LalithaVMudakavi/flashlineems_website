// "use client";

// import { ChangeEvent, FormEvent, useState } from "react";

// const checks = [
//   "DFM (Design for Manufacturing) Check",
//   "DFA (Design for Assembly) Check",
//   "DFT (Design for Testability) Check",
//   "DRC (Design Rule Check)",
//   "BOM (Bill of Material) Check",
// ];

// export default function RequestQuotePage() {
//   const [message, setMessage] = useState("");
//   const [fileName, setFileName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
//     setFileName(event.target.files?.[0]?.name ?? "");
//   }

//   return (
//     <main className="min-h-screen bg-[#F5F8FC]">
//       <section className="bg-[#062D82] pb-20 pt-28 mt-10 text-white lg:pb-24 lg:pt-36">
//         <div className="container-flashline">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//             Start your free Quote
//           </p>
//           <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
//             Start your free quote
//           </h1>
//           <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100/80 sm:text-lg">
//             Our team of engineers will conduct these checks to ensure a quick
//             and error-free manufacturing process.
//           </p>
//         </div>
//       </section>

//       <section className="container-flashline py-16 lg:py-24">
//         <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//           <div>
//             <h2 className="text-3xl font-black text-[#062D82] sm:text-4xl">
//               What we check
//             </h2>
//             <ul className="mt-7 space-y-4 text-slate-600">
//               {checks.map((check) => (
//                 <li key={check} className="flex gap-3 leading-7">
//                   <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F4511E]" />
//                   <span>{check}</span>
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="#quote-form"
//               className="mt-8 inline-flex font-bold text-[#F4511E] transition hover:text-[#062D82]"
//             >
//               Looking for more info
//               <span className="ml-2" aria-hidden="true">
//                 →
//               </span>
//             </a>

//             <div className="mt-10 border-t border-slate-200 pt-7">
//               <a
//                 href="tel:+918121020371"
//                 className="block font-bold text-[#062D82] transition hover:text-[#F4511E]"
//               >
//                 +91 8121020371
//               </a>
//               <a
//                 href="mailto:sales@flashlineems.com"
//                 className="mt-3 block text-slate-600 transition hover:text-[#F4511E]"
//               >
//                 sales@flashlineems.com
//               </a>
//             </div>
//           </div>

//           <form
//             id="quote-form"
//             onSubmit={handleSubmit}
//             className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
//           >
//             <div className="grid gap-5 sm:grid-cols-2">
//               <Field label="Company Name" name="company" required />
//               <Field label="Email Address" name="email" type="email" required />
//               <Field label="Full Name" name="fullName" />
//               <Field label="Phone Number" name="phone" type="tel" />
//               <Field label="Quantity" name="quantity" type="number" />
//             </div>

//             <div className="mt-5">
//               <label
//                 htmlFor="message"
//                 className="mb-2 block text-sm font-bold text-[#062D82]"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 maxLength={180}
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 rows={5}
//                 className="w-full resize-y border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/20"
//               />
//               <p className="mt-1 text-right text-xs text-slate-500">
//                 {message.length} / 180
//               </p>
//             </div>

//             <div className="mt-4">
//               <label
//                 htmlFor="file"
//                 className="mb-2 block text-sm font-bold text-[#062D82]"
//               >
//                 Upload file
//               </label>
//               <label
//                 htmlFor="file"
//                 className="flex min-h-14 cursor-pointer items-center justify-between border border-dashed border-slate-300 px-4 text-sm text-slate-500 transition hover:border-[#F4511E] hover:text-[#062D82]"
//               >
//                 <span>{fileName || "Drag and Drop (or) Choose Files"}</span>
//                 <span className="font-bold text-[#F4511E]">Browse</span>
//               </label>
//               <input
//                 id="file"
//                 name="file"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="sr-only"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-7 min-h-12 bg-[#F4511E] px-8 text-sm font-bold text-white transition hover:bg-[#062D82] focus:outline-none focus:ring-2 focus:ring-[#F4511E] focus:ring-offset-2"
//             >
//               SUBMIT
//             </button>
//             {submitted && (
//               <p role="status" className="mt-4 text-sm font-semibold text-[#062D82]">
//                 Thank you. Our team will review your requirements and contact you.
//               </p>
//             )}
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }

// function Field({
//   label,
//   name,
//   type = "text",
//   required = false,
// }: {
//   label: string;
//   name: string;
//   type?: "email" | "number" | "tel" | "text";
//   required?: boolean;
// }) {
//   return (
//     <div>
//       <label htmlFor={name} className="sr-only">
//         {label}
//         {required ? " *" : ""}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required={required}
//         placeholder={`${label}${required ? " *" : ""}`}
//         className="h-12 w-full border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/20"
//       />
//     </div>
//   );
// }


"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import {
  ArrowRight,
  Check,
  FileUp,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";


const checks = [
  "DFM (Design for Manufacturing) Check",
  "DFA (Design for Assembly) Check",
  "DFT (Design for Testability) Check",
  "DRC (Design Rule Check)",
  "BOM (Bill of Material) Check",
];


export default function RequestQuotePage() {
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }


  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setFileName(
      event.target.files?.[0]?.name ?? ""
    );
  }


  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#334155]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-24 mt-20">

        {/* Background grid */}

        <div className="pointer-events-none absolute inset-0 pcb-grid opacity-[0.018]" />

        {/* Soft blue glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-0
            h-96
            w-96
            rounded-full
            bg-[#2563EB]/[0.045]
            blur-[110px]
          "
        />

        {/* Soft orange glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#F15A24]/[0.035]
            blur-[100px]
          "
        />


        <div className="container-flashline relative">

          {/* Eyebrow */}

          <div className="flex items-center gap-3">

            <span className="h-[2px] w-9 rounded-full bg-[#F15A24]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#F15A24]
              "
            >
              Start Your Free Quote
            </span>

          </div>


          {/* Heading */}

          <h1
            className="
              mt-5
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-[#334155]
              sm:text-5xl
              lg:text-[60px]
            "
          >
            Let's build your next
            <span className="block text-[#F15A24]">
              electronics product.
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-[15px]
              leading-8
              text-[#64748B]
              sm:text-[17px]
            "
          >
            Our team of engineers will conduct these checks
            to ensure a quick and error-free manufacturing
            process.
          </p>


          {/* Small trust indicators */}

          <div className="mt-8 flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                <ShieldCheck size={15} />
              </span>

              Engineering review

            </div>


            <div className="hidden h-5 w-px bg-[#E2E8F0] sm:block" />


            <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF4ED] text-[#F15A24]">
                <Check size={15} />
              </span>

              Manufacturing-ready checks

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE CONTENT
      ====================================================== */}

      <section className="relative py-6 lg:py-10">

        <div className="container-flashline">

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-16
            "
          >

            {/* =================================================
                LEFT — WHAT WE CHECK
            ================================================== */}

            <div>

              <div
                className="
                  sticky
                  top-28
                "
              >

                {/* Label */}

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-7 rounded-full bg-[#2563EB]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#2563EB]
                    "
                  >
                    Engineering Review
                  </span>

                </div>


                {/* Heading */}

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-black
                    leading-tight
                    tracking-[-0.035em]
                    text-[#334155]
                    sm:text-4xl
                  "
                >
                  What we
                  <span className="text-[#F15A24]">
                    {" "}check
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    max-w-lg
                    text-[14px]
                    leading-7
                    text-[#64748B]
                  "
                >
                  Before production begins, our engineering
                  team reviews your design to identify
                  potential manufacturing and assembly
                  issues early.
                </p>


                {/* CHECK LIST */}

                <div className="mt-8 space-y-3">

                  {checks.map((check, index) => (

                    <div
                      key={check}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-[#E2E8F0]
                        bg-white
                        px-4
                        py-4
                        shadow-[0_5px_20px_rgba(38,54,77,0.035)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#2563EB]/20
                        hover:shadow-[0_10px_25px_rgba(38,54,77,0.07)]
                      "
                    >

                      {/* Number */}

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#F8FAFC]
                          text-[10px]
                          font-black
                          text-[#94A3B8]
                          ring-1
                          ring-[#E2E8F0]
                          transition
                          group-hover:bg-[#EFF6FF]
                          group-hover:text-[#2563EB]
                          group-hover:ring-[#2563EB]/10
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>


                      {/* Check icon */}

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#FFF4ED]
                          text-[#F15A24]
                        "
                      >
                        <Check size={14} strokeWidth={2.5} />
                      </span>


                      {/* Text */}

                      <span
                        className="
                          text-[13px]
                          font-semibold
                          leading-5
                          text-[#475569]
                          transition-colors
                          group-hover:text-[#334155]
                        "
                      >
                        {check}
                      </span>

                    </div>

                  ))}

                </div>


                {/* CONTACT CARD */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-[#E2E8F0]
                    bg-white
                    p-5
                    shadow-[0_8px_25px_rgba(38,54,77,0.045)]
                  "
                >

                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                    Need more information?
                  </div>


                  <div className="mt-4 space-y-3">

                    <a
                      href="tel:+918121020371"
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-bold
                        text-[#334155]
                        transition
                        hover:text-[#2563EB]
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#EFF6FF]
                          text-[#2563EB]
                        "
                      >
                        <Phone size={16} />
                      </span>

                      +91 8121020371

                    </a>


                    <a
                      href="mailto:sales@flashlineems.com"
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-medium
                        text-[#64748B]
                        transition
                        hover:text-[#F15A24]
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#FFF4ED]
                          text-[#F15A24]
                        "
                      >
                        <Mail size={16} />
                      </span>

                      sales@flashlineems.com

                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — FORM
            ================================================== */}

            <div>

              <form
                id="quote-form"
                onSubmit={handleSubmit}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#E2E8F0]
                  bg-white
                  p-6
                  shadow-[0_15px_50px_rgba(38,54,77,0.07)]
                  sm:p-8
                  lg:p-10
                "
              >

                {/* Top accent */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1
                    bg-gradient-to-r
                    from-[#F15A24]
                    via-[#2563EB]
                    to-[#F15A24]
                  "
                />


                {/* Form header */}

                <div className="border-b border-[#E2E8F0] pb-6">

                  <div className="flex items-center justify-between gap-5">

                    <div>

                      <div
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#2563EB]
                        "
                      >
                        Project Details
                      </div>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-black
                          tracking-[-0.025em]
                          text-[#334155]
                        "
                      >
                        Tell us about your project
                      </h3>

                    </div>


                    <div
                      className="
                        hidden
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#FFF4ED]
                        text-[#F15A24]
                        sm:flex
                      "
                    >
                      <FileUp size={21} />
                    </div>

                  </div>


                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    Share your requirements and our team
                    will get back to you with the next steps.
                  </p>

                </div>


                {/* FORM FIELDS */}

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <Field
                    label="Company Name"
                    name="company"
                    required
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    label="Full Name"
                    name="fullName"
                  />

                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                  />

                  <Field
                    label="Quantity"
                    name="quantity"
                    type="number"
                  />

                </div>


                {/* MESSAGE */}

                <div className="mt-5">

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#475569]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    maxLength={180}
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    rows={5}
                    placeholder="Tell us about your PCB, assembly or box build requirements..."
                    className="
                      w-full
                      resize-y
                      rounded-xl
                      border
                      border-[#CBD5E1]
                      bg-[#FCFDFE]
                      px-4
                      py-3.5
                      text-sm
                      text-[#334155]
                      outline-none
                      transition-all
                      placeholder:text-[#94A3B8]
                      focus:border-[#2563EB]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2563EB]/[0.08]
                    "
                  />

                  <p className="mt-1.5 text-right text-[11px] text-[#94A3B8]">
                    {message.length} / 180
                  </p>

                </div>


                {/* FILE UPLOAD */}

                <div className="mt-5">

                  <label
                    htmlFor="file"
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#475569]
                    "
                  >
                    Upload File
                  </label>


                  <label
                    htmlFor="file"
                    className="
                      group
                      flex
                      min-h-[72px]
                      cursor-pointer
                      items-center
                      justify-between
                      gap-4
                      rounded-xl
                      border
                      border-dashed
                      border-[#CBD5E1]
                      bg-[#FAFBFD]
                      px-4
                      transition-all
                      duration-300
                      hover:border-[#2563EB]/40
                      hover:bg-[#F8FAFC]
                    "
                  >

                    <div className="flex min-w-0 items-center gap-3">

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#EFF6FF]
                          text-[#2563EB]
                          transition
                          group-hover:bg-[#FFF4ED]
                          group-hover:text-[#F15A24]
                        "
                      >
                        <FileUp size={18} />
                      </span>


                      <span className="min-w-0">

                        <span
                          className="
                            block
                            truncate
                            text-sm
                            font-semibold
                            text-[#475569]
                          "
                        >
                          {fileName ||
                            "Drag and drop or choose a file"}
                        </span>

                        <span className="mt-0.5 block text-[11px] text-[#94A3B8]">
                          Upload your PCB, BOM or project files
                        </span>

                      </span>

                    </div>


                    <span
                      className="
                        shrink-0
                        rounded-lg
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-[#2563EB]
                        shadow-sm
                        ring-1
                        ring-[#E2E8F0]
                        transition
                        group-hover:text-[#F15A24]
                      "
                    >
                      Browse
                    </span>

                  </label>


                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    className="sr-only"
                  />

                </div>


                {/* SUBMIT */}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-sm text-[11px] leading-5 text-[#94A3B8]">
                    By submitting this form, you can share
                    your project requirements directly with
                    our engineering team.
                  </p>


                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      min-h-[52px]
                      shrink-0
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-[#F15A24]
                      px-7
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(241,90,36,0.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#E64A19]
                      hover:shadow-[0_14px_30px_rgba(241,90,36,0.24)]
                      focus:outline-none
                      focus:ring-4
                      focus:ring-[#F15A24]/20
                    "
                  >

                    <span>
                      Submit Request
                    </span>

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </button>

                </div>


                {/* SUCCESS MESSAGE */}

                {submitted && (

                  <div
                    role="status"
                    className="
                      mt-6
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-[#DDE8F5]
                      bg-[#EFF6FF]
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      text-[#2563EB]
                    "
                  >

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#2563EB]
                        text-white
                      "
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span>
                      Thank you. Our team will review your
                      requirements and contact you.
                    </span>

                  </div>

                )}

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FORM FIELD
========================================================= */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: "email" | "number" | "tel" | "text";
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-xs
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#475569]
        "
      >
        {label}
        {required && (
          <span className="ml-1 text-[#F15A24]">
            *
          </span>
        )}
      </label>


      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-[#CBD5E1]
          bg-[#FCFDFE]
          px-4
          text-sm
          text-[#334155]
          outline-none
          transition-all
          placeholder:text-[#94A3B8]
          focus:border-[#2563EB]/50
          focus:bg-white
          focus:ring-4
          focus:ring-[#2563EB]/[0.08]
        "
      />

    </div>
  );
}