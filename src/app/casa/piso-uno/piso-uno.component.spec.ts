import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoUnoComponent } from './piso-uno.component';

describe('PisoUnoComponent', () => {
  let component: PisoUnoComponent;
  let fixture: ComponentFixture<PisoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
