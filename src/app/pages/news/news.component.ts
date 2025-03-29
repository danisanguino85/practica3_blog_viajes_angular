import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { News } from '../../interfaces/news';

@Component({
  selector: 'news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {


  postService = inject(PostService)
  news: News[] = []
  sponsored: News[] = []

  ngOnInit() {
    this.news = this.postService.getAllNews()
    this.sponsored = this.postService.getAllSponsored()
  }

}
