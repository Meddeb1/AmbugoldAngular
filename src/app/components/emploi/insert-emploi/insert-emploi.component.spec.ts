import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmploiComponent } from './insert-emploi.component';

describe('InsertEmploiComponent', () => {
  let component: InsertEmploiComponent;
  let fixture: ComponentFixture<InsertEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
