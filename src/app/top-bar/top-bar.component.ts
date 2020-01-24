import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  faPlus = faPlus;
  constructor() { }

  ngOnInit() {
  }

  showAddForm() {
    console.log('x');
  }
}
