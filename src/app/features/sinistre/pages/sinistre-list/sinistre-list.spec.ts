import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistreList } from './sinistre-list';

describe('SinistreList', () => {
  let component: SinistreList;
  let fixture: ComponentFixture<SinistreList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinistreList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistreList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
