// app/_components/WhyChooseUs.jsx
"use client";

export default function WhyChooseUs() {
  const leftBoxes = [
    {
      icon: "/images/icons/calendar_icon_2.svg",
      title: "Set Travel Plan",
      desc: "Customize your trip with easy planning tailored to your needs and preferences.",
    },
    {
      icon: "/images/icons/hotel-icon.svg",
      title: "Luxury Hotel",
      desc: "Stay in handpicked hotels offering comfort, elegance, and top-class service.",
    },
  ];

  const rightBoxes = [
    {
      icon: "/images/icons/compass_icon.svg",
      title: "Explore Around",
      desc: "Discover iconic landmarks and hidden gems with guided tours and activities.",
    },
    {
      icon: "/images/icons/headset_icon.svg",
      title: "Support 24/7",
      desc: "Enjoy peace of mind with round-the-clock assistance throughout your journey.",
    },
  ];

  return (
    <section>
      <div className="cs_height_135 cs_height_lg_75" />
      <div className="container">
        {/* Section heading */}
        <div className="cs_section_heading cs_style_1 text-center">
          <h3
            className="cs_section_title_up cs_ternary_font cs_accent_color cs_normal cs_fs_24 satisfy text-[#2ecc71]"
            style={{ color: "#2ecc71", fontFamily: "Satisfy" }}
          >
            Why Choose Us
          </h3>
          <h2
            className="cs_section_title cs_semibold cs_fs_56 mb-0"
            style={{ fontFamily: "Playfair" }}
          >
            Get The Best Travel Experience
          </h2>
        </div>

        <div className="cs_height_55 cs_height_lg_40" />

        {/* Main iconbox wrapper */}
        <div className="cs_iconbox_4_wrap">
          {/* Left column */}
          <div>
            <div className="row cs_gap_y_45">
              {leftBoxes.map((box, i) => (
                <div className="col-lg-12 col-6" key={i}>
                  <div className="cs_iconbox cs_style_4">
                    <div className="cs_iconbox_icon cs_center">
                      <img src={box.icon} alt={box.title} />
                    </div>
                    <h2
                      className="cs_iconbox_title cs_fs_24 cs_semibold"
                      style={{ fontFamily: "Playfair" }}
                    >
                      {box.title}
                    </h2>
                    <p className="cs_iconbox_subtitle mb-0">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle image */}
          <div>
            <div className="cs_iconbox_4_thumb cs_center">
              <img src="/images/about_4.png" alt="About Thumb" />
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="row cs_gap_y_45">
              {rightBoxes.map((box, i) => (
                <div className="col-lg-12 col-6" key={i}>
                  <div className="cs_iconbox cs_style_4">
                    <div className="cs_iconbox_icon cs_center">
                      <img src={box.icon} alt={box.title} />
                    </div>
                    <h2 className="cs_iconbox_title cs_fs_24 cs_semibold">
                      {box.title}
                    </h2>
                    <p className="cs_iconbox_subtitle mb-0">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_135 cs_height_lg_75" />
    </section>
  );
}
