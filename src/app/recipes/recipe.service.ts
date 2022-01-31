import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./Recipe.model";
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
     "This is simple test", "https://i.imgur.com/2ZZfFQb.jpg",
    [
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 20)
    ]),
    new Recipe(
      "Another Test Recipe ", "This is simple test",
     "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRq1mQLx2tcZ4owspN_OxqcHZBIc0f1F6NfiqBYgGnwEkdc3tbUGKETWmBH2PNppLs-dJJAt92vs2I16Eno7ks",
    [
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 20)
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id - 1];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
