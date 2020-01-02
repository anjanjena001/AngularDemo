import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './Layout/Header/nav-header.component';
import { SidemenuComponent } from './Layout/SideMenu/sidemenu.component';
import { FooterComponent } from './Layout/Footer/footer.component';
import { UserComponent } from './Modules/user/user.component';
import { FormsModule }   from '@angular/forms';
import { UserFilterPipe } from './Modules/userFilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './Modules/employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    SidemenuComponent,
    FooterComponent,
    UserComponent,
    UserFilterPipe,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
