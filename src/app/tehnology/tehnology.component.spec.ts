import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnologyComponent } from './tehnology.component';

describe('TehnologyComponent', () => {
  let component: TehnologyComponent;
  let fixture: ComponentFixture<TehnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TehnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TehnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
