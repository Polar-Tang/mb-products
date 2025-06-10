import Navigation from "@/components/navigation"
import HeroBanner from "@/components/hero-banner"
import FeaturedSection from "@/components/featured-section"
import MapsSection from "@/components/maps-section"
import ProductsSection from "@/components/products-section"
import LinkSection from "@/components/links-section"
import Layout from "@/components/layout"

export default function Home() {
  return (

    <Layout  heroBanner={<HeroBanner title="MB. MUEBLES Y OBJETOS" imgPath="/images/hero-bg-2.jpg" />}>
      <FeaturedSection />
      <ProductsSection />
      <MapsSection />
      <LinkSection />
    </Layout>

  )
}

