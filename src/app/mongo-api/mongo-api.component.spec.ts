import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoAPIComponent } from './mongo-api.component';

describe('MongoAPIComponent', () => {
  let component: MongoAPIComponent;
  let fixture: ComponentFixture<MongoAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
