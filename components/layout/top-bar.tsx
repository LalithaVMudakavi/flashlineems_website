

"use client";

import { Mail, Phone, Users } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import Link from "next/link";

export function TopBar() {
  return (
    // <div className="relative z-[60] h-[66px] border-b border-white/[0.08] bg-[#031225] text-white">
    <div className="fixed left-0 right-0 top-0 z-[60] h-[58px] border-b border-white/[0.08] bg-[#031225] text-white">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-6 lg:px-16 xl:px-20">
        
        {/* =====================================================
            LEFT - CONTACT INFORMATION
        ====================================================== */}
        <div className="flex items-center gap-7">
          
          {/* EMAIL */}
          <a
            href="mailto:sales@flashlineems.com"
            className="group flex items-center gap-2.5 text-[14px] font-medium text-white/90 transition hover:text-[#f4511e]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f4511e] text-white">
              <Mail size={14} strokeWidth={2} />
            </span>

            <span>sales@flashlineems.com</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+918121020371"
            className="group hidden items-center gap-2.5 text-[14px] font-medium text-white/90 transition hover:text-[#f4511e] sm:flex"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f4511e] text-white">
              <Phone size={14} strokeWidth={2} />
            </span>

            <span>+91 8121020371</span>
          </a>
        </div>

        {/* =====================================================
            RIGHT - SOCIAL ICONS + QUICK QUOTE
        ====================================================== */}
        <div className="flex items-center gap-5">

          {/* ABOUT / PEOPLE */}
               {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/flashlineEMS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hidden text-[#475569] transition hover:text-[#f4511e] sm:block"
          >
            <BsFacebook size={17} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/flashline-ems/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden text-[#475569] transition hover:text-[#f4511e] sm:block"
          >
            <LiaLinkedin size={19} />
          </a>

          {/* TWITTER / X */}
          <a
            href="https://x.com/i/jf/onboarding/web?redirect_after_login=%2FFlashlineEMS%20%20&mode=login"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hidden text-[#475569] transition hover:text-[#f4511e] sm:block"
          >
            <BsTwitter size={17} />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/flashlineems/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden text-[#475569] transition hover:text-[#f4511e] sm:block"
          >
            <BsInstagram size={17} />
          </a>

          {/* QUICK QUOTE */}
          <Link
            href="/quick-quote"
            className="ml-2 inline-flex h-[32px] items-center gap-3 rounded-md bg-[#f4511e] px-6 text-[14px] font-bold text-white shadow-[0_8px_25px_rgba(244,81,30,0.25)] transition duration-300 hover:bg-[#ff6428]"
          >
            <span>Quick Quote</span>

            <span className="text-[16px] leading-none">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

