// "use client";

// import { Mail, MapPin, Phone } from "lucide-react";
// import { FormEvent, useState } from "react";

// const address =
//   "Flashline EMS private limited, S 58-59, E City, Maheshwaram, Ranga Reddy District, Hyderabad, Telangana State - 501 359";

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmitted(true);
//     event.currentTarget.reset();
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       <section className="bg-[#062D82] pb-20 pt-28 mt-10 text-white lg:pb-24 lg:pt-36">
//         <div className="container-flashline">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//             Contact
//           </p>
//           <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
//             Let&apos;s build what&apos;s next.
//           </h1>
//           <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
//             Tell us about your electronics manufacturing requirements and our
//             team will get back to you.
//           </p>
//         </div>
//       </section>

//       <section className="container-flashline py-16 lg:py-24">
//         <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//               Get in touch
//             </p>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-[#062D82] sm:text-4xl">
//               We&apos;re here to help.
//             </h2>
//             <p className="mt-5 leading-8 text-slate-600">
//               Connect with our team to discuss your next prototype, production
//               run, or end-to-end electronics project.
//             </p>

//             <div className="mt-8 space-y-6">
//               <div className="flex gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4511E]/10 text-[#F4511E]">
//                   <MapPin size={20} />
//                 </span>
//                 <div>
//                   <p className="font-bold text-[#062D82]">Address</p>
//                   <p className="mt-1 max-w-sm leading-7 text-slate-600">
//                     {address}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4511E]/10 text-[#F4511E]">
//                   <Mail size={20} />
//                 </span>
//                 <div>
//                   <p className="font-bold text-[#062D82]">Email</p>
//                   <a
//                     href="mailto:sales@flashlineems.com"
//                     className="mt-1 block text-slate-600 transition hover:text-[#F4511E]"
//                   >
//                     sales@flashlineems.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4511E]/10 text-[#F4511E]">
//                   <Phone size={20} />
//                 </span>
//                 <div>
//                   <p className="font-bold text-[#062D82]">Phone</p>
//                   <a
//                     href="tel:+918121020371"
//                     className="mt-1 block text-slate-600 transition hover:text-[#F4511E]"
//                   >
//                     +91 8121020371
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="border border-slate-200 bg-[#F5F8FC] p-6 shadow-sm sm:p-8"
//           >
//             <div className="grid gap-5 sm:grid-cols-2">
//               <Field label="Name" name="name" type="text" />
//               <Field label="Email" name="email" type="email" />
//             </div>
//             <div className="mt-5">
//               <Field label="Subject" name="subject" type="text" />
//             </div>
//             <div className="mt-5">
//               <label
//                 htmlFor="message"
//                 className="mb-2 block text-sm font-bold text-[#062D82]"
//               >
//                 Comment or Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={6}
//                 className="w-full resize-y border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/20"
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#F4511E] px-7 font-bold text-white transition hover:bg-[#062D82] focus:outline-none focus:ring-2 focus:ring-[#F4511E] focus:ring-offset-2"
//             >
//               Submit
//             </button>
//             {submitted && (
//               <p role="status" className="mt-4 text-sm font-semibold text-[#062D82]">
//                 Thank you. Your message has been received.
//               </p>
//             )}
//           </form>
//         </div>
//       </section>

//       <section className="bg-[#F5F8FC] py-16 lg:py-24">
//         <div className="container-flashline">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4511E]">
//             Location
//           </p>
//           <h2 className="mt-4 text-3xl font-black text-[#062D82] sm:text-4xl">
//             Find us
//           </h2>
//           <div className="mt-8 overflow-hidden border border-slate-200 bg-white shadow-sm">
//             <iframe
//               title="Flashline EMS location map"
//               src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
//               className="h-[360px] w-full border-0 sm:h-[460px]"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function Field({
//   label,
//   name,
//   type,
// }: {
//   label: string;
//   name: string;
//   type: "email" | "text";
// }) {
//   return (
//     <div className="relative">
//       <label htmlFor={name} className="sr-only">
//         {label}
//       </label>
//         <input
//           id={name}
//           name={name}
//           type={type}
//           required
//           placeholder={`${label} *`}
//           className="h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#F4511E] focus:ring-2 focus:ring-[#F4511E]/20"
//         />
//     </div>
//   );
// }


"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const address =
  "Flashline EMS private limited, S 58-59, E City, Maheshwaram, Ranga Reddy District, Hyderabad, Telangana State - 501 359";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#334155]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-white pb-20 pt-28 lg:pb-24 lg:pt-36 mt-20">

        {/* Technical grid */}

        <div className="pointer-events-none absolute inset-0 pcb-grid opacity-[0.018]" />

        {/* Blue glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2563EB]/[0.045]
            blur-[120px]
          "
        />

        {/* Orange glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#F15A24]/[0.035]
            blur-[110px]
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
              Contact
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
            Let&apos;s build what&apos;s
            <span className="block text-[#F15A24]">
              next.
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
            Tell us about your electronics manufacturing
            requirements and our team will get back to you.
          </p>


          {/* Trust indicators */}

          <div className="mt-8 flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#EFF6FF]
                  text-[#2563EB]
                "
              >
                <Check size={15} strokeWidth={2.5} />
              </span>

              Engineering support

            </div>


            <div className="hidden h-5 w-px bg-[#E2E8F0] sm:block" />


            <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#FFF4ED]
                  text-[#F15A24]
                "
              >
                <Check size={15} strokeWidth={2.5} />
              </span>

              End-to-end manufacturing

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT + FORM
      ========================================================== */}

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

            {/* =====================================================
                LEFT — CONTACT INFORMATION
            ====================================================== */}

            <div>

              <div className="lg:sticky lg:top-28">

                {/* Label */}

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-8 rounded-full bg-[#2563EB]" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#2563EB]
                    "
                  >
                    Get in touch
                  </span>

                </div>


                {/* Heading */}

                <h2
                  className="
                    mt-5
                    text-3xl
                    font-black
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-[#334155]
                    sm:text-4xl
                  "
                >
                  We&apos;re here
                  <span className="text-[#F15A24]">
                    {" "}to help.
                  </span>
                </h2>


                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-lg
                    text-[15px]
                    leading-7
                    text-[#64748B]
                  "
                >
                  Connect with our team to discuss your next
                  prototype, production run, or end-to-end
                  electronics project.
                </p>


                {/* =================================================
                    CONTACT CARDS
                ================================================== */}

                <div className="mt-8 space-y-3">


                  {/* ADDRESS */}

                  <div
                    className="
                      group
                      rounded-2xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      p-5
                      shadow-[0_8px_25px_rgba(38,54,77,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#2563EB]/20
                      hover:shadow-[0_12px_30px_rgba(38,54,77,0.07)]
                    "
                  >

                    <div className="flex gap-4">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#EFF6FF]
                          text-[#2563EB]
                        "
                      >
                        <MapPin size={20} strokeWidth={1.7} />
                      </div>


                      <div>

                        <p className="text-sm font-black text-[#334155]">
                          Address
                        </p>

                        <p className="mt-1.5 text-[13px] leading-6 text-[#64748B]">
                          {address}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* EMAIL */}

                  <a
                    href="mailto:sales@flashlineems.com"
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      p-5
                      shadow-[0_8px_25px_rgba(38,54,77,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#F15A24]/20
                      hover:shadow-[0_12px_30px_rgba(38,54,77,0.07)]
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#FFF4ED]
                        text-[#F15A24]
                      "
                    >
                      <Mail size={20} strokeWidth={1.7} />
                    </div>


                    <div>

                      <p className="text-sm font-black text-[#334155]">
                        Email
                      </p>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          font-medium
                          text-[#64748B]
                          transition
                          group-hover:text-[#F15A24]
                        "
                      >
                        sales@flashlineems.com
                      </p>

                    </div>

                  </a>


                  {/* PHONE */}

                  <a
                    href="tel:+918121020371"
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      p-5
                      shadow-[0_8px_25px_rgba(38,54,77,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#2563EB]/20
                      hover:shadow-[0_12px_30px_rgba(38,54,77,0.07)]
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#EFF6FF]
                        text-[#2563EB]
                      "
                    >
                      <Phone size={20} strokeWidth={1.7} />
                    </div>


                    <div>

                      <p className="text-sm font-black text-[#334155]">
                        Phone
                      </p>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          font-medium
                          text-[#64748B]
                          transition
                          group-hover:text-[#2563EB]
                        "
                      >
                        +91 8121020371
                      </p>

                    </div>

                  </a>

                </div>


                {/* Small reassurance */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#E2E8F0]
                    bg-[#F8FAFC]
                    px-4
                    py-3
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-[#F15A24]" />

                  <span className="text-xs font-semibold text-[#64748B]">
                    Our team is ready to discuss your requirements.
                  </span>

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT — CONTACT FORM
            ====================================================== */}

            <div>

              <form
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


                {/* Form heading */}

                <div className="border-b border-[#E2E8F0] pb-6">

                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F15A24]">
                    Send us a message
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

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    Fill in your details and our team will
                    get back to you shortly.
                  </p>

                </div>


                {/* Fields */}

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <Field
                    label="Name"
                    name="name"
                    type="text"
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                  />

                </div>


                {/* Subject */}

                <div className="mt-5">

                  <Field
                    label="Subject"
                    name="subject"
                    type="text"
                  />

                </div>


                {/* Message */}

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
                    Comment or Message
                    <span className="ml-1 text-[#F15A24]">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help with your electronics manufacturing requirements..."
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

                </div>


                {/* Submit */}

                <div className="mt-7">

                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      min-h-[52px]
                      w-full
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
                      hover:shadow-[0_15px_30px_rgba(241,90,36,0.24)]
                      focus:outline-none
                      focus:ring-4
                      focus:ring-[#F15A24]/20
                    "
                  >

                    <span>
                      Submit Message
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


                {/* Success */}

                {submitted && (

                  <div
                    role="status"
                    className="
                      mt-5
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
                      <Check
                        size={13}
                        strokeWidth={3}
                      />
                    </span>

                    <span>
                      Thank you. Your message has been
                      received. Our team will get back to you.
                    </span>

                  </div>

                )}

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#2563EB]/[0.035]
            blur-[100px]
          "
        />


        <div className="container-flashline relative">

          {/* Header */}

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 rounded-full bg-[#F15A24]" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F15A24]
                  "
                >
                  Location
                </span>

              </div>


              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  tracking-[-0.035em]
                  text-[#334155]
                  sm:text-4xl
                "
              >
                Find us
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                Visit our manufacturing facility in Hyderabad,
                Telangana.
              </p>

            </div>


            {/* Address pill */}

            <div
              className="
                hidden
                max-w-md
                items-center
                gap-3
                rounded-xl
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-4
                py-3
                md:flex
              "
            >

              <MapPin
                size={17}
                className="shrink-0 text-[#F15A24]"
              />

              <span className="text-xs leading-5 text-[#64748B]">
                Hyderabad, Telangana, India
              </span>

            </div>

          </div>


          {/* Map */}

          <div
            className="
              mt-8
              overflow-hidden
              rounded-[22px]
              border
              border-[#E2E8F0]
              bg-white
              p-2
              shadow-[0_15px_45px_rgba(38,54,77,0.07)]
            "
          >

            <div className="overflow-hidden rounded-[16px]">

              <iframe
                title="Flashline EMS location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                className="
                  h-[360px]
                  w-full
                  border-0
                  sm:h-[460px]
                "
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

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
  type,
}: {
  label: string;
  name: string;
  type: "email" | "text";
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

        <span className="ml-1 text-[#F15A24]">
          *
        </span>

      </label>


      <input
        id={name}
        name={name}
        type={type}
        required
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