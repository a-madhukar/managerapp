import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListingComponent } from './comment-listing.component';

describe('CommentListingComponent', () => {
  let component: CommentListingComponent;
  let fixture: ComponentFixture<CommentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
