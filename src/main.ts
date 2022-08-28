import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { routes } from "./app/app-routing.module";

//Data Providers
import { DataProviders } from 'src/app/shared/factory/factory-providers';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {

providers: [
  importProvidersFrom(RouterModule.forRoot(routes)),
  DataProviders.userRegister.provider,
  DataProviders.userRegister.override
]
  
}).catch((err) => console.log(err));
