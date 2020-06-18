import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-now',
  templateUrl: './volunteer-now.component.html',
  styleUrls: ['./volunteer-now.component.css']
})
export class VolunteerNowComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    var name = (document.getElementById("name") as HTMLInputElement).value;

    
  }

}
