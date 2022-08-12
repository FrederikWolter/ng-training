import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectPopUpComponent } from './add-project-pop-up.component';

describe('AddProjectPopUpComponent', () => {
  let component: AddProjectPopUpComponent;
  let fixture: ComponentFixture<AddProjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
