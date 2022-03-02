import { IndustryIdentifier } from "./industry-identifier";
import { ReadingModes } from "./reading-modes";
import { PanelizationSummary } from "./panelization-summary";
import { ImageLinks } from "./image-links";

export interface VolumeInfo {
  title: string
  authors: string[]
  publisher?: string
  publishedDate: string
  description?: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printType: string
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  subtitle?: string
}