import { Component } from '@angular/core';
import { ViewWorkService } from './view-work.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface Works {
  id: number,
  title: string,
  fileName: string,
  linkProject: string,
  details: string,
  displayed: boolean
}

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.css']
})

export class ViewWorkComponent {
  work: Works;

  constructor(private viewWorkService: ViewWorkService, private route: ActivatedRoute) { 
    this.work = {
      id: 0,
      title: '',
      fileName: '',
      linkProject: '',
      details: '',
      displayed: false
    };
  }

  ngOnInit() {
    const id:number = this.route.snapshot.params['id'];
    this.viewWorkService.getWorkById(id).subscribe((data) => {
      this.work = data as Works;
    });
  }
}
