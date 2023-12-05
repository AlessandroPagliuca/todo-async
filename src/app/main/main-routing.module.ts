import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
    {
        path:'',
        component: MainComponent,
    },
    {
      path:'detail/:id',
      component: DetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//forChild -> lazy loading
  exports: [RouterModule]
})
export class MainRoutingModule { }
