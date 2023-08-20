import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTaskComponent } from './list';
import { InsertTaskComponent } from './insert/insert-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [ListTaskComponent, InsertTaskComponent, EditTaskComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
