import {Component, Input, OnInit} from '@angular/core';
import {Recette} from './recette.model';
import {faCoffee, faSearch, faSearchPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.css']
})
export class RecetteItemComponent implements OnInit {

  @Input() recette: Recette;
  faCoffee = faCoffee;
  faSearch = faSearchPlus;

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    window.console.log('test');
    return false;
  }
}
