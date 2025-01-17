import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../services/employees.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  // employees: Employee[] = [
  //   {
  //     id: 'abcd',
  //     name: 'user 1',
  //     email: 'user1@email',
  //     phone: 9876541111,
  //     salary: 25000,
  //     department: 'admin',
  //   },
  //   {
  //     id: 'efgh',
  //     name: 'user 2',
  //     email: 'user2@email',
  //     phone: 9876542222,
  //     salary: 25000,
  //     department: 'qa',
  //   },
  //   {
  //     id: 'ijkl',
  //     name: 'user 3',
  //     email: 'user3@email',
  //     phone: 9876543333,
  //     salary: 25000,
  //     department: 'developer',
  //   },
  //   {
  //     id: 'mnop',
  //     name: 'user 4',
  //     email: 'user4@email',
  //     phone: 9876544444,
  //     salary: 25000,
  //     department: 'hr',
  //   },
  //   {
  //     id: 'qrst',
  //     name: 'user 5',
  //     email: 'user5@email',
  //     phone: 9876545555,
  //     salary: 25000,
  //     department: 'account',
  //   },
  //   {
  //     id: 'uvwx',
  //     name: 'user 6',
  //     email: 'user6@email',
  //     phone: 9876546666,
  //     salary: 25000,
  //     department: 'help desk',
  //   },
  // ];

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {
    //injecting Service EmployeesService
    this.employeesService.getAllEmployees().subscribe({
      next: (employee) => {
        // console.log(employee);
        this.employees = employee;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
