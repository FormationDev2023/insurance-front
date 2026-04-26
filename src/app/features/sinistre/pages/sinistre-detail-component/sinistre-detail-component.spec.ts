import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistreDetailComponent } from './sinistre-detail-component';

describe('SinistreDetail', () => {
  let component: SinistreDetailComponent;
  let fixture: ComponentFixture<SinistreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinistreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
