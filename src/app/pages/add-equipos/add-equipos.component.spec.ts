import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquiposComponent } from './add-equipos.component';

describe('AddEquiposComponent', () => {
  let component: AddEquiposComponent;
  let fixture: ComponentFixture<AddEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
