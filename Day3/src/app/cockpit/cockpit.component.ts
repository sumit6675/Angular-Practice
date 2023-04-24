import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  newServerName = "";
  newServerContent = "";
  
  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });
  }

  onAddBlueprint(
    serverName: HTMLInputElement,
    serverContent: HTMLInputElement
  ) {
    this.bluePrintCreated.emit({
      blueprintName: serverName.value,
      blueprintContent: serverContent.value,
    });
  }
}
