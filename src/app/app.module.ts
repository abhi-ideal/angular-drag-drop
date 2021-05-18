import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { DemoMaterialModule} from './example/material-module';
@NgModule({
  imports:      [ BrowserModule, FormsModule,DemoMaterialModule, 
   RouterModule.forRoot([
      { path: '', component: ExampleComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
