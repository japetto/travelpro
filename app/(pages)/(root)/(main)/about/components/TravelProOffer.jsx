// app/_components/OfferBanner.jsx
"use client";

export default function TravelProOffer() {
  return (
    <section
      className="cs_banner cs_style_2 cs_bg_filed cs_primary_bg"
      style={{ backgroundImage: "url('/images/banner_bg_3.jpeg')" }}
    >
      <div className="cs_height_115 cs_height_lg_80" />
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_banner_thumb">
              <img src="/images/offer_text.png" alt="Offer Text" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_banner_text cs_white_color">
              <h2
                className="cs_banner_title cs_white_color cs_fs_50"
                style={{ fontFamily: "Playfair" }}
              >
                Last TravelPro Offer
              </h2>
              <h3
                className="cs_banner_title_mini cs_fs_20 cs_medium cs_white_color"
                style={{ fontFamily: "Playfair" }}
              >
                Aerial view of Cape Town with Cape Town Stadium
              </h3>
              <p className="cs_banner_subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit felis sit amet turpis vehicula convallis. Ut ac tellus
                velit. Nulla mollis sollicitudin lacus id ornare. Phasellus
                laoreet nulla et nulla sagittis, sit amet cursus urna mollis.
              </p>
              <a href="#" className="cs_btn cs_style_1 cs_fs_18 cs_medium">
                Read More
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5866 5.69629H0.41235C0.184269 5.69629 0 5.46776 0 5.1849C0 4.90204 0.184269 4.67352 0.41235 4.67352H18.5906L16.0881 1.57004C15.927 1.37028 15.927 1.04587 16.0881 0.846109C16.2492 0.646349 16.5108 0.646349 16.6718 0.846109L19.8792 4.82374C19.9977 4.97076 20.0325 5.1897 19.9681 5.38147C19.9036 5.57164 19.7529 5.69629 19.5866 5.69629Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.3435 9.11986C16.2384 9.11986 16.1333 9.08012 16.0538 8.99935C15.8935 8.83909 15.8935 8.57884 16.0538 8.41858L19.2487 5.22371C19.4089 5.06345 19.6692 5.06345 19.8294 5.22371C19.9897 5.38396 19.9897 5.64422 19.8294 5.80448L16.6346 8.99935C16.5538 9.08012 16.4487 9.11986 16.3435 9.11986Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
}
