import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public todoEdit!:Todo;
  public todos?: Todo[] = [];//valorizzo l'array con la chiamata get
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.findAll();
   }
   
  private findAll(){
    this.todoService.getTodos().subscribe({
      next: (value:Todo[]) => {
        // console.log('value=>', value);
        value.forEach((item: Todo) => {// E' UN CONTROLLO PROVVISORIO
          item.done = false;
        });
        this.todos?.push(...value);//creo la copia dell'array usando lo spread operator
      },
      error: error =>{
        console.log(error);
      },
      complete() {
        console.log('success');
      },
    });
  }

  public editTodo(todo: Todo) {//todo passato dal single-todo
    this.todoEdit = todo;
    // console.log('main', this.todoEdit);
  }

  public updateTodo(todo: Todo): void {    
    this.todoService.updateTodo(todo)
    .pipe(switchMap(()=> this.todoService.getTodos()))
    .subscribe((res:Todo[]) =>{  
      this.todos = res;
    })
  }

  public deleteTodo(deleteTodo: Todo){
    this.todoService.removeTodo(deleteTodo)
    .pipe(switchMap(()=> this.todoService.getTodos()))
    .subscribe((res:Todo[]) => {
      // console.log('res', res);
      this.todos = res;
    }) 
  }

  public addTodo(todo:Todo){
    if(todo.description === null || todo.description === undefined){
      todo.description = '';
    }
    this.todoService.sendTodo(todo).subscribe({
      next: (res:Todo) => {
        this.todos?.push(res);
      },
      error: error =>{
        console.log(error);
      },
      complete() {
        console.log('success');
      },
    })
  }
}