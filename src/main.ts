import {provideHttpClient} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideBrowserGlobalErrorListeners} from '@angular/core';
import {AppComponent} from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
