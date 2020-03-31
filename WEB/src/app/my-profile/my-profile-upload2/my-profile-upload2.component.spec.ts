import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileUpload2Component } from './my-profile-upload2.component';

describe('MyProfileUpload2Component', () => {
  let component: MyProfileUpload2Component;
  let fixture: ComponentFixture<MyProfileUpload2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileUpload2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileUpload2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
