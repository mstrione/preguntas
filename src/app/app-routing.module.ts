import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'games' },
  { path: 'board', component: GamesComponent },
  { path: 'board/:lang', component: GamesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:lang', component: GamesComponent },
  { path: 'board/:gameId/:lang', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
