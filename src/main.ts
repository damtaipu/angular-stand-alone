import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { routes } from "./app/app-routing.module";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {

providers: [
  importProvidersFrom(RouterModule.forRoot(routes))
]
  
}).catch((err) => console.log(err));
