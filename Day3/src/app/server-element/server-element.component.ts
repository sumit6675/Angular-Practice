import { Component, Input, OnInit, OnChanges, SimpleChange } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent {
  @Input() element: { content: string; name: string; type: string };
  constructor() {
    console.log("constructor called!");
  }
  ngOnChanges(changes:SimpleChange) {
    console.log("onChanges called");
    console.log('changes', changes)
  }
  ngOnInit() {
    console.log("ngonInit called");
  }
}
