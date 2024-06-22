import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { WorkingTextComponent } from './text-builders/working-text/working-text.component';

const routes: Routes = [
  {
    path: 'working',
    component: WorkingTextComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {}), HomeRoutingModule, DetailRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
