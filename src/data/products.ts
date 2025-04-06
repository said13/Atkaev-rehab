export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  details: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ATK MiniBands Set — 5 Levels",
    price: 1490,
    images: ["https://ext.same-assets.com/615341754/333363867.jpeg"],
    description:
      "Комплект из 5 латексных мини-резинок с разной степенью нагрузки — от Extra Light до Extra Heavy. Идеально подходит для тренировок дома, в зале или на улице.",
    details:
      "Размер: 30 x 5 см\nМатериал: 100% натуральный латекс\nУровни: 5 сопротивлений (4–32 кг)",
  },
  {
    id: "2",
    name: "ATK Flexiband Small",
    price: 990,
    images: ["https://ext.same-assets.com/615341754/333363867.jpeg"],
    description:
      "Тканевая резинка ATK Flexiband размера Small — разработана для пользователей ростом до 160 см.",
    details: "Размер: Small\nМатериал: ткань с латексной нитью\nАнтискользящая внутренняя сторона",
  },
  {
    id: "3",
    name: "ATK Flexiband Medium",
    price: 990,
    images: ["https://ext.same-assets.com/615341754/333363867.jpeg"],
    description:
      "Резинка размера Medium — универсальный размер для большинства пользователей (рост 160–180 см).",
    details: "Размер: Medium\nМатериал: ткань с латексной нитью\nУровень сопротивления: средний",
  },
  {
    id: "4",
    name: "ATK Flexiband Large",
    price: 990,
    images: ["https://ext.same-assets.com/615341754/333363867.jpeg"],
    description:
      "Размер Large подходит для пользователей выше 180 см. Отлично подойдёт для растяжки и силовых тренировок.",
    details: "Размер: Large\nМатериал: ткань с латексной нитью\nАнтискользящая поверхность",
  },
  {
    id: "5",
    name: "ATK ProTube System",
    price: 2790,
    images: ["https://ext.same-assets.com/615341754/333363867.jpeg"],
    description:
      "Трубчатая система сопротивления с ручками, креплениями и дверным якорем. Подходит для тренировок на всё тело.",
    details:
      "Комплектация: 5 трубок с разным сопротивлением, 2 ручки, 2 лямки на ноги, якорь для двери\nМатериал: латекс, нейлон, пластик",
  },
];

export const relatedProducts: RelatedProduct[] = [
  
];
