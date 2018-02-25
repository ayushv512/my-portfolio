import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  csitems: Array<any> = []
  pmitems: Array<any> = []
  agitems: Array<any> = []
    constructor() {
      this.csitems = [
        { name:'assets/images/D2CDashboard-1.png' },
        { name:'assets/images/D2CDashboard-2.png' },
        { name:'assets/images/D2CDashboard-3.png' },
        { name:'assets/images/D2CDashboard-4.png' },
        { name:'assets/images/D2CDashboard-5.png' },
        { name:'assets/images/D2CDashboard-6.png' },
        { name:'assets/images/D2CDashboard-7.png' },
        { name:'assets/images/D2CDashboard-8.png' },
        { name:'assets/images/D2CDashboard-9.png' },
        { name:'assets/images/D2CDashboard-10.png' },
        { name:'assets/images/D2CDashboard-11.png' },
        { name:'assets/images/D2CDashboard-12.png' },
        { name:'assets/images/D2CDashboard-13.png' },
        { name:'assets/images/D2CDashboard-14.png' },
        { name:'assets/images/D2CDashboard-15.png' },
        { name:'assets/images/D2CDashboard-16.png' },
        { name:'assets/images/D2CDashboard-17.png' },
        { name:'assets/images/D2CDashboard-18.png' }
      ]
      this.pmitems = [
        { name:'assets/images/A2CDashboard-1.png' },
        { name:'assets/images/A2CDashboard-2.png' },
        { name:'assets/images/A2CDashboard-3.png' },
        { name:'assets/images/A2CDashboard-4.png' }
      ]
      this.agitems = [
        { name:'assets/images/AgentHeirarchy-1.png' },
        { name:'assets/images/AgentHeirarchy-2.png' },
        { name:'assets/images/AgentHeirarchy-3.png' },
        { name:'assets/images/AgentHeirarchy-4.png' },
        { name:'assets/images/AgentHeirarchy-5.png' },
        { name:'assets/images/AgentHeirarchy-6.png' },
        { name:'assets/images/AgentHeirarchy-7.png' },
        { name:'assets/images/AgentHeirarchy-8.png' },
        { name:'assets/images/AgentHeirarchy-9.png' }
      ]
    }


  ngOnInit() {
  }

}
