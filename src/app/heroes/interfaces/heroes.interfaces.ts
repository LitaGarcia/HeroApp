export interface Hero {
  id?: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

// <!-- <div fxLayout="column">
//   <div>
//     <h1>Buscador de Héroes</h1>
//     <mat-divider></mat-divider>
//   </div>

//   <div fxLayout="column">
//     <h3>Buscador</h3>

//     <mat-form-field>
//       <input
//         type="text"
//         placeholder="Pick one"
//         aria-label="Number"
//         matInput
//         [(ngModel)]="term"
//         [matAutocomplete]="auto"
//         (input)="searching()"
//       />

//       <mat-autocomplete
//         autoActiveFirstOption
//         #auto="matAutocomplete"
//         (optionSelected)="selectedOption($event)"
//       >
//         <mat-option *ngFor="let hero of heroes" [value]="hero">
//           {{ hero.superhero }}
//         </mat-option>

//         <mat-option
//           value=""
//           *ngIf="heroes.length === 0 && term.trim().length > 0"
//         >
//           No se encontró nada con el término {{ term }}
//         </mat-option>
//       </mat-autocomplete>
//     </mat-form-field>
//   </div>

//   <div>
//     <pre>{{ selectedHero | json }}</pre>
//   </div>
// </div> -->
// <h1>hola</h1>

