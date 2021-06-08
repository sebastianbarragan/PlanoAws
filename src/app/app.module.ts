import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PisoUnoComponent } from './casa/piso-uno/piso-uno.component';
import { PisoDosComponent } from './casa/piso-dos/piso-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    PisoUnoComponent,
    PisoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
