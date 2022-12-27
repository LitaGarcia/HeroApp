import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };
}
