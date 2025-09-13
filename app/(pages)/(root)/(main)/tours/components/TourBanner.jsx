// components/ToursBanner.jsx

export default function ToursBanner() {
  return (
    <section
      className="cs_page_header cs_bg_filed cs_primary_bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/banner/bn.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="cs_page_header_text text-center">
          <h1 className="cs_page_title cs_fs_70 cs_white_color cs_bold">
            Popular Tours Packagess
          </h1>
          <p className="cs_page_subtitle cs_fs_24 mb-0">
            Our Most Popular & Best-Selling Tours
          </p>
        </div>
      </div>
    </section>
  );
}
