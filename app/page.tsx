import CTASection from "./components/CTASection";
import FeaturedProducts from "./components/FeaturedProducts";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Services from "./components/Services";




export default function Home() {


  return (
    <div className="bg-green-50">
      <Hero />
      <CTASection />
      <FeaturedProducts />
      <Services />

      <FeatureSection title={""} description={""} />
    </div>
  )
}

