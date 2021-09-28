import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./component/layout/layout.component";
import {DetailsPetComponent} from "./component/User/details-pet/details-pet.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },{
  path:'details',
    component:DetailsPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
