import { Component, OnInit } from '@angular/core';

import { IProduct } from '@kirby/products/data';
import { ShopFacade } from '../../+state/shop.facade';
import { CategoriesFacade, ProductsFacade } from '@kirby/products/data-access';

@Component({
  selector: 'shop-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  category$ = this.categoriesFacade.selected$;
  shoppingCart$ = this.shopFacade.shoppingCart$;
  products$ = this.productsFacade.paginatedProducts$;

  constructor(
    private shopFacade: ShopFacade,
    private productsFacade: ProductsFacade,
    private categoriesFacade: CategoriesFacade
  ) {}

  ngOnInit(): void {}
  addProduct(product: IProduct) {
    this.shopFacade.addProductToShoppingCart(product);
  }

  removeProduct(product: IProduct) {
    this.shopFacade.removeProductFromShoppingCart(product);
  }
}
