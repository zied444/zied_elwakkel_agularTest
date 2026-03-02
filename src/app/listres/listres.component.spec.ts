import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresComponent } from './listres.component';

describe('ListresComponent', () => {
  let component: ListresComponent;
  let fixture: ComponentFixture<ListresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
