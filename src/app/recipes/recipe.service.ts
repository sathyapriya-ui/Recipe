import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private Recipe : Recipe[] =[
    {
    id : '01',
    title : 'Veg',
    imageUrl : 'https://images.themodernproper.com/billowy-turkey/production/posts/Picadillo-9.jpg?w=1067&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1612458911&s=c8132db03b9481c985484b766ca71fa5',
    ingredient : ['potato','tomato']
    },
    {
      id : '02',
      title : 'non-veg',
      imageUrl : 'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Crispy-Smashed-Potatoes-13.jpg?w=1067&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1612459036&s=2ed1ffdb316bb9cbd433d0b5f5415621',
      ingredient : ['fish','chicken']
    },
  ];

  constructor() { }
  getAllRecipes(){
    return[...this.Recipe];
 }
 getRecipe(recipeId: string){
   return {
     ...this.Recipe.find(recipe => {
     return recipe.id === recipeId;
   })
 };
 }
 deleteRecipe(recipeId: string){
 this.Recipe = this.Recipe.filter(recipe => {
   return recipe.id !== recipeId;
 });
}
} 