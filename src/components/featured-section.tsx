import { ProductCarousel } from "@/components/product-carousel"

export default function FeaturedSection() {
  return (
    <section className="w-full relative p-px">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_2fr] md:mt-4  md:px-2 lg:px-26 w-full relative">
        <ProductCarousel /> 
        <About /> 
      </div>
    </section>
  )
}

const About = () => {
    const paragraphs = [
      "MB. muebles y objetos es un emprendimiento dedicado principalmente a la fabricación de muebles y elementos decorativos, pero también te asesoramos sobre diseño de interiores, para que puedas sacar el mayor provecho de nuestras piezas y lograr una coherencia en los diferentes espacios de tu hogar.",
      "Nos caracterizamos por ser meticulosos en todo lo que hacemos, siempre buscamos la excelencia, amamos el diseño, la originalidad, crear piezas únicas, simples, funcionales y estéticas.",
      "Ponemos todo nuestro esmero en cada trabajo, atendiendo hasta el último detalle, porque no solo buscamos el mejor resultado, sino que también nos interesa el proceso de realización.",
      "Siempre dispuestos a tomar nuevos desafíos y dar el 100% con cada nuevo proyecto, la prioridad es que nuestros clientes se sorprendan y estén felices con el resultado obtenido, esperamos que nos elijas y puedas comprobarlo.",
    ]

    return (
      <div
        className="flex flex-col justify-center pl-8 mt-[36px] md:mt-0 w-full relative"
        id="about-text"
      >
        <h2 className="text-[24pt] font-[Roboto] font-bold tracking-normal leading-[1.5] font-light tracking-tight mb-6 w-full">
          Sobre nosotros
        </h2>
        <div className="text-[12pt] font-normal leading-[1.56] mb-8 max-w-2xl w-full">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="mb-4"
            >
              <span>{text}</span>
            </p>
          ))}
        </div>
      </div>
    )
}
