import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinistreListComponent } from './sinistre-list-component';

describe('SinistreList', () => {
  let component: SinistreListComponent;
  let fixture: ComponentFixture<SinistreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinistreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
