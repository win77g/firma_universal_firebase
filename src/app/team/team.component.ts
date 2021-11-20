import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/apiservices/team.service';
import { Team } from '../shared/models/team.models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  constructor(private Team:TeamService) { }
  data:Team[]


  ngOnInit() {

    this.Team.getTeamList()
      .subscribe((data:Team[])=>{
          this.data=data;
          console.log(this.data);

  })
  }
  // ngOnDestroy(){
  //     this.sub1.unsubscribe();
  // }

}
