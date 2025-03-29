import { Component, inject, Input, input } from '@angular/core';
import { News } from '../../interfaces/news';
import { PostService } from '../../services/blog.service';

@Component({
  selector: 'app-articles-view',
  imports: [],
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.css'
})
export class ArticlesViewComponent {

  @Input() idArticle: number = 0
  article: News | undefined
  postService = inject(PostService)

  ngOnInit() {
    if (!isNaN(this.idArticle)) {
      this.article = this.postService.getArticleById(this.idArticle)

    }
  }
}
