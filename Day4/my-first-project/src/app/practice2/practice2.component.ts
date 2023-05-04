import { Component } from '@angular/core';
import { PracticeServicesService } from '../practice-services.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {
    authers;
    constructor(auther:PracticeServicesService){
        this.authers=auther.getAuthers()
    }
}
