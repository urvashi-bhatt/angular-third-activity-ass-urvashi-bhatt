import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  showbang = false;
  showphd = false;
  showmysore = false;
  server:any;
  server_Id:any;
  myArr = [{
      "facultyId":101,
      "facultyName":"Vivek",
      "facultyMobile":"9998887771",
      "facultyEmail":"vivek@abc.com",
      "highestQualification" :"Dr",
      "workLocation": "Mysore"
    },{
      "facultyId": 102,
      "facultyName":"Pridhvi",
      "facultyMobile":"6668887772",
      "facultyEmail":"pridhvi@abc.com",
      "highestQualification" :"Dr",
      "workLocation": "Banglore"
    },{
      "facultyId": 103,
      "facultyName":"Patrick",
      "facultyMobile":"8889997773",
      "facultyEmail":"patrick@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Mysore"
    },{
      "facultyId": 104,
      "facultyName":"Rajesh",
      "facultyMobile":"9988987674",
      "facultyEmail":"rajesh@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Banglore"
    },{
      "facultyId": 105,
      "facultyName":"Bhargav",
      "facultyMobile":"9898785671",
      "facultyEmail":"bhargav@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Banglore"
    },{
      "facultyId": 106,
      "facultyName":"Ajay",
      "facultyMobile":"8978187541",
      "facultyEmail":"ajay@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Hyderabad"
    },{
      "facultyId": 107,
      "facultyName":"Bharath",
      "facultyMobile":"7876527713",
      "facultyEmail":"bharth@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Banglore"
    },{
      "facultyId": 108,
      "facultyName":"Thiruppathi",
      "facultyMobile":"9894147084",
      "facultyEmail":"thiruppathi@abc.com",
      "highestQualification" :"ME",
      "workLocation": "Mysore"
    }];

    showbanglore(){
    this.showbang = true;
    }
    showPhd(){
    this.showphd = true;      
    }
    showMysure(){
      this.showmysore = true;
    }

  constructor() { }

  ngOnInit(): void {

  }
}
