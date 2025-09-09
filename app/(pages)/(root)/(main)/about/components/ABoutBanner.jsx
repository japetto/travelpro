// app/_components/PageHeader.jsx
"use client";

export default function AboutBanner() {
  return (
    <section
      className="cs_page_header cs_bg_filed cs_primary_bg"
      data-src="/images/about_header_bg.jpeg"
    >
      <div className="container">
        <div className="cs_page_header_text text-center">
          <h1 className="cs_page_title cs_fs_70 cs_white_color cs_bold">
            About Us
          </h1>
          <p className="cs_page_subtitle cs_fs_24 mb-0">
            Your trusted partner in world exploration.
          </p>
        </div>
      </div>
    </section>
  );
}
