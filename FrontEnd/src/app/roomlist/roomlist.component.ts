import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  roomlist: Object[] = [
    {"Room" : "301", "Type" : "Deluxe", "Price" : 2000, "Status" : 1},

    {"Room" : "302", "Type" : "PresidentSuite", "Price" : 1000, "Status" : 0},

  ]
  if (){

  }

}
