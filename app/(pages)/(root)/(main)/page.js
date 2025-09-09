import About from "./components/About";
import FeaturedSection from "./components/FeaturedSection";
import HowItWorks from "./components/HowItWorks";
import NewsletterBanner from "./components/NewsletterBanner";
import PackagesSection from "./components/PackagesSection";
import PopularDestinations from "./components/PopularDestinations";
import TravelHero from "./components/TravelHero";

export default function Home() {
  return (
    <>
      <TravelHero />
      <About />

      <PopularDestinations />
      <FeaturedSection />
      <PackagesSection />
      <HowItWorks />
      <NewsletterBanner />
    </>
  );
}
