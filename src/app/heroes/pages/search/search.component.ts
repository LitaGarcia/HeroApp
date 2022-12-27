import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  term: string = '';
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private heroesService: HeroesService) {
    // debugger;
  }

  ngOnInit(): void {}

  searching() {
    this.heroesService
      .getSuggests(this.term.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.term = hero.superhero;

    this.heroesService
      .getHeroById(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
