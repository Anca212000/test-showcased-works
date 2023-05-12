import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus, faUpload, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { PortfolioService } from './portfolio.service';
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
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
  faUpload = faUpload;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  defaultImg = "photo-camera.png";

  title = 'digital-app';
  titleHeader = "Projects"

  works: Works[];
  inputTitle: string = "";
  inputDetails: string = "";
  inputDisplayed: string = "";
  imageName: string = "";
  isEditEnable: boolean = false;
  workId: number = 0;

  constructor(private worksService: PortfolioService) {
    this.works = [];
    this.inputTitle = '';
    this.inputDetails = '';
    this.inputDisplayed = '';
    this.imageName = "";
    this.isEditEnable = false;
    this.workId = 0;
  }

  ngOnInit() {
    this.worksService.getWorks().subscribe((data) => {
      this.works = data as Works[];
    });
  }

  onFileSelected(event:any) {
    const selectedFile:File = event.target.files[0];
    this.imageName = selectedFile.name;
    $("#image-filename").css("display", "block").html(this.imageName);
  }

  createWork(title: string, details: string, workDisplay: string) {
    if (!title || !details || !workDisplay) {
      alert("Complete all fields first!");
    } else {
      let link = title.split(' ').join('-');
      let img = "phone.jpg";
      let visible: boolean = false;

      if (workDisplay === 'show') {
        visible = true;
      } else if(workDisplay === 'hide') {
        visible = false;
      }

      this.worksService.createWork(title, this.defaultImg, link, details, visible).subscribe(() => {
        alert("The work was successfully created!");
        window.location.reload();
      });
      this.inputTitle ='';
      this.inputDetails ='';
      this.inputDisplayed = '';
      // this.inputHide = false;
    }
  }

  editWork(id: number) {
    let visible = false;
    if(this.inputDisplayed === "show") {
      visible = true;
    }
    else {
      visible = false;
    }

    this.worksService.editWork(id, this.inputTitle, this.imageName, 'project', this.inputDetails, visible).subscribe(() => {
      this.isEditEnable = false;
      alert("The work was successfully updated!");
      window.location.reload();
    });

    this.inputTitle ='';
    this.inputDetails ='';
    this.inputDisplayed = '';
  }

  scrollToEditForm(id: number) {
    let project = this.works.filter((item) => item.id === id);
    this.inputTitle = project[0].title;
    this.inputDetails = project[0].details;
    let checkDisplay = project[0].displayed;
    if(checkDisplay) {
      this.inputDisplayed = "show";
    }
    else {
      this.inputDisplayed = "hide";
    }

    this.isEditEnable = true;
    this.workId = id;

    window.scrollTo({ top: 280, behavior: 'smooth' });
  }

  resetFields() {
    this.inputTitle ='';
    this.inputDetails ='';
    this.inputDisplayed = '';
    this.isEditEnable = false;
  }

  checkTypeForm() {
    if(!this.isEditEnable) {
      this.createWork(this.inputTitle, this.inputDetails, this.inputDisplayed);
    }
    else {
      this.editWork(this.workId);
    }
  }

  deleteWork(id: number) {
    let ok = confirm("Are you sure you want to delete this showcased work?");
      if(ok) {
        this.worksService.deleteWork(id).subscribe();
        window.location.reload();
      }
  }
}
