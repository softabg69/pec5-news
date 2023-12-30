import { Injectable } from '@angular/core';
import { Root } from '../models/root.interface';
import { Article } from '../models/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  datos!: Root;
  default_view: string = 'cards';

  constructor() { }

  article(id:string): Article | undefined {
    if (!this.datos) return undefined;
    return this.datos.articles.find(a => a.url === id);
  }

  get view(): string {
    return this.default_view;
  }

  set view(s:string) {
    console.log('set: ', s);
    this.default_view = s;
  }

  data(): Root {
    this.datos =  {
      "status": "ok",
      "totalResults": 10,
      "articles": [
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Lee Sun-kyun: A quiet farewell for Parasite star who died in the spotlight",
          "description": "Relentless media coverage over allegations of drug use stalked Lee Sun-kyun's final months.",
          "url": "https://www.bbc.co.uk/news/world-asia-67831513",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16FEA/production/_132168149_gettyimages-1492131821.jpg",
          "publishedAt": "2023-12-29T08:07:21.0226518Z",
          "content": "South Korean star Lee Sun-kyun's family bid him farewell in a private funeral, shutting out the cameras that had stalked him in his last months when he was under investigation for drug use. \r\nThe ent… [+6536 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Ukraine war: Russia launches missile and drone attacks across Ukraine",
          "description": "At least three explosions were heard in Kyiv, with strikes reported in from Lviv in the west to Kharkiv in the east.",
          "url": "https://www.bbc.co.uk/news/live/world-europe-67838996",
          "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
          "publishedAt": "2023-12-29T07:52:19.4454394Z",
          "content": "After a night of sirens, sunrise came with three powerful explosions in central Kyiv. They all made the windows rattle. \r\nRussia has launched missile and drone attacks across Ukraine. Authorities say… [+501 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Tony Blair urged 'radical' measures to cut asylum, archive papers reveal",
          "description": "Proposals put to the former PM included a detention camp on Mull, newly-released files from 2003 show.",
          "url": "https://www.bbc.co.uk/news/uk-politics-67827016",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7C16/production/_132166713_blair-index-getty.jpg",
          "publishedAt": "2023-12-29T06:37:23.3993236Z",
          "content": "A detention camp on the Isle of Mull and breaking international law were among measures on migration presented to Tony Blair when he was prime minister, according to newly released files.\r\nPapers fro… [+6987 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Ukraine war: Three ways the conflict could go in 2024",
          "description": "We asked three military analysts how they think events may unfold in the coming 12 months.",
          "url": "https://www.bbc.co.uk/news/world-europe-67760067",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17B8A/production/_132126179_tank2_976getty.jpg",
          "publishedAt": "2023-12-29T06:37:14.2265267Z",
          "content": "The conflict in Ukraine is about to enter its third calendar year. The front lines have hardly moved in the last few months but could the course of the war change in 2024?\r\nPresident Volodomyr Zelens… [+7546 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Boeing urges 737 Max inspections for possible loose bolt",
          "description": "The airplane maker is urging airlines to inspect rudder control systems on the planes.",
          "url": "https://www.bbc.co.uk/news/business-67838424",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4519/production/_121798671_737max.jpg",
          "publishedAt": "2023-12-29T04:07:12.5032056Z",
          "content": "Boeing is urging airlines to inspect its 737 Max airplanes for a possible loose bolt in rudder control systems.\r\nThe airplane maker called for the inspections after an international operator discover… [+1396 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Trump blocked from Maine presidential ballot in 2024",
          "description": "Maine's top election official has ruled Trump cannot run for president next year in the state.",
          "url": "https://www.bbc.co.uk/news/world-us-canada-67837639",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2888/production/_132167301_donaldtrump281223.jpg",
          "publishedAt": "2023-12-29T00:07:14.5721283Z",
          "content": "Maine's top election official has ruled that Donald Trump cannot run for president next year in the state, citing a constitutional insurrection clause.\r\nSecretary of State Shenna Bellows said Mr Trum… [+214 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Thousands of Palestinians flee central Gaza as Israeli troops advance",
          "description": "Israeli tanks reportedly reach the outskirts of Bureij refugee camp as the ground offensive expands.",
          "url": "https://www.bbc.co.uk/news/world-middle-east-67834432",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C1E4/production/_132163694_06187bef5cdf1ac79cf145d03541007e033e75260_0_6000_40481000x675.jpg",
          "publishedAt": "2023-12-28T21:07:19.4409883Z",
          "content": "An estimated 150,000 Palestinians are being forced to flee areas of central Gaza, the UN has said, as Israeli forces advance on refugee camps there.\r\nWitnesses and Hamas's armed wing reported that ta… [+3532 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Judi Haggai: US-Canadian confirmed killed on 7 October",
          "description": "Her body is in Gaza, where her family had thought she was being held hostage, her kibbutz says.",
          "url": "https://www.bbc.co.uk/news/world-middle-east-67836338",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5FAC/production/_132129442_whatsappimage2023-12-22at7.58.21am-1.jpg",
          "publishedAt": "2023-12-28T19:22:20.8941679Z",
          "content": "An Israeli-American-Canadian national thought to be being held hostage in Gaza was killed by Hamas in the 7 October attack on Israel, the kibbutz community she was taken from says.\r\nJudi Weinstein Ha… [+2532 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Trump denies bullying his way into Home Alone 2",
          "description": "The former US president angrily responds to comments from the film's director Chris Columbus.",
          "url": "https://www.bbc.co.uk/news/world-us-canada-67834817",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16536/production/_132164419_2ak18xn.jpg",
          "publishedAt": "2023-12-28T18:52:18.6274872Z",
          "content": "Donald Trump has angrily denied claims by the director of Home Alone 2: Lost in New York that he bullied his way into a now famous cameo. \r\nThe former president made a brief appearance in the 1992 fi… [+1892 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Nikki Haley says slavery was a US Civil War cause after backlash",
          "description": "The Republican presidential candidate is facing a backlash after omitting slavery as a cause of the war.",
          "url": "https://www.bbc.co.uk/news/world-us-canada-67835961",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8562/production/_132164143_gettyimages-1865376219.jpg",
          "publishedAt": "2023-12-28T17:22:15.8775033Z",
          "content": "Media caption, Watch: Haley leaves out slavery as a cause of US Civil War\r\nRepublican presidential candidate Nikki Haley is walking back remarks she made about the American Civil War after facing a b… [+2540 chars]"
        }
      ]
    }
    return this.datos;
  }
}
