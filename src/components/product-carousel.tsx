"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Dots} from "@/components/ui/carousel"

const carouselImages = [
  {
    src: "/images/carousel1.jpg",
    alt: "Modern wooden chair",
  },
  {
    src: "/images/carousel2.jpg",
    alt: "Elegant dining table",
  },
  {
    src: "/images/carousel3.jpg",
    alt: "Minimalist sofa",
  },
  {
    src: "/images/carousel4.jpg",
    alt: "Designer lamp",
  },
]

export function ProductCarousel() {
  
  return (
    <Carousel className="py-12 px-8 md:p-none h-full w-full flex flex-col items-center justify-center relative z-0">
      <div className="relative w-full flex items-center justify-center">
      <CarouselPrevious
        variant={"none"}
        className="left-0 absolute z-2 size-14 md:size-12 ml-2 hover:bg-black/30 hover:cursor-pointer bg-black/40 text-milk hover:text-milk top-1/2 -translate-y-1/2"
      />
      <CarouselContent className="w-full h-1/2">
        {carouselImages.map((img, index) => (
        <CarouselItem className="w-full flex items-center justify-center" key={index}>
          <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardContent
            className="h-full w-full flex aspect-square items-center justify-center bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${img.src})` }}
            >
            </CardContent>
          </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
        variant={"none"}
        className="right-0 absolute z-2 size-14 md:size-12 mr-2 hover:bg-black/30 hover:cursor-pointer bg-black/40 text-milk hover:text-milk top-1/2 -translate-y-1/2"
      />
      </div>
      <div className="w-full flex justify-center mt-4">
      <Dots number={4} />
      </div>
    </Carousel>

  )
}
