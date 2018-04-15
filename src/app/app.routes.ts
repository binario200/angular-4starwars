import {RouterModule, Routes} from '@angular/router';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const APP_ROUTES: Routes = [
  {path: 'movies', component: MoviesListComponent },
  {path: 'characters', component: CharactersListComponent},
];

export const AppRootRouting = RouterModule.forRoot(APP_ROUTES);
