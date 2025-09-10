// components/FeaturedSection.jsx
"use client";

import Image from "next/image";

const FEATURES = [
  {
    title: "Customer Delight",
    icon: "/images/icons/feature_icon_1.svg",
    desc: `We prioritize your happiness by delivering seamless service and unforgettable travel experiences.`,
  },
  {
    title: "Trusted Adventure",
    icon: "/images/icons/feature_icon_2.svg",
    desc: `Your journeys are safe, reliable, and planned with care for worry-free adventures.`,
  },
  {
    title: "Expert Guides",
    icon: "/images/icons/feature_icon_3.svg",
    desc: `Discover hidden gems with our knowledgeable, friendly, and passionate guides.`,
  },
  {
    title: "Time Flexibility",
    icon: "/images/icons/feature_icon_4.svg",
    desc: `Travel on your terms with flexible schedules tailored to your lifestyle.`,
  },
];

export default function FeaturedSection() {
  return (
    <section
      className="cs_featured cs_style_1 cs_bg_filed"
      style={{
        backgroundImage: 'url("/images/feature_bg.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cs_height_140 cs_height_lg_80" />

      <div className="container mx-auto px-4">
        {/* Responsive grid fallback if your cs_* grid isn’t present */}
        <div className="row cs_gap_y_40 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="col-lg-3 col-sm-6">
              <div className="cs_iconbox cs_style_1">
                <div className="cs_iconbox_icon cs_radius_15 cs_center">
                  <Image
                    src={f.icon}
                    alt={`${f.title} icon`}
                    width={64}
                    height={64}
                    priority={false}
                  />
                </div>

                <h2 className="cs_iconbox_title cs_fs_24 cs_semibold playfair">
                  {f.title}
                </h2>

                {/* Preserve line breaks without <br> using whitespace utility */}
                <p className="cs_iconbox_subtitle mb-0 whitespace-pre-line playfair">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs_height_133 cs_height_lg_80" />
    </section>
  );
}
