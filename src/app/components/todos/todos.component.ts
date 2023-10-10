import { Component ,OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]=[];
inputTodo:string ="";


  ngOnInit():void {
    this.todos = [
      {content:'First Name',
      completed:false},
      {content:'Second Name',
      completed:true},
      {content:'Third Name',
      completed:false},
      {content:'Fourth Name',
      completed:true},
      {content:'Fifth Name',
      completed:false},
    ];
  }
  toggleDone (id:number){
    this.todos.map((v,i)=> {
      if (i== id) v.completed =!v.completed;
      return v;
    })

  }
  deleteTodo (id:number){
    this.todos = this.todos.filter((v,i)=>i !== id);
  }
  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo="";
  }
}