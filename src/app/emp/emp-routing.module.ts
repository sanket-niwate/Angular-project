import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserprofileComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,HttpClientModule]
})
export class EmpRoutingModule { }
