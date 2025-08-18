import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'client', component: ClientComponent
    },
    {
        path: 'employee', component : EmployeeComponent
    },
    // {
    //     path : '', component: AppComponent
    // }
];
