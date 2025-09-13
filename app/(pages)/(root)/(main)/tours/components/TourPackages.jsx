// components/TourPackages.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const PACKAGES = [
  {
    title: "Beauty of Solomon Island",
    location: "Africa Portugal Mexico",
    img: "/images/tours/tr1.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
  {
    title: "Believe In Your Mexico",
    location: "Paris, France",
    img: "/images/tours/tr2.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
  {
    title: "Proof That Bahamas Beauty",
    location: "Rome, Italy",
    img: "/images/tours/tr3.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
  {
    title: "Famous for its skyscrapers",
    location: "New York City, USA",
    img: "/images/tours/tr4.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
  {
    title: "An ancient Incan city",
    location: "Machu Picchu, Peru",
    img: "/images/tours/tr5.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
  {
    title: "Famous for its whitewashed",
    location: "Santorini, Greece",
    img: "/images/tours/tr6.jpg",
    price: "$4500",
    duration: "3 Day 2 Night",
    href: "/tour-details",
  },
];

export default function TourPackages() {
  return (
    <section>
      <div className="cs_height_140 cs_height_lg_80" />
      <div className="container mx-auto px-4">
        {/* Fallback grid if your cs_* grid isn't present */}
        <div className="row cs_gap_y_24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div key={p.title} className="col-lg-4">
              <div className="cs_card cs_style_3 cs_white_bg overflow-hidden rounded-lg">
                <Link
                  href="/tours"
                  className="cs_card_thumb relative block cs_zoom"
                >
                  <div className="relative block w-full aspect-[4/3] 2xl:h-[445px] lg:h-[445px]">
                    <Image
                      src={p.img}
                      alt="Package Thumb"
                      fill
                      className="object-cover cs_zoom_in"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="cs_package_badge cs_fs_18 cs_semibold cs_primary_color cs_primary_font position-absolute absolute left-3 top-3 rounded-md bg-white/90 px-3 py-1">
                    {p.duration}
                  </div>
                </Link>

                <div className="cs_card_content p-4">
                  <h2 className="cs_card_title cs_fs_24 cs_semibold hover:text-[#2ecc71] ">
                    <Link
                      href="/tours"
                      className="package-title"
                      style={{ color: "#000", fontFamily: "Playfair" }}
                    >
                      {p.title}
                    </Link>
                  </h2>

                  <p className="cs_card_subtitle mb-0 flex items-center gap-2">
                    <i
                      className="fa-solid fa-globe cs_accent_color"
                      style={{ color: "#2ecc71" }}
                      aria-hidden
                    />
                    <span>{p.location}</span>
                  </p>

                  <hr className="my-4" />

                  <div className="cs_card_action flex items-center justify-between">
                    <span className="cs_card_price cs_fs_24 cs_semibold cs_primary_color cs_primary_font mb-0">
                      {p.price}
                    </span>
                    <Link
                      href="/"
                      className="cs_btn cs_style_1 cs_fs_18 cs_semibold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_140 cs_height_lg_80" />
    </section>
  );
}
