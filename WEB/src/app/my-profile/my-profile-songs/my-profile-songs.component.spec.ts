import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSongsComponent } from './my-profile-songs.component';

describe('MyProfileSongsComponent', () => {
  let component: MyProfileSongsComponent;
  let fixture: ComponentFixture<MyProfileSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
