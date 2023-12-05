import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id!: string |number;
  public detail$!: Observable<Todo>;

  constructor(private todoService:TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetail(this.id);
  }
  getDetail(id:number | string){
    this.detail$ = this.todoService.getByIdTodo(id);
  }

}
