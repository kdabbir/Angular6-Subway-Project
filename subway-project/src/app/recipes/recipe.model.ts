import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public mealType: string;
  public subType: string;
  public sauceSelection: string[];
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, mealType: string, subType: string,sauceSelection: string[], ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.mealType = mealType;
    this.subType = subType;
    this.sauceSelection = sauceSelection;
  }
}
