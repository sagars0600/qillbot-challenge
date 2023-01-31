import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './views/discover/discover.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent },
  { path: 'discover', component: DiscoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
