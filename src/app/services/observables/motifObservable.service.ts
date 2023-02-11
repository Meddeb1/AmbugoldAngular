import { MotifTransportService } from './../motifTransport/motif-transport.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class motifObservableService implements OnInit{

  public  $motifSubject : Subject <any> = new Subject();
  constructor(private motifService : MotifTransportService) {

  }

  ngOnInit(): void {


  }
}
