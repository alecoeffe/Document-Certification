import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Web3Service } from './web3.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
