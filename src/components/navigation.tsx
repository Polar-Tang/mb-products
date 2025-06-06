"use client"

import { useEffect, useState } from 'react'
import { useIsMobile } from "./hooks/use-mobile"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navigation() {


  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const handleScroll = (): void => {
    const currentScrollPosition = window.scrollY || window.pageYOffset
    // Hide navbar only when at the very top
    if (currentScrollPosition === 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
    setLastScrollPosition(currentScrollPosition)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // console.log("Is it visible? ", isVisible)

    // console.log("Current scroll thing ", window.pageYOffset)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollPosition])
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-2 translate-y-0 text-base transition-colors duration-200 ${
      isVisible ? 'bg-transparent text-white' : 'bg-white text-black shadow-md'
      }`}
    >
      {useIsMobile()
      ? <MobileContent />
      : <DeskstopContent />}
    </nav>
  )
}




const DeskstopContent = () => {
  return (
    <>

      <div className="text-sm opacity-75"></div>

      <div className="flex items-center space-x-2 pr-0">
        <Link href="/" className=" font-semibold transition-colors">
          Inicio
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="none"
              className="hover: align-middle text-base font-normal"
            >
              Productos
              <ChevronDown className="-ml-1 w-12 tracking-normal" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white/95 backdrop-blur-sm pl-8 pr-16">
            <DropdownMenuItem>
              <Link href="/productos/muebles" className="hover:cursor-pointer hover:text-black text-gray-700">Muebles</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/productos/objetos" className="hover:cursor-pointer hover:text-black text-gray-700">Objetos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/productos/decoracion" className="hover:cursor-pointer hover:text-black text-gray-700">Decoración</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/contacto" className="  transition-colors">
          Contacto
        </Link>
      </div>
    </>
  )
}

const MobileContent = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='none' className='hover:cursor-pointer hover:bg-black/40'>
          <Menu className='hover:cursor-pointer' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-1/2 z-11'>
        <div className='w-full pt-2 text-xl'>
          <ul>
            <li className='pt-12 pl-6'>
              <Link href="#">Inicio</Link>
            </li>
            <li className='pt-12 pl-6 text-xl'>
              <Accordion type="single" collapsible>
                <AccordionItem className="text-xl" value="item-1">
                  <AccordionTrigger className="text-xl">Productos</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Muebles
                  </AccordionContent>
                  <AccordionContent className="text-lg">
                    Objetos
                  </AccordionContent>
                  <AccordionContent className="text-lg">
                    Decoraciones
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li className='pt-12 pl-6'>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </div>

      </SheetContent>
    </Sheet>
  )
}