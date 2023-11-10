import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Architecture, VisualType } from 'src/app/models/interfaces/visual.interface';

const mockedArchitectures: Architecture[] = [
  {
    _id: '1',
    name: 'House',
    description: 'big house nice backdoor',
    creationDate: '12.02.2023',
    type: VisualType.architecture
  },
  {
    _id: '2',
    name: 'Shed',
    description: 'Shitty shed for storing some shit',
    creationDate: '11.02.2023',
    type: VisualType.architecture
  },
  {
    _id: '3',
    name: 'Mansion',
    description: 'Jesus Christ you are rich',
    creationDate: '10.02.2023',
    type: VisualType.architecture
  },
]

@Injectable({
  providedIn: 'root'
})
export class ArchitectureService {

  constructor() { }

  getArchitecture(): Observable<Architecture[]> {
    return of(mockedArchitectures);
  }
}
