import { Article } from "./article.interface"

export interface Root {
    status: string
    totalResults: number
    articles: Article[]
  }