import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'nav-home/:section',
        loadComponent: () => import('./nav-home').then(m => m.NavHome)
    }
]