import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BpListComponent} from './bp-list/bp-list.component';
import { BpEditComponent } from './bp-edit/bp-edit.component';
import { HomeComponent } from './home/home.component';
import { SugarListComponent } from './sugar-list/sugar-list.component';
import { SugarEditComponent } from './sugar-edit/sugar-edit.component';

const routes: Routes = [
 {path:'', redirectTo :'/home',pathMatch:'full'},
 {
   path:'home',
   component:HomeComponent
 },
 {
   path:'bp-add',
   component:BpEditComponent
 },
 {
   path:'bp-edit/:id',
   component:BpEditComponent
 },
 {
  path:'bp-list',
  component:BpListComponent
 },
 {
  path:'sugar-list',
  component:SugarListComponent
 },
 {
  path:'sugar-add',
  component:SugarEditComponent
 },
 {
  path:'sugar-edit/:id',
  component:SugarEditComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
