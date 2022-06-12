import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStandAloneComponent } from './component-stand-alone.component';

describe('ComponentStandAloneComponent', () => {
  let component: ComponentStandAloneComponent;
  let fixture: ComponentFixture<ComponentStandAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentStandAloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
