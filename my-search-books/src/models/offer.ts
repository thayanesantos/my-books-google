import { ListPrice } from "./list-price";
import { RetailPrice } from "./retail-price";

export interface Offer {
  finskyOfferType: number
  listPrice: ListPrice
  retailPrice: RetailPrice
  giftable: boolean
}