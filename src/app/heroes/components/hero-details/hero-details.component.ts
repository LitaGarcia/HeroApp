import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  @Input() hero!: Hero;
}
