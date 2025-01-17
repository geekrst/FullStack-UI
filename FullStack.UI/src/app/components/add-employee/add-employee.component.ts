import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  //injecting Service EmployeesService
  constructor(
    private employeesService: EmployeesService,
    private routTo: Router
  ) {}

  addEmployee() {
    this.employeesService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        console.log(employee);
        this.addEmployeeRequest = employee;
        this.routTo.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
