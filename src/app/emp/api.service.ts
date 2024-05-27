import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Router, RouterModule } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {inject} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

//add
  addemployee(data:User){
    return this.http.post<User>("http://localhost:3000/posts",data)
  }

//get
getemployee(){
  return this.http.get<User[]>("http://localhost:3000/posts");
}
}

