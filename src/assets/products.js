// --- Headphones ---
import hp1 from "./headphones/hp1.png";
import hp2 from "./headphones/hp2.png";
import hp3 from "./headphones/hp3.png";
import hp4 from "./headphones/hp4.png";
import hp5 from "./headphones/hp5.png";
import hp6 from "./headphones/hp6.png";
import hp7 from "./headphones/hp7.png";
import hp8 from "./headphones/hp8.png";
import hp9 from "./headphones/hp9.png";
import hp10 from "./headphones/hp10.png";

// --- Samsung phones ---
import sam1 from "./samsung/sam1.png";
import sam2 from "./samsung/sam2.png";
import sam3 from "./samsung/sam3.png";
import sam4 from "./samsung/sam4.png";
import sam5 from "./samsung/sam5.png";
import sam6 from "./samsung/sam6.png";
import sam7 from "./samsung/sam7.png";
import sam8 from "./samsung/sam8.png";

// --- Fruits / Grocery ---
import gc1 from "./gcocery/gc1.png";
import gc2 from "./gcocery/gc2.png";
import gc3 from "./gcocery/gc3.png";
import gc4 from "./gcocery/gc4.png";
import gc5 from "./gcocery/gc5.png";
import gc6 from "./gcocery/gc6.png";
import gc7 from "./gcocery/gc7.png";
import gc8 from "./gcocery/gc8.png";

export const stock = [
  {
    id: 1,
    name: "Oraimo headphone",
    category: "headphones",
    description: "Lightweight wireless headset with deep bass.",
    price: 300,
    stock: 15,
    images: [hp1, hp2],
  },
  {
    id: 2,
    name: "Samsung note",
    category: "phones",
    description: "Large-screen smartphone with S-Pen support.",
    price: 6000,
    stock: 10,
    images: [sam1, sam2],
  },
  {
    id: 3,
    name: "Mangoes",
    category: "fruits",
    description: "Sweet, juicy tropical mangoes—perfectly ripe.",
    price: 6000,
    stock: 10,
    images: [gc1, gc2],
  },
  {
    id: 4,
    name: "Soundcore",
    category: "headphones",
    description: "Noise-isolating earbuds with crisp sound.",
    price: 300,
    stock: 15,
    images: [hp3, hp4],
  },
  {
    id: 5,
    name: "Samsung A70",
    category: "phones",
    description: "Slim mid-range phone with vibrant AMOLED display.",
    price: 6000,
    stock: 10,
    images: [sam3, sam4],
  },
  {
    id: 6,
    name: "Oranges",
    category: "fruits",
    description: "Fresh citrus packed with natural vitamin C.",
    price: 100,
    stock: 16,
    images: [gc3, gc4],
  },
  {
    id: 7,
    name: "JBL",
    category: "headphones",
    description: "Powerful over-ear headphones with deep bass.",
    price: 1600,
    stock: 8,
    images: [hp5, hp6],
  },
  {
    id: 8,
    name: "Samsung S24",
    category: "phones",
    description: "Flagship Galaxy with pro-grade camera system.",
    price: 16000,
    stock: 18,
    images: [sam5, sam6],
  },
  {
    id: 9,
    name: "Strawberry",
    category: "fruits",
    description: "Sweet red berries bursting with flavor.",
    price: 150,
    stock: 25,
    images: [gc5, gc6],
  },
  {
    id: 10,
    name: "Sony",
    category: "headphones",
    description: "Premium audio with active noise cancellation.",
    price: 3000,
    stock: 19,
    images: [hp7, hp8],
  },
  {
    id: 11,
    name: "Note 20",
    category: "phones",
    description: "High-performance Note series with stylus.",
    price: 24000,
    stock: 8,
    images: [sam7, sam8],
  },
  {
    id: 12,
    name: "Pineapple",
    category: "fruits",
    description: "Golden tropical fruit, sweet and tangy.",
    price: 200,
    stock: 24,
    images: [gc7, gc8],
  },
  {
    id: 13,
    name: "Bose",
    category: "headphones",
    description: "Studio-quality sound and long-lasting comfort.",
    price: 400,
    stock: 28,
    images: [hp9, hp10],
  },
];

export const categories = ["headphones", "fruits", "phones"];
