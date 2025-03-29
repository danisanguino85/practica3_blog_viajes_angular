import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { FormComponent } from './pages/form/form.component';
import { PostViewComponent } from './pages/post-view/post-view.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticlesViewComponent } from './pages/articles-view/articles-view.component';

export const routes: Routes = [
    { path: ' ', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: DashboardComponent },
    { path: 'new', component: FormComponent },
    { path: 'post/:idPost', component: PostViewComponent },
    { path: 'news', component: NewsComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'articles/:idArticle', component: ArticlesViewComponent },
    { path: '**', redirectTo: '/home' }
];
