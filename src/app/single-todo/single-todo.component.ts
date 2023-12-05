import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Todo} from '../models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Output() deleteTodoEvent = new EventEmitter<Todo>();

 
  @Input() todo: Todo = {
    id: '',
    name: '',
    description: '',
    done: false,
    
  }
  constructor(private router: Router) { }

  ngOnInit(): void {}

  
  public btnEditTodo(){
    console.log('edit');
    console.log('log',this.todo);
    this.newTodoEvent.emit(this.todo);
  }
  public btnDeleteTodo(){
    this.deleteTodoEvent.emit(this.todo);   
  }
  public doneed(){
    this.todo.done = !this.todo.done;
  }
  public goToDetail(id: number|string) {
    this.router.navigate(['detail',id])
  }
}
