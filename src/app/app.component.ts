import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pec5-news';
  loading = true;
  newsSubscription: Subscription;

    constructor(private newsService: NewsService) { 
      this.newsSubscription = this.newsService.loading$.subscribe((l)=> {
        this.loading = l;
      });
    }
}
