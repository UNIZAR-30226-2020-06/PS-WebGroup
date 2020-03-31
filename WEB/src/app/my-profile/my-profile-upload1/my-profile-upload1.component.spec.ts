import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileUpload1Component } from './my-profile-upload1.component';

describe('MyProfileUpload1Component', () => {
  let component: MyProfileUpload1Component;
  let fixture: ComponentFixture<MyProfileUpload1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileUpload1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileUpload1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
