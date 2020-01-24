import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RecetteItemComponent } from './recette-item/recette-item.component';
import { RecetteListeComponent } from './recette-liste/recette-liste.component';
import { FormAddComponent } from './form-add/form-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PresentationComponent,
    RecetteItemComponent,
    RecetteListeComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
