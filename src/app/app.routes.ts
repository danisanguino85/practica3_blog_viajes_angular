import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { FormComponent } from './pages/form/form.component';
import { PostViewComponent } from './pages/post-view/post-view.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: ' ', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: DashboardComponent },
    { path: 'new', component: FormComponent },
    { path: 'post/:idpost', component: PostViewComponent },
    { path: '**', redirectTo: '/home' }
];
