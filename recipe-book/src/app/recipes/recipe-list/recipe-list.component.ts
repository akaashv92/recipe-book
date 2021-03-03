import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'This is the best biryani', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg'),
    new Recipe('Chicken Biryani', 'This is the best biryani', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
