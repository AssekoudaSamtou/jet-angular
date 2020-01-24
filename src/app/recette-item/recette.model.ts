export class Recette {
  id: number;
  nom: string;
  photo: string;
  description: string;
  ingredients: string[];

  constructor(id?: number, nom?: string, photo?: string, description?: string, ingredients?: string[]) {
    this.id = id;
    this.nom = nom;
    this.photo = photo;
    this.description = description;
    this.ingredients = ingredients || [];
  }
}
