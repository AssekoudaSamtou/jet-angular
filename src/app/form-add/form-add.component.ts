import {Component, Input, OnInit} from '@angular/core';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import {Recette} from '../recette-item/recette.model';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  imageURL = 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png';
  fileData: File;
  previewURL: any;
  faArrowAltCircleRight = faArrowAltCircleRight;
  recette: Recette;

  @Input() recettes: Recette[];

  constructor() {
    this.recette = new Recette(7);
  }

  ngOnInit() {
  }

  openFileChooser() {
    $('#photo').trigger('click');
    return false;
  }

  processImage(imageInput: HTMLInputElement) {
    console.log('image processed');
    this.fileData = imageInput.files[0];
    this.preview();
    return false;
  }

  preview() {
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.previewURL = reader.result;
      this.imageURL = this.previewURL;
      this.recette.photo = this.imageURL;
    };
  }

  addIngredient(value: string) {
    console.log(value);
    this.recette.ingredients.push(value);
    return false;
  }

  ajouterRecette() {
    this.recettes.push(this.recette);
    return false;
  }
}
