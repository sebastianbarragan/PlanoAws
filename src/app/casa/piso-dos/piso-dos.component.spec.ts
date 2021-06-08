import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoDosComponent } from './piso-dos.component';

describe('PisoDosComponent', () => {
  let component: PisoDosComponent;
  let fixture: ComponentFixture<PisoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
