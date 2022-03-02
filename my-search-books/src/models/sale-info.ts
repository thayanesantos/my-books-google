import { ListPrice } from "./list-price";
import { RetailPrice } from "./retail-price";
import { Offer } from "./offer";

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: ListPrice
  retailPrice?: RetailPrice
  buyLink?: string
  offers?: Offer[]
}