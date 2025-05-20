import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamboresComponent } from './tambores.component';

describe('TamboresComponent', () => {
  let component: TamboresComponent;
  let fixture: ComponentFixture<TamboresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamboresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
