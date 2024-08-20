import type { Product } from "src/types/Product";

export const products: Product[] = [
  {
    name: "Asics Gel-Kayano 31 Womens",
    image: "/images/p1.jpg",
    imageLarge: "/images/p1l.jpg",
    id: 1,
  },
  {
    name: "Asics Gel-Kayano 31 Mens",
    image: "/images/p2.jpg",
    imageLarge: "/images/p2l.jpg",
    id: 2,
  },
  {
    name: "Asics Gel-Kayano 31 (2e Wide) Mens",
    image: "/images/p3.jpg",
    imageLarge: "/images/p3l.jpg",
    id: 3,
  },
  {
    name: "Asics Gel-Kayano 31 'Celebration Of Sport' Mens",
    image: "/images/p4.jpg",
    imageLarge: "/images/p4l.jpg",
    id: 4,
  },
  {
    name: "Asics Gel-Kayano 31 (D Wide) Womens",
    image: "/images/p5.jpg",
    imageLarge: "/images/p5l.jpg",
    id: 5,
  },
  {
    name: "Asics Gel-Kayano 31 (Gs) Kids",
    image: "/images/p6.jpg",
    imageLarge: "/images/p6l.jpg",
    id: 6,
  },
  {
    name: "Asics Gel-Kayano 31 (4e X-Wide) Mens",
    image: "/images/p7.jpg",
    imageLarge: "/images/p7l.jpg",
    id: 7,
  },
  {
    name: "Asics Gel-Kayano 31 (2a Narrow) Womens",
    image: "/images/p8.jpg",
    imageLarge: "/images/p8l.jpg",
    id: 8,
  },
];

export const getProduct = (id: number) => {
  return products.find((product) => id === product.id) ?? null;
};
