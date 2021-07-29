import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementDeMotDePasseComponent } from './changement-de-mot-de-passe.component';

describe('ChangementDeMotDePasseComponent', () => {
  let component: ChangementDeMotDePasseComponent;
  let fixture: ComponentFixture<ChangementDeMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementDeMotDePasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementDeMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
