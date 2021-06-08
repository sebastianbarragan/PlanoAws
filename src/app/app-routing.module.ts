import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PisoDosComponent } from './casa/piso-dos/piso-dos.component';
import { PisoUnoComponent } from './casa/piso-uno/piso-uno.component';

const routes: Routes = [
   {
     path:'piso1',
     component: PisoUnoComponent

     
   },
   {
    path:'piso2',
    component: PisoDosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
