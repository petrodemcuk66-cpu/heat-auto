import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ScrollProgress from "@/components/effects/ScrollProgress";
import RevealOnScroll from "@/components/effects/RevealOnScroll";
import PremiumCursorGlow from "@/components/effects/PremiumCursorGlow";
import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import BrandStrip from "@/components/sections/BrandStrip";
import AboutCompany from "@/components/sections/AboutCompany";
import Services from "@/components/sections/Services";
import SelfVsHeat from "@/components/sections/SelfVsHeat";
import CountryDirections from "@/components/sections/CountryDirections";
import Showcase from "@/components/sections/Showcase";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import Guarantees from "@/components/sections/Guarantees";
import DocumentsPack from "@/components/sections/DocumentsPack";
import Advantages from "@/components/sections/Advantages";
import Reviews from "@/components/sections/Reviews";
import RequestProcess from "@/components/sections/RequestProcess";
import Faq from "@/components/sections/Faq";
import Contacts from "@/components/sections/Contacts";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <RevealOnScroll />
      <PremiumCursorGlow />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <BrandStrip />
        <AboutCompany />
        <Services />
        <SelfVsHeat />
        <CountryDirections />
        <Showcase />
        <Gallery />
        <Process />
        <Guarantees />
        <DocumentsPack />
        <Advantages />
        <Reviews />
        <RequestProcess />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
