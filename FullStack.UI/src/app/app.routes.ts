import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'employee/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeeComponent,
  },
];
