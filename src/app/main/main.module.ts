import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormTodoComponent } from '../form-todo/form-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleTodoComponent } from '../single-todo/single-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { DetailComponent } from '../detail/detail.component';



@NgModule({
  declarations: [
    MainComponent,
    FormTodoComponent,
    SingleTodoComponent,
    TodoListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
