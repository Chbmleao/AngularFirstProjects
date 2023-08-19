import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.css'],
})
export class InsertTaskComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  insert(): void {
    if (this.formTask.form.valid) {
      this.taskService.insert(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
