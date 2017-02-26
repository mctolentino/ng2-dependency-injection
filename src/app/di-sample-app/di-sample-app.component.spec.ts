/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiSampleAppComponent } from './di-sample-app.component';

describe('DiSampleAppComponent', () => {
  let component: DiSampleAppComponent;
  let fixture: ComponentFixture<DiSampleAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiSampleAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiSampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
