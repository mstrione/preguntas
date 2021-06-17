import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'board' },
  { path: 'board', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
