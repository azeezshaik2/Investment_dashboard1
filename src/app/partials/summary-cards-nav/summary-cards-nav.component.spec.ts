import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCardsNavComponent } from './summary-cards-nav.component';

describe('SummaryCardsNavComponent', () => {
  let component: SummaryCardsNavComponent;
  let fixture: ComponentFixture<SummaryCardsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCardsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCardsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
