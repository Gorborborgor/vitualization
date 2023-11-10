import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, VisualType } from 'src/app/models/interfaces/visual.interface';

const mockedProducts: Product[] = [
  {
    _id: '1',
    name: 'Chair',
    description: 'Chair is a Chair and Chair of Chair made Chair',
    creationDate: '12.02.2023',
    type: VisualType.products
  },
  {
    _id: '2',
    name: 'Table',
    description: 'Table is a Table',
    creationDate: '11.02.2023',
    type: VisualType.products
  },
  {
    _id: '3',
    name: 'Sofa',
    description: 'SofaSofaSofa',
    creationDate: '10.02.2023',
    type: VisualType.products
  },
  {
    _id: '4',
    name: 'Closet',
    description: 'ClosetClosetCloset',
    creationDate: '19.02.2023',
    type: VisualType.products
  },
  {
    _id: '5',
    name: 'Table2',
    description: 'Table2Table2Table2Table2',
    creationDate: '20.02.2023',
    type: VisualType.products
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(mockedProducts);
  }
}
