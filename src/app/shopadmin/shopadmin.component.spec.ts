import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopadminComponent } from './shopadmin.component';

describe('ShopadminComponent', () => {
  let component: ShopadminComponent;
  let fixture: ComponentFixture<ShopadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
