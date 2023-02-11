import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelGetallEmploiComponent } from './del-getall-emploi.component';

describe('DelGetallEmploiComponent', () => {
  let component: DelGetallEmploiComponent;
  let fixture: ComponentFixture<DelGetallEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelGetallEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelGetallEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
