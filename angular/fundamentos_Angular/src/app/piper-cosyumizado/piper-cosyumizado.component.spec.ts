import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiperCosyumizadoComponent } from './piper-cosyumizado.component';

describe('PiperCosyumizadoComponent', () => {
  let component: PiperCosyumizadoComponent;
  let fixture: ComponentFixture<PiperCosyumizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiperCosyumizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiperCosyumizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
