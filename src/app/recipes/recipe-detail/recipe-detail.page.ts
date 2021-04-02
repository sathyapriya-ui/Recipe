
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor(private activatedroute: ActivatedRoute, 
              private recipeservice: RecipeService,  
              private router: Router,
              private alertCtrl: AlertController)
               { }
             


  selectedItem: Recipe;
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(ParamMap => {
      if (!ParamMap.has('id'))
        return;

      const recipeId = ParamMap.get("id");
      this.selectedItem = this.recipeservice.getRecipe(recipeId);
    });
  }
    onDeleteRecipe(){
      this.alertCtrl.create({
        header: 'Are you sure',
        message: 'Do you really want to delete recipe',
        buttons: [
          {
            text: 'cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () =>{
              this.recipeservice.deleteRecipe(this.selectedItem.id);
              this.router.navigate(['/recipes']);

            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
      
    }

  }

