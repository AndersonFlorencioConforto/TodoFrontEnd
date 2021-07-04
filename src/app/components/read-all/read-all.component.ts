import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = [];
  listFinished : Todo [] = [];

  closed= 0;

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(): void{
    this.service.findAll().subscribe((resp) =>{
      resp.forEach(todo => {
        if(todo.finalizado){
          this.listFinished.push(todo)
        }else{
          this.list.push(todo);
        }
      })
      this.closed = this.listFinished.length
    })
  }

  delete(id : any):void{
    this.service.delete(id).subscribe((resp) =>{
      if(resp === null){
        this.service.message('Task deletada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }

  

}
