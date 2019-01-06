import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerdetailsComponent } from './cutomerdetails.component';

describe('CutomerdetailsComponent', () => {
  let component: CutomerdetailsComponent;
  let fixture: ComponentFixture<CutomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
