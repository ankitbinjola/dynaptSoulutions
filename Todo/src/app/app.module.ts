import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TodoListComponent } from './dashboard/todo-list/todo-list.component';
import { TodoListDetailComponent } from './dashboard/todo-list-detail/todo-list-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';




const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'signup', component: SignUpComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent }]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    LoginComponent,
    TodoListComponent,
    TodoListDetailComponent
  ],
  imports: [

    MatSliderModule,
    MatInputModule,
    MatTableModule,
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
     // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
