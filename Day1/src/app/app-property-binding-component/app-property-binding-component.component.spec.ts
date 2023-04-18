import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPropertyBindingComponentComponent } from './app-property-binding-component.component';

describe('AppPropertyBindingComponentComponent', () => {
  let component: AppPropertyBindingComponentComponent;
  let fixture: ComponentFixture<AppPropertyBindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPropertyBindingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPropertyBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
