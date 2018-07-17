import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.css']
})
export class MealTypeComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  getRecipe(recipeType:string){
    this.recipeService.updateMealType(recipeType);
  }
}
