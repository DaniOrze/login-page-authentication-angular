import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPageComponent } from './new-user-page.component';

describe('NewUserPageComponent', () => {
  let component: NewUserPageComponent;
  let fixture: ComponentFixture<NewUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserPageComponent],
    });
    fixture = TestBed.createComponent(NewUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
