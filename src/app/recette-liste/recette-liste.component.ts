import { Component, OnInit } from '@angular/core';
import {Recette} from '../recette-item/recette.model';

@Component({
  selector: 'app-recette-liste',
  templateUrl: './recette-liste.component.html',
  styleUrls: ['./recette-liste.component.css']
})
export class RecetteListeComponent implements OnInit {

  recettes: Recette[];

  constructor() {
    this.recettes = [
      new Recette(1, 'tabassé de tubercule', '../../assets/images/recettes/cabin.png'),
      new Recette(2, 'riz au soupsson d\'haricot', '../../assets/images/recettes/cake.png'),
      new Recette(3, 'Le ayimolu', '../../assets/images/recettes/circus.png'),
      new Recette(4, 'Le foutou', '../../assets/images/recettes/game.png'),
      new Recette(5, 'Le foutou', '../../assets/images/recettes/safe.png'),
      new Recette(6, 'Le foutou', '../../assets/images/recettes/submarine.png'),
    ];
  }

  ngOnInit() {
  }

}
