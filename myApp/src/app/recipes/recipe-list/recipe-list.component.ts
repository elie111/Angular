import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[new Recipe('A Test Recipe','This is an empty recipe',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=1024&quality=50'),
  new Recipe('A Second Recipe','This is another empty recipe',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=1024&quality=50')];
constructor(){

}
  ngOnInit(): void {

    
  }
  onResipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe); 

  }

}
