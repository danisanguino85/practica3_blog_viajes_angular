import { Component, inject } from '@angular/core';
import { NavBARComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { NewsComponent } from '../news/news.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { POSTS } from '../../db/posts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavBARComponent, PostListComponent, RouterLink, NewsComponent, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  ultimo!: Post
  postService = inject(PostService)

  arrPosts: Post[] = POSTS
  ultimos: Post[] = []
  ngOnInit() {
    this.lastPosts()

  }


  lastPosts() {
    this.ultimos = this.arrPosts.slice(-3);
    console.log(this.ultimos)
    return this.ultimos
  }

}
