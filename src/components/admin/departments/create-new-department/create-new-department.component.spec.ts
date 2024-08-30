import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDepartmentComponent } from './create-new-department.component';

describe('CreateNewDepartmentComponent', () => {
  let component: CreateNewDepartmentComponent;
  let fixture: ComponentFixture<CreateNewDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
