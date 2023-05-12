import { Component } from '@angular/core';
import { WorksService } from './works.service';
import { faEdit, faTrash, faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

export interface Works {
  id: number,
  title: string,
  fileName: string,
  linkProject: string,
  details: string,
  displayed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
