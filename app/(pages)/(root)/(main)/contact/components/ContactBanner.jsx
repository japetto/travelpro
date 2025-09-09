// app/_components/ContactPageHeader.jsx
"use client";

export default function ContactBanner() {
  return (
    <section
      className="cs_page_header cs_bg_filed cs_primary_bg"
      style={{ backgroundImage: "url('/images/destination_header_bg.jpeg')" }}
    >
      <div className="container">
        <div className="cs_page_header_text text-center">
          <h1 className="cs_page_title cs_fs_70 cs_white_color cs_bold">
            Contact Us
          </h1>
          <p className="cs_page_subtitle cs_fs_24 mb-0">Get In Touch With Us</p>
        </div>
      </div>
    </section>
  );
}
