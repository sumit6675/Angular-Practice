import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Mango Milk Shake',
      'A sweet and refreshing mango ',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/mango-milkshake-1.jpg'
    ),
    new Recipe(
      'Mango Milk Shake',
      'A sweet and refreshing mango ',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/mango-milkshake-1.jpg'
    ),
  ];
}
