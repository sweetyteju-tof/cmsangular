import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  data:any = []
  ngOnInit() {
    $.ajax({
      url: "url",
      type: "GET",
      crossDomain:true,
      success: function (data) {
        if(data){
          this.data = data
        }
      },
      error: function(data){
        alert('error')
      }
    });
  }

}
