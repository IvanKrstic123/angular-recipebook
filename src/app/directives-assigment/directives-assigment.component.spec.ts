import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssigmentComponent } from './directives-assigment.component';

describe('DirectivesAssigmentComponent', () => {
  let component: DirectivesAssigmentComponent;
  let fixture: ComponentFixture<DirectivesAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAssigmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
