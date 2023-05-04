import { Component } from "@angular/core";
import { CoursesService } from "./couses.service";
@Component({
    selector:'courses',
    template:
    `
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let item of courses">{{item}}</li>
    </ul>
    <ul>
        <li *ngFor="let item of alternateCourse">{{item}}</li>
    </ul>

    `
})
export class coursesComponents{
    title="Sumits First Angular Projects"
    getTitle() {
        return this.title
    }
    courses=["course1","course2","course3","course4","course5","course6"]
    alternateCourse;
    constructor(service:CoursesService){
        this.alternateCourse=service.getCourses()
    }
}
