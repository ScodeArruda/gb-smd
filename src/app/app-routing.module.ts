import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'home',
    component: HeaderComponent
  },
  {
    path: 'profile',
    component: TopComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
