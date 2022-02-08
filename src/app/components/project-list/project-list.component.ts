import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      id: 1,
      code: "CHELSEA",
      name: "Dự án mẫu",
      status: "Hoàn thành",
      members: 6,
    },
    {
      id: 2,
      code: "MAN UNT",
      name: "Dự án 1",
      status: "Hoàn thành",
      members: 8,
    },
    {
      id: 3,
      code: "XXX007",
      name: "Dự án tốt nghiệp",
      status: "Chưa hoàn thành",
      members: 9,
    },
    {
      id: 4,
      code: "LOY167",
      name: "Dự án giữa kì",
      status: "Hoàn thành",
      members: 7,
    },
    {
      id: 5,
      code: "HYS113",
      name: "Dự án thực tập",
      status: "Chưa hoàn thành",
      members: 5,
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
