import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popDisplay: boolean = false;
  taskDisplay: boolean = true;
  myDefaultValue: string = "";
  addItemForm = new FormGroup({
    taskName: new FormControl(),
    taskType: new FormControl()
  });
  completed = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  inProgress = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  todo = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //console.log("else condition");
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // console.log(this.completed);
    // console.log(this.inProgress);
    // console.log(this.todo);
  }
  addItem() {
    //console.log("add item");
    this.addItemForm.reset();
    this.popDisplay = true;
    this.taskDisplay = false;
  }
  save() {
    var taskNameInput = this.addItemForm.get('taskName')?.value;
    var taskTypeInput = this.addItemForm.get('taskType')?.value;
    //console.log(taskNameInput);
    if (taskNameInput != null && taskNameInput != '') {
      if (taskTypeInput == 'Completed') {
        this.completed.push(taskNameInput);
        //console.log(this.completed);
      }
      else if (taskTypeInput == 'In progress') {
        this.inProgress.push(taskNameInput);
        //console.log(this.inProgress);
      }
      else if (taskTypeInput == 'To-do') {
        this.todo.push(taskNameInput);
        //console.log(this.todo);
      }
      this.popDisplay = false;
      this.taskDisplay = true;
    }
    else {
      window.alert('enter task to add');
    }
  }
  cancel() {
    this.popDisplay = false;
    this.taskDisplay = true;
  }
  deleteCompleted(item: string) {
    console.log("delete called - " + item);
    //this.completed.pop();
    const index = this.completed.indexOf(item);
    if (index > -1) {
      this.completed.splice(index, 1);
    }
    console.log(this.completed);
  }
  deleteInProgress(item: string) {
    console.log("delete called - " + item);
    //this.completed.pop();
    const index = this.inProgress.indexOf(item);
    if (index > -1) {
      this.inProgress.splice(index, 1);
    }
    console.log(this.inProgress);
  }
  deleteToDo(item: string) {
    console.log("delete called - " + item);
    //this.completed.pop();
    const index = this.todo.indexOf(item);
    if (index > -1) {
      this.todo.splice(index, 1);
    }
    console.log(this.todo);
  }
}
