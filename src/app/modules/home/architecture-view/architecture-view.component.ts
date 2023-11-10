import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Architecture } from 'src/app/models/interfaces/visual.interface';
import { ArchitectureService } from 'src/app/services/visuals/architecture.service';

@Component({
  selector: 'app-architecture-view',
  templateUrl: './architecture-view.component.html',
  styleUrls: ['./architecture-view.component.scss']
})
export class ArсhitectureViewComponent implements OnInit {
  acrhitecures$:  Observable<Architecture[]> = this.architectureService.getArchitecture() ;


  constructor(
    private architectureService: ArchitectureService
  ) { }

  ngOnInit(): void {
  }

}
