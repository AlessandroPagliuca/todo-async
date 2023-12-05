import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Output() newTodoEventToParent = new EventEmitter<Todo>();
@Output() deleteTodoEventToParent = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {    
  }
  @Input() todos?: Todo[] = [];


}
