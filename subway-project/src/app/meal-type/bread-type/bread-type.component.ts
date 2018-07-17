import { Component, OnInit } from '@angular/core';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { RecipeService } from '../../recipes/recipe.service';
@Component({
  selector: 'app-bread-type',
  templateUrl: './bread-type.component.html',
  styleUrls: ['./bread-type.component.css']
})
export class BreadTypeComponent implements OnInit {
  breadtype: Array<string> = ["Footlong", "6 Inch"];
  selectedBreadType: string;
  config: object = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
    };
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onBreadTypeChange(){
    this.recipeService.addBreadType(this.selectedBreadType);
  }

}
