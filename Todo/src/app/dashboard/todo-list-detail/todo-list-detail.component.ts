import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

export class Todo {
  title : number | undefined;
  description : string | undefined;
}


@Component({
  selector: 'app-todo-list-detail',
  templateUrl: './todo-list-detail.component.html',
  styleUrls: ['./todo-list-detail.component.scss']
})


export class TodoListDetailComponent implements OnInit {
  data: any;





  constructor() { }

  title = new FormControl('');
  discription = new FormControl('');


  ngOnInit(): void {

}


datasource : Todo[] = [];

addToList(){
    this.datasource.push({
      title : this.title.value,
      description: this.discription.value
    });
    console.log("list data = " , JSON.stringify(this.datasource));
  }


  removeItem(){
  console.log("index of array ===");
  }




}
