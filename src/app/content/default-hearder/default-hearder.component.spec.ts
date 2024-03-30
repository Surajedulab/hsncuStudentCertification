import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHearderComponent } from './default-hearder.component';

describe('DefaultHearderComponent', () => {
  let component: DefaultHearderComponent;
  let fixture: ComponentFixture<DefaultHearderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultHearderComponent]
    });
    fixture = TestBed.createComponent(DefaultHearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
