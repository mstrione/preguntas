import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardengComponent } from './boardeng.component';

describe('BoardengComponent', () => {
  let component: BoardengComponent;
  let fixture: ComponentFixture<BoardengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
