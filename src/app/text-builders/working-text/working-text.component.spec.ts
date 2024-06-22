import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTextComponent } from './working-text.component';

describe('WorkingTextComponent', () => {
  let component: WorkingTextComponent;
  let fixture: ComponentFixture<WorkingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WorkingTextComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(WorkingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
