import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnterprisesComponent } from './dialog-enterprises.component';

describe('DialogEnterprisesComponent', () => {
  let component: DialogEnterprisesComponent;
  let fixture: ComponentFixture<DialogEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
