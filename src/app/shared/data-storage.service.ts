import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/Recipe.model';
import { RecipeService } from './../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // put will update all data
    this.http.put('https://ng-recipebook-d1736-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes)
      .subscribe(response => console.log(response)
      );
  }

  // if ingredients not saved when fetch is called they are undefined...
  // ingredients property is always set
  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-recipebook-d1736-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map(recipes => {  // map rxjs operator
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        }) // map js array method
      }), tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }))
  }



}
