import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardqComponent } from './cardq.component';

describe('CardqComponent', () => {
  let component: CardqComponent;
  let fixture: ComponentFixture<CardqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
