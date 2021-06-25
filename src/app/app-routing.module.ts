import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './body/detail/detail.component';
import { SearchComponent } from './body/search/search.component';

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "detail", component: DetailComponent },
  { path: "", component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
