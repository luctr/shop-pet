import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./component/layout/layout.component";
import {DetailsPetComponent} from "./component/User/details-pet/details-pet.component";
import {LoginComponent} from "./component/shared/login/login.component";
import {RegisterComponent} from "./component/shared/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },{
  path:'details',
    component:DetailsPetComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
