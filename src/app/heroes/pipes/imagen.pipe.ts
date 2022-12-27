import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen',
  pure: false,
})
export class ImagenPipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    } else if (hero.alt_img) {
      return hero.alt_img;
    }
    return `assets/heroes/${hero.id}.jpg`;
  }
}
