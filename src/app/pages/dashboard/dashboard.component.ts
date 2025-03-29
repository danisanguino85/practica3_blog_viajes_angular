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
  imports: [RouterLink, NewsComponent, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //ultimo!: Post
  postService = inject(PostService)

  arrPosts: Post[] = POSTS
  ultimos: Post[] = []
  ngOnInit() {
    this.lastPosts()
    //this.ultimo = this.arrPosts[this.arrPosts.length - 1]
  }


  lastPosts() {
    this.ultimos = this.arrPosts.slice(-4);
    console.log(this.ultimos)
    return this.ultimos
  }


}
