import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  items: Recipe[];
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.items = this.recipeservice.getAllRecipes();
    console.log('ngOnInit');0
    console.log(this.items);
  }

}
