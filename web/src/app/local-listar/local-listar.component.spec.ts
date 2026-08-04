import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalListarComponent } from './local-listar.component';

describe('LocalListarComponent', () => {
  let component: LocalListarComponent;
  let fixture: ComponentFixture<LocalListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
