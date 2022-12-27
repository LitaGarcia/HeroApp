import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: Hero[] = [];
  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe((resp) => {
      this.heroes = resp;
    });
  }
}
