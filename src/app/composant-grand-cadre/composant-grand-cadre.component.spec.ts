import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantGrandCadreComponent } from './composant-grand-cadre.component';

describe('ComposantGrandCadreComponent', () => {
  let component: ComposantGrandCadreComponent;
  let fixture: ComponentFixture<ComposantGrandCadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantGrandCadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantGrandCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
