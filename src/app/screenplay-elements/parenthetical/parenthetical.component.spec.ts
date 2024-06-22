import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentheticalComponent } from './parenthetical.component';

describe('ParentheticalComponent', () => {
  let component: ParentheticalComponent;
  let fixture: ComponentFixture<ParentheticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ParentheticalComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ParentheticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
