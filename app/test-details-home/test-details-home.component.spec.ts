import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsHomeComponent } from './test-details-home.component';

describe('TestDetailsHomeComponent', () => {
  let component: TestDetailsHomeComponent;
  let fixture: ComponentFixture<TestDetailsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
