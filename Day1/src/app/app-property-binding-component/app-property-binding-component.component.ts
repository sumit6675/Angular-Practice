import { Component } from '@angular/core';

@Component({
  selector: 'app-app-property-binding-component',
  templateUrl: './app-property-binding-component.component.html',
  styleUrls: ['./app-property-binding-component.component.css']
})
export class AppPropertyBindingComponentComponent {
  allowNewServer=false;
  serverCreationStatus="No server is created"
  server=''
  constructor(){
    setTimeout(()=>{
        this.allowNewServer=true;
    },2000)
  }
  onCreateServer(){
    this.serverCreationStatus=this.server
  }
  onUpdateServerName(event:any){
      this.server=event.target.value;
  }
}
