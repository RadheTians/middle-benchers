import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TASKS } from "../../mock-task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []
  data: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.taskService.getTasks().subscribe((data) => (this.data = data["data"]))
  }
  onDelete(task) { 
    console.log(task)
    this.tasks =  this.tasks.filter(t => t["_id"] !== task["_id"]);
    // this.taskService.getTasks().subscribe(
    //   () => this.tasks = this.tasks.filter(t => t["_id"] === task["_id"])
    // );
  }

}
