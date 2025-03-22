import { Component } from '@angular/core';
import { NavBARComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavBARComponent, PostListComponent, RouterLink, NewsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
