import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpretationComponent } from './string-interpretation.component';

describe('StringInterpretationComponent', () => {
  let component: StringInterpretationComponent;
  let fixture: ComponentFixture<StringInterpretationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpretationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInterpretationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
