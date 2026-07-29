import {provideHttpClient} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideBrowserGlobalErrorListeners} from '@angular/core';
import {NgbdNavVertical} from './app/nav-vertical';

bootstrapApplication(NgbdNavVertical, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
