import { Component } from '@angular/core';
import { Teams } from './teamsData';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent {
  teams = Teams
}
