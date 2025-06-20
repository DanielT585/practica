import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasatiemposComponent } from './pasatiempos.component';

describe('PasatiemposComponent', () => {
  let component: PasatiemposComponent;
  let fixture: ComponentFixture<PasatiemposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasatiemposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasatiemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
