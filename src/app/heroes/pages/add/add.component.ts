import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmMessageComponent } from '../../components/confirm-message/confirm-message.component';
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
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  saveNewHero() {
    if (this.hero.id) {
      //Update Hero into the backend
      this.heroesService
        .setHero(this.hero)
        .subscribe((hero) => this.showSnackbar('Héroe actualizado'));
    } else {
      //Add a new hero into the backend
      this.heroesService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar('Héroe añadido');
      });
    }
  }

  deleteHero() {
    const dialog = this.dialog.open(ConfirmMessageComponent, {
      width: '250px',
      data: this.hero,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.deleteHero(this.hero.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
        });
      }
    });
  }
  showSnackbar(msg: string) {
    this.snackBar.open(msg, 'cerrar!', {
      duration: 2500,
    });
  }
}
