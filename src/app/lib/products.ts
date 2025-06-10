// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { Product } from "@/lib/products";

// https://nextjs.org/learn/dashboard-app/fetching-data
const prdoctToSeed: Product[] = [
    {
        id: 1,
        title: "Banco Artesanal De Pinotea Maciza",
        description: `Hermoso banco de pinotea recuperada, completamente artesanal y único, ideal para pie de cama o como suplemento en diferentes ambientes.\nLa Pinotea es una madera noble y resistente, con vetas tan particulares que la vuelven única.\nEsta madera ya no suele producirse,pero se consigue recuperándola de piezas antiguas.\nEn este caso la madera fue tratada de manera orgánica, sin lacas ni barnices tóxicos, se usaron aceite de lino y cera de abeja, este tipo de tratamiento protege y nutre la madera, generando un acabado resistente y natural.`,
        price: 120000,
        category: "mueble",
        dimensions: {
            length: 85,
            width: 30.5,
            height: 37.5
        },
        isActive: true,
        image: "/images/catalog1.jpeg",
        tags: ["pinotea", "pinotearecuperada", "bancodemadera", "bancodemaderamaciza",]
    },
    {
        id: 2,
        title: "Banco Artesanal De Pinotea Maciza",
        description: `Marrón amarillento rosado\nHermoso banco bajo de pinotea recuperada, completamente artesanal y único, ideal para pie de cama o como suplemento en diferentes ambientes.\nLa Pinotea es una madera noble y resistente, con vetas tan particulares que la vuelven única.\nEsta madera ya no suele producirse,
pero se consigue recuperándola de piezas antiguas.\nEn este caso la madera fue tratada de manera orgánica, sin lacas ni barnices tóxicos, se usaron aceite de lino y cera de abeja, este tipo de tratamiento protege y nutre la madera, generando un acabado resistente y natural.`,
        price: 150000,
        category: "mueble",
        dimensions: {
            length: 83,
            width: 28,
            height: 26
        },
        isActive: true,
        image: "/images/catalog1.jpeg",
        tags: ["pinotea", "pinotearecuperada", "bancodemadera", "bancodemaderamaciza",]
    },
    {
        id: 3,
        title: "Mesa Marianela",
        description: `Fabulosa mesa redonda de madera maciza, estilo Nórdico.\nCon patas reforzadas`,
        category: "trabajos",
        dimensions: {
            dosPersonas: 76,
            cuatroPersonas: 91,
            seisPersonas: 137
        },
        isActive: true,
        image: "/images/mesa_marianela.jpg",
    }
]

export { prdoctToSeed };