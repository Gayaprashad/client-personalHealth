import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarEditComponent } from './sugar-edit.component';

describe('SugarEditComponent', () => {
  let component: SugarEditComponent;
  let fixture: ComponentFixture<SugarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
