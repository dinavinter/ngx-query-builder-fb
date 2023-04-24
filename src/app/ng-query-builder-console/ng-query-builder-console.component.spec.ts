import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQueryBuilderConsoleComponent } from './ng-query-builder-console.component';

describe('NgQueryBuilderConsoleComponent', () => {
  let component: NgQueryBuilderConsoleComponent;
  let fixture: ComponentFixture<NgQueryBuilderConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgQueryBuilderConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgQueryBuilderConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
