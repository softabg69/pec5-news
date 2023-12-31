import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {
  panelOpenState = false;
  article: Article | undefined;

  constructor(private newsService: NewsService, 
      private route: ActivatedRoute,
      private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.article = this.newsService.article(id);
      if (this.article === undefined || !this.article) {
        this.router.navigateByUrl('/');
      }
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
