import { Component, inject } from '@angular/core';
import { PostService } from '../../services/blog.service';
import { News } from '../../interfaces/news';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {


  postService = inject(PostService)
  articles: News[] = []
  sponsored: News[] = []

  ngOnInit() {
    this.articles = this.postService.getAllNews()
    this.sponsored = this.postService.getAllSponsored()
  }

}
