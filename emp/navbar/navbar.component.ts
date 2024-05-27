import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,NgbCarouselModule,NgbAlertModule,MatToolbarModule, MatButtonModule, MatIconModule,RegisterComponent, RouterModule,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
