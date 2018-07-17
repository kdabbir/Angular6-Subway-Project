import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // constructor(name: string, desc: string, imagePath: string, mealType: string, subType: string,sauceSelection: string, ingredients: Ingredient[]) {
  private vegRecipes: Recipe[] = [
    new Recipe(
      'Veg Cheese Burger',
      'A super-tasty cheesy burger - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Soni_Snacks-_Veg_Cheese_Burger.jpg',
      'Veg',
      '',
      [],
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Aloo Patty', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Maharaja Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Vegan_Burger_%285841255378%29.jpg',
      'Veg',
      '',
      [],
      [
        new Ingredient('Buns', 2),
        new Ingredient('Potato', 1)
      ])
  ];
  private nonVegRecipes: Recipe[] = [
      new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        'Non-Veg',
        '',
        [],
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',   'Non-Veg',
        '',
        [],
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
  ];

  filterRecipes:Recipe[];
  selectedMealType: string = "Veg";
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    var selectedMeal = this.selectedMealType;
   if(selectedMeal ==  "Veg"){
     this.filterRecipes = this.vegRecipes;
   } else {
    this.filterRecipes = this.nonVegRecipes;
   }
   return this.filterRecipes;
  }

  getRecipe(index: number) {
    return this.filterRecipes[index];
  }

  addRecipesToShoppingList(recipe: Recipe[]) {
    this.slService.addRecipes(recipe);
  }

  addRecipe(recipe: Recipe) {
    if(recipe.mealType=="Veg"){
    this.vegRecipes.push(recipe);
    } else {
      this.nonVegRecipes.push(recipe);
    }
    this.getRecipes();
    this.recipesChanged.next(this.filterRecipes.slice());
  }
  addSauceType(sauce: string[]){
   this.vegRecipes.forEach(function(recipe){
     recipe.sauceSelection = sauce;
   }) 
   this.nonVegRecipes.forEach(function(recipe){
    recipe.sauceSelection = sauce;
  }) 
  }

  addBreadType(bread: string){
    this.vegRecipes.forEach(function(recipe){
      recipe.subType = bread;
    }) 
    this.nonVegRecipes.forEach(function(recipe){
      recipe.subType = bread;
    }) 
   }

   updateMealType(mealtype:string){
     this.selectedMealType = mealtype;
     this.getRecipes();
     this.recipesChanged.next(this.filterRecipes);     
   }


  updateRecipe(index: number, newRecipe: Recipe) {
    this.filterRecipes[index] = newRecipe;
    this.recipesChanged.next(this.filterRecipes);
  }

  deleteRecipe(index: number) {
    this.filterRecipes.splice(index, 1);
    this.recipesChanged.next(this.filterRecipes);
  }
}
