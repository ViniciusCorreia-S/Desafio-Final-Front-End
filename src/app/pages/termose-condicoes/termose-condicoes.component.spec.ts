import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoseCondicoesComponent } from './termose-condicoes.component';

describe('TermoseCondicoesComponent', () => {
  let component: TermoseCondicoesComponent;
  let fixture: ComponentFixture<TermoseCondicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermoseCondicoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoseCondicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
