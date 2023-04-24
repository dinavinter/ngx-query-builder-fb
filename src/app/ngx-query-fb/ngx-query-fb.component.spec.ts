import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQueryFbComponent } from './ngx-query-fb.component';

describe('NgxQueryFbComponent', () => {
  let component: NgxQueryFbComponent;
  let fixture: ComponentFixture<NgxQueryFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxQueryFbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxQueryFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
