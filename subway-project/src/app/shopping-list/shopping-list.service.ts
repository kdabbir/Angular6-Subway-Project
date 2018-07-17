import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {
  RecipeChanged = new Subject<Recipe[]>();
  startedEditing = new Subject<number>();
  private recipes: Recipe[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(Recipe: Recipe) {
    this.recipes.push(Recipe);
    this.RecipeChanged.next(this.recipes.slice());
  }

  addRecipes(recipe: Recipe[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.recipes.push(...recipe);
    this.RecipeChanged.next(this.recipes.slice());
  }

  updateRecipes(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.RecipeChanged.next(this.recipes.slice());
  }

  deleteRecipes(index: number) {
    this.recipes.splice(index, 1);
    this.RecipeChanged.next(this.recipes.slice());
  }
}
