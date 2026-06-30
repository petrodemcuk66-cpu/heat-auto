import { cars } from "@/data/cars";
import { reviews } from "@/data/reviews";

export async function getPublicCars() {
  return cars;
}

export async function getPublicReviews() {
  return reviews;
}
