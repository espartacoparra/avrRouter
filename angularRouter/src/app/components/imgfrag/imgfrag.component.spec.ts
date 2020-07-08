import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfragComponent } from './imgfrag.component';

describe('ImgfragComponent', () => {
  let component: ImgfragComponent;
  let fixture: ComponentFixture<ImgfragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgfragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgfragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
