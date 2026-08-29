export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <section className="bg-[#062D82] py-24 text-white">
        <div className="container-flashline">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4511E]">
            Capabilities
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Advanced Electronics Manufacturing
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100/75">
            Explore Flashline&apos;s PCB, assembly, inspection, testing and
            manufacturing capabilities.
          </p>
        </div>
      </section>

      <section className="container-flashline py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "HDI PCB",
            "Rigid PCB",
            "Rigid-Flex PCB",
            "Flex PCB",
            "Metal-Core PCB",
            "SMT Assembly",
            "Inspection",
            "Testing",
            "Traceability",
          ].map((item) => (
            <div
              key={item}
              className="border border-slate-200 bg-white p-6 font-bold text-[#062D82] transition hover:border-[#1597E5] hover:shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}