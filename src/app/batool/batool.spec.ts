import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batool } from './batool';

describe('Batool', () => {
  let component: Batool;
  let fixture: ComponentFixture<Batool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Batool],
    }).compileComponents();

    fixture = TestBed.createComponent(Batool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
