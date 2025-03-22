import { Component } from '@angular/core';
import { NavBARComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavBARComponent, PostListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
