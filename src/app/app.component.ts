import { Component, OnInit } from '@angular/core';
import { Match } from './match.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  team: string = '';
  teams: string[] = [];
  matchs: Match[] = [];

  AddTeam(name: string) {
    this.teams.push(name);
    this.team = null;
  };
  onDelete(name: string): void {
    const index = this.teams.indexOf(name, 0);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
  }
  teamExist() {
    return this.teams.indexOf(this.team) > -1;
  }
}
