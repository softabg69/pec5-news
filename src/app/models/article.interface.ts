import { Source } from "./source.interface"

export interface Article {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
  }