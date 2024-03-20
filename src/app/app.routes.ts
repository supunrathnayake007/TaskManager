import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home | TMA', component: TasksComponent },
  { path: 'about', title: 'About Me', component: AboutComponent },
  { path: '**', title: '404 page not found', component: PageNotFoundComponent },
];
