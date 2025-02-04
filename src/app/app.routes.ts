import { Routes } from '@angular/router';
import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { ChartsViewComponent } from './charts-view/charts-view.component';

export const routes: Routes = [
    {
        path: '',
        component: ChartsViewComponent
    },
    {
        path: 'dialog',
        component: DialogViewComponent
    },
    {
        path: '**',
        component: ChartsViewComponent
    }
];
