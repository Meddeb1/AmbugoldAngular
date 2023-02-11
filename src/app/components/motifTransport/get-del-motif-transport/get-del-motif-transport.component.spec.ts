import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDelMotifTransportComponent } from './get-del-motif-transport.component';

describe('GetDelMotifTransportComponent', () => {
  let component: GetDelMotifTransportComponent;
  let fixture: ComponentFixture<GetDelMotifTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDelMotifTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDelMotifTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
