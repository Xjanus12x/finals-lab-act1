import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestQualityComponent } from './best-quality.component';

describe('BestQualityComponent', () => {
  let component: BestQualityComponent;
  let fixture: ComponentFixture<BestQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
