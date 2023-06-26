import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeNodeComponent } from './edge-node.component';

describe('EdgeNodeComponent', () => {
  let component: EdgeNodeComponent;
  let fixture: ComponentFixture<EdgeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
