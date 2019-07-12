import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
 
  item = {
    name:'',
    price:0,
    type:''
  };

  constructor() { }

  ngOnInit() {
  }

}
