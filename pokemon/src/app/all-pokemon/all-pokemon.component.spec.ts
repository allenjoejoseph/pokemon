import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemonComponent } from './all-pokemon.component';

describe('AllPokemonComponent', () => {
  let component: AllPokemonComponent;
  let fixture: ComponentFixture<AllPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
