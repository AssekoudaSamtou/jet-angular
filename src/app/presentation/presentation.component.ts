import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  presentationUrl: string;

  constructor() {
    this.presentationUrl = '../../assets/images/profile.png';
  }

  ngOnInit() {
  }

}
