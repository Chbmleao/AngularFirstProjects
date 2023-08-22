import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { InsertTaskComponent } from './insert';
import { EditTaskComponent } from './edit';

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
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent,
  },
];
