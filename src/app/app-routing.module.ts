
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListresComponent } from './listres/listres.component';
import { HomeComponent } from './home/home.component';
import { UpdateresComponent } from './updateres/updateres.component';
import { AddresComponent } from './addres/addres.component';
import { DetailsResComponent } from './details-res/details-res.component';


const routes: Routes = [
  {path :'',redirectTo:'Home',pathMatch:'full'},
{path:'Home',component:HomeComponent},
{path:'listres',component:ListresComponent},
{path:'ajouter',component:AddresComponent},
{path:'update/:id',component:UpdateresComponent},
{path : 'detail/:id', component: DetailsResComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
