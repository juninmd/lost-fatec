import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListarComponent } from './status-listar.component';

describe('StatusListarComponent', () => {
  let component: StatusListarComponent;
  let fixture: ComponentFixture<StatusListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
