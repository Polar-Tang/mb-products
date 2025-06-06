import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Open_Sans } from "next/font/google"

// https://sites.google.com/d/1IujmEDmwAmsoOF2IMZqx3JSJ9KUik7qF/p/1ABCtffJn3AmETwiSDgv-c8j1D64W50HH/edit

// Use latin characters
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MB. Muebles y Objetos - Tienda de Muebles",
  description: "Descubre nuestra colección de muebles y objetos decorativos de alta calidad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
