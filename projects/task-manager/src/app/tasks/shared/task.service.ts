import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAll(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  insert(task: Task): void {
    const tasks = this.getAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  searchPerId(id: number): Task {
    const tasks: Task[] = this.getAll();
    return tasks.find((task) => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.getAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  delete(id: number): void {
    let tasks: Task[] = this.getAll();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {
    const tasks: Task[] = this.getAll();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].done = !obj.done;
      }
    });
  }
}
