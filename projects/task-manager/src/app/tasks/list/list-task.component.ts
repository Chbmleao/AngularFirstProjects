import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Do you want to remove "' + task.name + '" task?')) {
      this.taskService.delete(task.id);
      this.tasks = this.getAll();
    }
  }
}
