import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardengComponent } from './components/boardeng/boardeng.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'board-es' },
  //{ path: 'board/:lang', component: BoardComponent },
  { path: 'board-es', component: BoardComponent },
  { path: 'board-en', component: BoardengComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
