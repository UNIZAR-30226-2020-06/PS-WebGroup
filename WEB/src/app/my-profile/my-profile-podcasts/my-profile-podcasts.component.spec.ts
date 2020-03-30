import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilePodcastsComponent } from './my-profile-podcasts.component';

describe('MyProfilePodcastsComponent', () => {
  let component: MyProfilePodcastsComponent;
  let fixture: ComponentFixture<MyProfilePodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilePodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
