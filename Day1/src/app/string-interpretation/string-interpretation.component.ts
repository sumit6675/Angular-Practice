import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpretation',
  templateUrl: './string-interpretation.component.html',
  styleUrls: ['./string-interpretation.component.css'],
})
export class StringInterpretationComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }
}
