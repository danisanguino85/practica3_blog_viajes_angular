import { Component, inject } from '@angular/core';
import { NavBARComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { NewsComponent } from '../news/news.component';
import { PostService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';
import { POSTS } from '../../db/arraysMuestra';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, NewsComponent, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  postService = inject(PostService)

  arrPosts: Post[] = this.postService.getAllPosts()
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
