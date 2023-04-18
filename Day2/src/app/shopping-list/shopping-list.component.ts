import { Component } from '@angular/core';
import { ingredients } from '../Shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: ingredients[] = [
    new ingredients('Apple', 5),
    new ingredients('Tomatos', 10),
  ];
}
