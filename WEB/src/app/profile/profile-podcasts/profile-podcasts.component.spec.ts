import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePodcastsComponent } from './profile-podcasts.component';

describe('ProfilePodcastsComponent', () => {
  let component: ProfilePodcastsComponent;
  let fixture: ComponentFixture<ProfilePodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
