import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppComponent } from './app.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

export const routes: Routes = [
    {
        path:'client', component: ClientComponent
    },
    {
        path: 'employee', component : EmployeeComponent
    },
    {
        path: 'client-project', component: ClientProjectComponent
    }
];
