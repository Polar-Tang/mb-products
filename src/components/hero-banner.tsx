"use client"

export default function HeroBanner({imgPath, title}: {imgPath: string, title: string}) {
  const isObject = imgPath === "/images/bg-banner3.png"
  return (
    <section
      className={`relative ${isObject ? "h-[25vh]" : "h-[50vh]"}  min-h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat `}
      style={{ backgroundImage: `url(${imgPath})` }}
      
    >
      <div className="relative z-1 text-center text-white px-4">
        <h1 className="text-6xl md:text-4xl lg:text-7xl font-light tracking-wider mb-8 "
        style={{"fontFamily": "Impact, Arial"}}
        >
          <span className="block text-mustard font-medium z-0">
            {title}
          </span>
        </h1>

       
      </div>
    </section>
  )
}
