import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class DirectivesComponent {
  serverArray: string[] = ['TestServer','Testserver 2'];
  serverNmae: string = '';
  serverCreationStatus: string = '';
  serverId: number = 10;
  serverStatus: string = '';
  serverCreated: boolean = false;
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created name is ' + this.serverNmae;
    this.serverArray.push(this.serverNmae);
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'yellow';
  }
}
