import { Component, Input } from '@angular/core';
import { Match } from '../match.model';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  @Input() matches: Match[];

  constructor() { }
}
