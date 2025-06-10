"use client"
import React from 'react';
import { motion } from "motion/react"
import Image from 'next/image';

export default function ProductsSection() {
  const sections = [
    {
      title: "Muebles",
      image: "/images/catalog1.jpeg",
      description: "Nuestros diseños son simples, priorizamos la calidad y estamos en cada detalle."
    },
    {
      title: "Trabajos",
      image: "/images/catalog2.jpg",
      description: "Realizamos muebles a medida, brindándote ideas para componer tus espacios."
    },
    {
      title: "Objetos",
      image: "/images/catalog3.jpg",
      description: "Y como amamos lo que hacemos, en nuestro tiempo libre inventamos objetos."
    }
  ];

  return (
    <div className="min-h-screen bg-stormbored px-4 py-8 relative text-egg overflow-hidden">
      <div className="md:hidden space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ x: (index == 1) ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            className="text-center">
            <h2 className="text-tangerine text-2xl font-semibold mb-4">
              {section.title}
            </h2>
            <div className="relative mb-4">
              <Image
                height={80}
                width={80}
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center pb-14 pr-8 pl-8">

              <li className="text-egg text-left leading-relaxed text-[12pt] font-normal leading-[1.56]">
                {section.description}
              </li>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:max-w-6xl md:mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-tangerine text-3xl font-semibold mb-6">
              {section.title}
            </h2>
            <div className="relative mb-6">
              <Image
                height={80}
                width={80}
                src={section.image}
                alt={section.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-start pb-14 pr-8 pl-8">
              <li className="text-egg text-left leading-relaxed text-base leading-relaxed text-[12pt] font-normal leading-[1.56]">
                {section.description}
              </li>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}