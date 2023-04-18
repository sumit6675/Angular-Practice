import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  username:string=""
  array:string[]=[]
  isDisabled=false
  resetUsername(){
    this.username=""
  }
  addServerName(){
    this.array.push(this.username)
  }
}
