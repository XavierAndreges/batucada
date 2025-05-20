import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipisteComponent } from './multipiste.component';

describe('BatucalubComponent', () => {
  let component: MultipisteComponent;
  let fixture: ComponentFixture<MultipisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
