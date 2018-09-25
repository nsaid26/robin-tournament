import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatchDate } from '../match-date.model';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  @Input() teams: string[];
  @Input() rounds: MatchDate[];
  @Output() generate = new EventEmitter();
  constructor() { }

  onGenerate() {
    this.generate.emit();
  }
}
