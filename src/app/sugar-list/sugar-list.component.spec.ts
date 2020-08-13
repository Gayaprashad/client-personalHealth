import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarListComponent } from './sugar-list.component';

describe('SugarListComponent', () => {
  let component: SugarListComponent;
  let fixture: ComponentFixture<SugarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
