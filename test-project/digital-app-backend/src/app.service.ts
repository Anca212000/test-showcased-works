import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export interface Works {
  id: number,
  title: string,
  fileName: string,
  linkProject: string,
  details: string,
  displayed: boolean
}

@Injectable()
export class AppService {
  private works: Array<Works>;

  constructor() {
    this.works = JSON.parse(fs.readFileSync('works.json', 'utf8'));
  }

  getWorks(): Works[] {
    return this.works;
  }

  getWorkById(id: number): Works {
    const index = this.works.findIndex(work => work.id == id);
    const element = this.works[index];
    return element;
  }

  createWork(title: string, fileName: string, linkProject: string, details: string, displayed: boolean): Works[] {
    const work = { id: this.works.length + 1, title, fileName, linkProject, details, displayed};
    this.works = [...this.works, { ...work}];
    fs.writeFileSync('works.json', JSON.stringify(this.works));
    return this.works;
  }

  editWork(id: number, title: string, fileName: string, linkProject: string, details: string, displayed: boolean): Works[] {
    const itemIndex = this.works.findIndex(item => item.id == id);
    this.works[itemIndex].title = title;
    this.works[itemIndex].fileName = fileName;
    this.works[itemIndex].linkProject = linkProject;
    this.works[itemIndex].details = details;
    this.works[itemIndex].displayed = displayed;
    return this.works;
  }

  deleteWork(id: number): Works[] {
    const index = this.works.findIndex((work) => work.id === id);
    this.works.splice(index, 1);
    return this.works;
  }
}
