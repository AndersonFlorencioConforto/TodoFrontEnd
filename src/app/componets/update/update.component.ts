import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }
  constructor(private router : Router, private service : TodoService) { }

  ngOnInit(): void {
  }

  create():void{
    this.formataData()
    this.service.create(this.todo).subscribe((resp) => {
      this.service.message('Tarefa criada com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Falha ao criar tarefa!');
      this.router.navigate(['']);
    } )
    
   
  }

  cancel():void{
    this.router.navigate([''])

  }

  formataData():void{
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}