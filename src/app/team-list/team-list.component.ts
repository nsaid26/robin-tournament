import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
  selectedTeam: string;
  @Input() teams: string[];
  @Output() delete = new EventEmitter();
  onSelected: string[];

  constructor() { }

  onSelect(name: string) {
    this.selectedTeam = name;
  }

  onDelete() {
    this.delete.emit(this.selectedTeam);
  }
}
