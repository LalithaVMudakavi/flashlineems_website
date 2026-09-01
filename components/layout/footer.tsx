import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const solutionLinks = [
  ["Engineering Design", "/services/engineering-design"],
  ["PCB Fabrication", "/services/pcb-fabrication"],
  ["PCB Assembly", "/services/pcb-assembly"],
  ["Testing", "/services/testing"],
  ["Box Build", "/services/box-build"],
];

const capabilityLinks = [
  ["HDI PCB", "/capabilities/hdi-pcb"],
  ["Rigid PCB", "/capabilities/rigid-pcb"],
  ["Rigid-Flex PCB", "/capabilities/rigid-flex-pcb"],
  ["Metal-Core PCB", "/capabilities/metal-core-pcb"],
  ["SMT Assembly", "/capabilities/smt-assembly"],
];

const companyLinks = [
  ["About Us", "/about"],
  ["Facility", "/about/facility"],
  ["Certifications", "/about/certifications"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/flashlineEMS", Icon: BsFacebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/flashline-ems/", Icon: LiaLinkedin },
  { label: "X", href: "https://x.com/i/jf/onboarding/web?redirect_after_login=%2FFlashlineEMS%20%20&mode=login", Icon: BsTwitter },
  { label: "Instagram", href: "https://www.instagram.com/flashlineems/", Icon: BsInstagram },
];

export function Footer() {
  return (
    // <footer className="relative overflow-hidden border-t border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(6,45,130,0.08),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#edf4ff_100%)] text-slate-700">
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gray-100 text-slate-700">
      <div className="container-flashline py-14 lg:py-16">
        <div className="rounded-[30px] border border-slate-200 bg-white/80 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
            <div className="lg:pr-8">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="Flashline EMS"
                  width={260}
                  height={80}
                  priority
                  className="h-auto w-[200px] sm:w-[220px]"
                />
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
                End-to-end electronics manufacturing services spanning engineering,
                PCB fabrication, assembly, testing, and box build.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#062d82] text-white shadow-lg shadow-[#062d82]/20">
                  <ArrowUpRight size={18} />
                </span>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#062d82] transition hover:text-[#f4511e]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <FooterColumn title="Solutions" links={solutionLinks} />
            <FooterColumn title="Capabilities" links={capabilityLinks} />
            <FooterColumn title="Company" links={companyLinks} />

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Contact
              </h3>

              <div className="mt-6 space-y-4">
                <ContactInfo
                  icon={<Mail size={16} />}
                  label="Send Us Email"
                  href="mailto:sales@flashlineems.com"
                  value="sales@flashlineems.com"
                />

                <ContactInfo
                  icon={<Phone size={16} />}
                  label="Call Us today"
                  href="tel:+918121020371"
                  value="+91 8121020371"
                />

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f9fbff] p-3 text-sm text-slate-600 shadow-sm">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#062d82]">
                    <MapPin size={16} />
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Visit us
                    </p>
                    <p className="mt-1 leading-6">
                      Hyderabad, Telangana
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Follow us
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-[#f4511e] hover:bg-[#fff3ef] hover:text-[#f4511e] hover:shadow-md"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container-flashline flex flex-col gap-3 py-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flashline EMS All rights reserved.</p>

          <Link
           href="/termsofuse"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#062d82] transition hover:text-[#f4511e]"
          >
            Privacy Statement - Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="block text-sm font-medium text-slate-600 transition duration-300 hover:translate-x-1 hover:text-[#f4511e]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ContactInfo({
  icon,
  label,
  href,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f9fbff] p-3 text-sm text-slate-600 shadow-sm transition duration-300 hover:border-[#f4511e]/60 hover:bg-[#fffaf7] hover:shadow-md"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fff2ec] text-[#f4511e]">
        {icon}
      </span>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {label}
        </p>
        <p className="mt-1 font-medium text-slate-700">{value}</p>
      </div>
    </a>
  );
}
