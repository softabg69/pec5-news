import { Injectable } from '@angular/core';
import { Root } from '../models/root.interface';
import { Article } from '../models/article.interface';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private data: Root | undefined = undefined;
  default_view: string = 'cards';
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  reload$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  article(id:string): Article | undefined {
    if (!this.data) return undefined;
    return this.data.articles.find(a => a.url === id);
  }

  get view(): string {
    return this.default_view;
  }

  set view(s:string) {
    this.default_view = s;
  }

  changeLoading(v:boolean): void {
    this.loading$.next(v);
  }

  reset() {
    this.data = undefined;
  }

  getData(): Observable<Root> {
    if (this.data !== undefined) return of(this.data);
    return this.http
      .get<Root>('https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=50&apiKey=bd4db1bc261b48cf9b0b7edc93974075');
  }

  setData(r: Root): void {
    this.data = r;
  }

  reload(): void {
    this.reload$.next(true);
  }
}
