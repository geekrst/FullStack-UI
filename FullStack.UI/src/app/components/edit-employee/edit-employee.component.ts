import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent {
  employee: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private routTo: Router
  ) {
    //injecting Service EmployeesService

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeesService.getEmployee(id).subscribe({
            next: (employee) => {
              // console.log(employee);
              this.employee = employee;
            },
            error: (response) => {
              console.log(response);
            },
          });
        }
      },
    });
  }

  updateEmployee() {
    // console.log(this.addEmployeeRequest);
    this.employeesService.updateEmployee(this.employee).subscribe({
      next: (employee) => {
        // console.log(employee);
        this.routTo.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe({
      next: (employee) => {
        console.log('Deleted...', employee);
        this.routTo.navigate(['employees']);
      },
    });
  }
}
