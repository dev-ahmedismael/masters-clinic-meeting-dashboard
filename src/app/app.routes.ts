import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';
import { BranchesComponent } from '../components/admin/branches/branches/branches.component';
import { CreateNewBranchComponent } from '../components/admin/branches/create-new-branch/create-new-branch.component';
import { DepartmentsComponent } from '../components/admin/departments/departments/departments.component';
import { CreateNewDepartmentComponent } from '../components/admin/departments/create-new-department/create-new-department.component';
import { DoctorsComponent } from '../components/admin/doctors/doctors/doctors.component';
import { CreateNewDoctorComponent } from '../components/admin/doctors/create-new-doctor/create-new-doctor.component';
import { EmployeesComponent } from '../components/admin/employees/employees/employees.component';
import { CreateNewEmployeeComponent } from '../components/admin/employees/create-new-employee/create-new-employee.component';
import { ReservationsComponent } from '../components/admin/reservations/reservations/reservations.component';
import { CreateNewReservationComponent } from '../components/admin/reservations/create-new-reservation/create-new-reservation.component';
import { InboxComponent } from '../components/admin/inbox/inbox.component';
import { CustomerServiceComponent } from '../components/customer-service/customer-service.component';
import { CsReservationsComponent } from '../components/customer-service/reservations/cs-reservations/cs-reservations.component';
import { CsCreateNewReservationComponent } from '../components/customer-service/reservations/cs-create-new-reservation/cs-create-new-reservation.component';
import { DoctorComponent } from '../components/doctor/doctor.component';
import { TodayReservationsComponent } from '../components/doctor/reservations/today-reservations/today-reservations.component';
import { DReservationsComponent } from '../components/doctor/reservations/d-reservations/d-reservations.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'تسجيل الدخول' },
  {
    path: 'admin',
    pathMatch: 'prefix',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: 'inbox', component: InboxComponent },
      {
        path: 'branches',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: BranchesComponent },
          { path: 'create-new-branch', component: CreateNewBranchComponent },
        ],
      },
      {
        path: 'departments',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: DepartmentsComponent },
          {
            path: 'create-new-department',
            component: CreateNewDepartmentComponent,
          },
        ],
      },
      {
        path: 'doctors',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: DoctorsComponent },
          {
            path: 'create-new-doctor',
            component: CreateNewDoctorComponent,
          },
        ],
      },
      {
        path: 'employees',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: EmployeesComponent },
          {
            path: 'create-new-employee',
            component: CreateNewEmployeeComponent,
          },
        ],
      },
      {
        path: 'reservations',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: ReservationsComponent },
          {
            path: 'create-new-reservation',
            component: CreateNewReservationComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'customer-service',
    pathMatch: 'prefix',
    component: CustomerServiceComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      {
        path: 'reservations',
        pathMatch: 'prefix',
        children: [
          { path: '', pathMatch: 'full', component: CsReservationsComponent },
          {
            path: 'create-new-reservation',
            component: CsCreateNewReservationComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'doctor',
    pathMatch: 'prefix',
    component: DoctorComponent,
    children: [
      { path: '', redirectTo: 'today-reservations', pathMatch: 'full' },
      { path: 'today-reservations', component: TodayReservationsComponent },
      { path: 'reservations', component: DReservationsComponent },
    ],
  },
];
