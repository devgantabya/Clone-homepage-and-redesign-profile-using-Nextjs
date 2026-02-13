import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#fbf6f1]">
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-[#223614] text-3xl md:text-[41px] font-bold leading-tight">
                Lilac Template
              </h2>

              <p className="text-[#223614] text-[19px] leading-7 mt-6">
                123 Example Road <br />
                Minneapolis, MN
              </p>

              <div className="mt-6 space-y-2">
                <a
                  href="mailto:email@example.com"
                  className="underline text-[#223614] text-[19px]"
                >
                  email@example.com
                </a>
                <br />
                <a
                  href="tel:5555555555"
                  className="underline text-[#223614] text-[19px]"
                >
                  (555) 555-5555
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-44">
              <div className="text-center md:text-left">
                <h3 className="text-[#223614] text-2xl md:text-[32px] font-bold">
                  Hours
                </h3>
                <p className="text-[#223614] text-[19px] leading-7 mt-4">
                  Monday - Friday <br />
                  10am - 6pm
                </p>
              </div>

              <div className="text-center md:text-right">
                <h3 className="text-[#223614] text-2xl md:text-[32px] font-bold">
                  Find
                </h3>
                <ul className="mt-4">
                  <li className="underline text-[#223614] text-[19px] font-medium">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="underline text-[#223614] text-[19px]">
                    <Link href="https://lilac-template.squarespace.com/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="underline text-[#223614] text-[19px]">
                    <Link href="https://lilac-template.squarespace.com/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e5e0da] pt-10 pb-4 px-5">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <li>
            <Link
              href="https://lilac-template.squarespace.com/privacy-policy"
              className="underline text-black text-base"
            >
              Privacy & Cookies Policy
            </Link>
          </li>
          <li>
            <Link
              href="https://lilac-template.squarespace.com/good-faith-estimate"
              className="underline text-black text-base"
            >
              Good Faith Estimate
            </Link>
          </li>
          <li>
            <Link
              href="https://lilac-template.squarespace.com/terms-conditions"
              className="underline text-black text-base"
            >
              Website Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              href="https://lilac-template.squarespace.com/disclaimer"
              className="underline text-black text-base"
            >
              Disclaimer
            </Link>
          </li>
        </ul>

        <p className="text-center text-[#223614] text-base mt-4">
          Website Template Credits: <br className="md:hidden" />
          <span className="font-medium underline text-black">
            <Link
              href="https://www.gobloomcreative.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Bloom Creative
            </Link>
          </span>
        </p>

        <p className="text-center text-[#223614] text-base mt-4 md:mt-12">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
