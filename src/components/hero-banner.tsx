"use client"

export default function HeroBanner() {
  return (
    <section
      className="relative h-[50vh] min-h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/images/hero-bg-2.jpg)]"
      
    >

      <div className="relative z-1 text-center text-white px-4">
        <h1 className="text-6xl md:text-4xl lg:text-7xl font-light tracking-wider mb-8">
          <span className="block text-mustard font-medium z-0">MB. MUEBLES Y OBJETOS</span>
        </h1>

       
      </div>
    </section>
  )
}
