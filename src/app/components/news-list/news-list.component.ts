import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/root.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  data: Root | undefined = undefined;
  view: string = '';

  constructor(private newsService: NewsService) { 
    console.log('serv view: ', this.newsService.view);
    this.view = this.newsService.view;
  }

  ngOnInit(): void {
    this.data = this.newsService.data();
  }

  change(v: string): void {
    this.newsService.view = v;
  }
}
