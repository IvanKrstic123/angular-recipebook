import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./Recipe.model";
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index - 1, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
