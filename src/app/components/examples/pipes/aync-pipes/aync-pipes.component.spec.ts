import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyncPipesComponent } from './aync-pipes.component';

describe('AyncPipesComponent', () => {
  let component: AyncPipesComponent;
  let fixture: ComponentFixture<AyncPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyncPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyncPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
