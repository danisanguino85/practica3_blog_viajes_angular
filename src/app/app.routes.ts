import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path: ' ', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: PostListComponent },
    { path: 'new', component: FormComponent },
    { path: '**', redirectTo: '/home' }
];
