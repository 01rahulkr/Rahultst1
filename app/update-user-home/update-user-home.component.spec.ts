import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserHomeComponent } from './update-user-home.component';

describe('UpdateUserHomeComponent', () => {
  let component: UpdateUserHomeComponent;
  let fixture: ComponentFixture<UpdateUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
