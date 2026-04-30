import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {
        path: ':id_access/actividad',
        component: MainComponent
    },
    {
        path: 'error404',
        component: Error404Component
    },
    // fallback para rutas no encontradas
    {
        path: '**',
        redirectTo: 'error404'
    }
];
