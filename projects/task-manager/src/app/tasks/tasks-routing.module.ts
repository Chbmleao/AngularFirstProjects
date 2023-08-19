import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { InsertTaskComponent } from './insert';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list',
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent,
  },
  {
    path: 'tasks/insert',
    component: InsertTaskComponent,
  },
];
