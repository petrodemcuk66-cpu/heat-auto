export type Service = {
  icon: string;
  title: string;
  text: string;
};

export type Car = {
  id: string;
  title: string;
  country: string;
  image: string;
  price: string;
  year: number;
  mileage: string;
  engine: string;
  status: string;
  tag: string;
  description: string;
};

export type Review = {
  id?: string;
  name: string;
  city: string;
  car: string;
  text: string;
  rating: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};
