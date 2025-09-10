// app/_components/PackagesSection.jsx
"use client";

export default function PackagesSection() {
  const packages = [
    {
      img: "/images/package_img_1.jpg",
      location: "Paris",
      days: "07 Days",
      rating: "5K+ Rating",
      title: "Aegean Adventure",
      price: "$370",
    },
    {
      img: "/images/package_img_2.jpg",
      location: "Paris",
      days: "07 Days",
      rating: "4.5K+ Rating",
      title: "Aegean Adventure",
      price: "$380",
    },
    {
      img: "/images/package_img_3.jpg",
      location: "Paris",
      days: "07 Days",
      rating: "4K+ Rating",
      title: "Aegean Adventure",
      price: "$390",
    },
    {
      img: "/images/package_img_4.jpg",
      location: "Paris",
      days: "07 Days",
      rating: "5K+ Rating",
      title: "Aegean Adventure",
      price: "$360",
    },
  ];

  return (
    <section>
      {/* spacing */}
      <div className="cs_height_135 cs_height_lg_75" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h3
            className="cs_section_title_up cs_ternary_font cs_accent_color cs_normal cs_fs_24"
            style={{ color: "#2ecc71", fontFamily: "Satisfy" }}
          >
            CHOOSE YOUR PACKAGE
          </h3>
          <h2
            className="cs_section_title cs_semibold cs_fs_56 mb-0 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
            style={{ fontFamily: "Playfair" }}
          >
            Popular Tours Packages
          </h2>
        </div>
        <div className="cs_height_55 cs_height_lg_40" />
      </div>

      <div className="container-fluid">
        <div className="row cs_gap_y_24">
          {packages.map((p, i) => (
            <div className="col-lg-3 col-sm-6" key={i}>
              <div
                className="cs_card cs_style_1 cs_bg_filed cs_radius_5 position-relative"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div className="cs_card_overlay cs_radius_5 position-absolute w-100 h-100" />
                <div className="cs_card_content position-absolute">
                  <div className="cs_card_meta cs_white_color">
                    <div>
                      <i className="fa-solid fa-location-dot" />
                      <span style={{ fontFamily: "Playfair" }}>
                        {p.location}
                      </span>
                    </div>
                    <div>
                      <i className="fa-regular fa-clock" />
                      <span style={{ fontFamily: "Playfair" }}>{p.days}</span>
                    </div>
                    <div>
                      <i className="fa-solid fa-star" />
                      <span style={{ fontFamily: "Playfair" }}>{p.rating}</span>
                    </div>
                  </div>

                  <h2
                    className="cs_card_title cs_fs_24 cs_medium cs_white_color text-white"
                    style={{ color: "white" }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "Playfair",
                      }}
                    >
                      {p.title}
                    </a>
                  </h2>

                  <div className="cs_card_action">
                    <a
                      href="/"
                      className="mt-8 inline-flex items-center gap-2 rounded bg-[#2ecc71] px-6 py-3 font-semibold text-white shadow hover:bg-[#2ecc71]/80"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "Playfair",
                      }}
                    >
                      Book Now
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>

                    <span className="cs_card_price cs_fs_24 cs_medium cs_white_color mb-0">
                      {p.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
