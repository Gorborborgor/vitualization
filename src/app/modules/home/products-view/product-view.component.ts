import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/interfaces/visual.interface';
import { ProductsService } from 'src/app/services/visuals/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  products$: Observable<Product[]> = this.productsService.getProducts() ;

  constructor(
    private productsService: ProductsService
  ) {}
}
