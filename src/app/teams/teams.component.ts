import { Component, OnInit } from '@angular/core';
import { Teams } from './teamsData';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {
  teams = Teams
  newTeams:any = []

  ngOnInit(): void {
      this.logNewTeams()
  }

  logNewTeams() {
    const tryNew = this.teams.map(each => {
      return {
        ...each,
        full_name: each.name.split(' ').join('-'),
      }
    });
    this.newTeams = tryNew
  }
}
