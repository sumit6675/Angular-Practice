import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  toggle: boolean = true;
  log: number[] = [];
  toggleButton(): void {
    this.toggle = !this.toggle;
    this.log.push(Date.now());
  }
}
