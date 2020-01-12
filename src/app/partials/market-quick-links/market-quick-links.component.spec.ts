import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketQuickLinksComponent } from './market-quick-links.component';

describe('MarketQuickLinksComponent', () => {
  let component: MarketQuickLinksComponent;
  let fixture: ComponentFixture<MarketQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
