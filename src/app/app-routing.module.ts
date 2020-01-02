import { UserComponent } from './Modules/user/user.component';
import { EmployeesComponent } from './Modules/employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"user",component:UserComponent},
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  { path:"employees", component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
