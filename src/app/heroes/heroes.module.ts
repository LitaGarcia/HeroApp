import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroComponent } from './pages/hero/hero.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AddComponent,
    HomeComponent,
    ListComponent,
    HeroDetailsComponent,
    ImagenPipe,
    HeroComponent,
    SearchComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, MaterialModule, FormsModule],
})
export class HeroesModule {}
