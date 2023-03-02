import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDrinkComponent } from './add-drink/add-drink.component';
import { CalculateBacComponent } from './calculate-bac/calculate-bac.component';
import { SpinBottleComponent } from './spin-bottle/spin-bottle.component';
import { ReactionTimeComponent } from './reaction-time/reaction-time.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    AddDrinkComponent,
    CalculateBacComponent,
    SpinBottleComponent,
    ReactionTimeComponent,
  ],
  imports: [BrowserModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
