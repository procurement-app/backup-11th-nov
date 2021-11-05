import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrequisitionComponent } from './newrequisition.component';

describe('NewrequisitionComponent', () => {
  let component: NewrequisitionComponent;
  let fixture: ComponentFixture<NewrequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
