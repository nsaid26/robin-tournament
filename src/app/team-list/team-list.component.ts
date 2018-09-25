import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
  @Input() teams: string[];
  @Output() delete = new EventEmitter();
  selectedTeam: string;

  constructor() { }
  onSelect(name: string) {
    this.selectedTeam = name;
  }
  onDelete() {
    this.delete.emit(this.selectedTeam);
    this.selectedTeam = this.teams ? this.teams[0] : null;
  }
}
