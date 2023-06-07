import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  isOdd:boolean=true
  recipe=new Recipe('A Test Recipe','This is an empty recipe',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=1024&quality=50')
  recipes:Recipe[]=[];
constructor(){

}
  ngOnInit(): void {
    for(let i=0;i<5;i++){
      this.isOdd=!this.isOdd
      this.recipes.push(this.recipe);
    }
    
  }

}
