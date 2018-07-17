import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-sauce-type',
  templateUrl: './sauce-type.component.html',
  styleUrls: ['./sauce-type.component.css']
})
export class SauceTypeComponent implements OnInit {
  sauceType: Array<string> = ["Schezwan", "Black Olive","Mustard","Sweet Onion"];
  selectedSauceType: string[];
  config: object = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
    };
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSauceTypeChange(){
    this.recipeService.addSauceType(this.selectedSauceType);
  }

}
