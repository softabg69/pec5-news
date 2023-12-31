import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Root } from 'src/app/models/root.interface';
import { NewsService } from 'src/app/services/news.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  animations: [listAnimation]
})
export class NewsListComponent implements OnInit, OnDestroy {
  data: Root | undefined = undefined;
  view: string = '';
  reloadSubscription: Subscription;

  constructor(private newsService: NewsService) {
    this.view = this.newsService.view;
    this.reloadSubscription = newsService.reload$.subscribe((r) => {
      if (r) {
        this.newsService.reset();
        this.loadData();
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.reloadSubscription?.unsubscribe();
  }

  loadData() {
    this.loading(true);
    this.newsService.getData().subscribe({
      next: (d) => {
        this.data = d;
        this.newsService.setData(d);
        this.loading(false);
      },
      error:
        (error: any) => {
          this.loading(false);
        }
    });
  }

  loading(v:boolean): void {
    setTimeout(()=> {
      this.newsService.changeLoading(v);
    }, 10);
  }

  change(v: string): void {
    this.newsService.view = v;
  }
}
