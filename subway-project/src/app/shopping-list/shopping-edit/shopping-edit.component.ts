import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Recipe } from '../../recipes/recipe.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getRecipe(index);
          // this.slForm.setValue({
          //   name: this.editedItem.name,
          //   description: this.editedItem.description
          //   // ingridients: this.editedItem.ingredients
          // })
        }
      );
  }

  // onSubmit(form: NgForm) {
  //   const value = form.value;
  //   const newRecipe = new Recipe(value.name, value.description,"",null);
  //   if (this.editMode) {
  //     this.slService.updateRecipes(this.editedItemIndex, newRecipe);
  //   } else {
  //     this.slService.addRecipe(newRecipe);
  //   }
  //   this.editMode = false;
  //   form.reset();
  // }

  // onClear() {
  //   this.slForm.reset();
  //   this.editMode = false;
  // }

  onDelete() {
    this.slService.deleteRecipes(this.editedItemIndex);
    this.editMode = false;
    // this.onClear();
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
