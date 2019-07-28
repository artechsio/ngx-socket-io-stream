import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSocketIoStreamComponent } from './ngx-socket-io-stream.component';

describe('NgxSocketIoStreamComponent', () => {
  let component: NgxSocketIoStreamComponent;
  let fixture: ComponentFixture<NgxSocketIoStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSocketIoStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSocketIoStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
