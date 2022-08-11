import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbaTableComponent } from './abba-table.component';

describe('AbbaTableComponent', () => {
  let component: AbbaTableComponent;
  let fixture: ComponentFixture<AbbaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbbaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
