import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategorieComponent } from './get-categorie.component';

describe('GetCategorieComponent', () => {
  let component: GetCategorieComponent;
  let fixture: ComponentFixture<GetCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
