import { VolumeInfo } from "./volume-info";
import { SaleInfo } from "./sale-info";
import { AccessInfo } from "./access-info";
import { SearchInfo } from "./search-info";


export interface Item {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}