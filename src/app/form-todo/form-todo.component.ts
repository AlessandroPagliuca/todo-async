import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss']
})
export class FormTodoComponent implements OnInit, OnChanges{
  public isUpdate:boolean = false;// per visualizzare il btn modifica se è true / false submit
  public todoForm = this.fb.group({
    id:[''],
    name:['',[Validators.required]],
    description:[''],
    done: [false],
    deadline: [0],
  });

  @Input() todoEdit!: Todo;
  @Output() updateEventTodo = new EventEmitter<Todo>();
  @Output() pushEventTodoList = new EventEmitter<Todo>();
  constructor(private fb: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    changes['todoEdit']?.currentValue ? changes['todoEdit']?.currentValue.name : null;
    this.todoForm.controls['id'].patchValue(this.todoEdit?.id);
    this.todoForm.controls['name'].patchValue(this.todoEdit?.name);
    this.todoForm.controls['description'].patchValue(this.todoEdit?.description);  
    this.isUpdate = changes['todoEdit'].currentValue ? true : false; 
  }
  ngOnInit(): void {
    
  }
 
  public updateTodo(){
    console.log('updateTodo todoform',this.todoForm.value);
    this.updateEventTodo.emit(this.todoForm.value);
    //reset form
    this.resetInputTodoForm();
    //set isUpdate a false per rimuovere il btn update in html
    this.isUpdate = false;    
  }
  public onSubmitTodo(){
    this.pushEventTodoList.emit(this.todoForm.value);
    //reset form
    this.resetInputTodoForm();
    
  }
  public cancelUpdate(){
      this.isUpdate = false;
      //reset form
      this.resetInputTodoForm();
  }
  private resetInputTodoForm(){
    this.todoForm.controls['name'].setValue('');
    this.todoForm.controls['description'].setValue('');
    this.todoForm.controls['name'].markAsUntouched(undefined);

  }
}