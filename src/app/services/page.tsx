import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <section className="bg-[#062D82] py-24 text-white">
        <div className="container-flashline">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
            Solutions
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Electronics Manufacturing Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/75">
            Engineering, fabrication, assembly, testing and box-build
            capabilities under one manufacturing partner.
          </p>
        </div>
      </section>

      <section className="container-flashline py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Engineering Design", "/services/engineering-design"],
            ["PCB Fabrication", "/services/pcb-fabrication"],
            ["PCB Assembly", "/services/pcb-assembly"],
            ["Testing", "/services/testing"],
            ["Box Build", "/services/box-build"],
          ].map(([title, href]) => (
            <Link
              href={href}
              key={href}
              className="border border-slate-200 bg-white p-7 font-bold text-[#062D82] transition hover:-translate-y-1 hover:border-[#F4511E] hover:shadow-xl"
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}