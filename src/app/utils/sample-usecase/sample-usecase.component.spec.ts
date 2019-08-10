import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleUsecaseComponent } from './sample-usecase.component';

describe('SampleUsecaseComponent', () => {
  let component: SampleUsecaseComponent;
  let fixture: ComponentFixture<SampleUsecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleUsecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
