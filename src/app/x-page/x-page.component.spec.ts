import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPageComponent } from './x-page.component';

describe('XPageComponent', () => {
  let component: XPageComponent;
  let fixture: ComponentFixture<XPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
