import Navigation from "@/components/navigation"
import HeroBanner from "@/components/hero-banner"
import FeaturedSection from "@/components/featured-section"
import MapsSection from "@/components/maps-section"
import ProductsSection from "@/components/products-section"
import LinkSection from "@/components/links-section"
import FooterContacto from "@/components/footer-contacto"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Navigation />
        <HeroBanner />
      </div>

      
      <FeaturedSection />

      <ProductsSection/>
      <MapsSection /> 
      <LinkSection />
      <FooterContacto/>
    </main>
  )
}

