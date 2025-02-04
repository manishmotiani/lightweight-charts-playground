import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSlideComponent } from './dialog-slide.component';

describe('DialogSlideComponent', () => {
  let component: DialogSlideComponent;
  let fixture: ComponentFixture<DialogSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
