import { Component, OnInit } from '@angular/core';
import { Match } from './match.model';
import { MatchDate } from './match-date.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  team: string = '';
  teams: string[] = [];
  dates: MatchDate[] = [];

  addTeam(name: string) {
    this.teams.push(name);
    this.team = null;
  };

  onDelete(name: string): void {
    const index = this.teams.indexOf(name, 0);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
  }

  generateMatches() {
    let n = this.teams.length;
    let rs = [];
    let ps = this.teams.slice();

    if (n % 2 === 1) {
      ps.push("-1");
      n += 1;
    }
    for (var j = 0; j < n - 1; j += 1) {
      rs[j] = [];
      for (var i = 0; i < n / 2; i += 1) {
        if (ps[i] !== '-1' && ps[n - 1 - i] !== '-1') {
          rs[j].push([ps[i], ps[n - 1 - i]]);
        }
      }
      ps.splice(1, 0, ps.pop());
    }
    for (var d of rs) {
      let date = new MatchDate();
      for (var m of d)
        date.matches.push(new Match(m[0], m[1]));
      this.dates.push(date);
    }
    console.log(this.dates);
  }
}
