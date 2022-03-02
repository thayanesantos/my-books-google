import { Item }  from "./item";

export interface Result {
  kind: string
  totalItems: number
  items: Item[]
}