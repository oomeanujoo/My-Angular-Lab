import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCComponent } from './side-nav-c.component';

describe('SideNavCComponent', () => {
  let component: SideNavCComponent;
  let fixture: ComponentFixture<SideNavCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
