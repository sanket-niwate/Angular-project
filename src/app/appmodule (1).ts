import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './emp/homepage/homepage.component';
import { RegisterComponent } from './emp/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {   MatChipInputEvent,
  MatChipEditedEvent,
  MatChip,MatChipsModule } from '@angular/material/chips';
  import { MatIconModule } from '@angular/material/icon';
  import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
  } from '@angular/material/dialog';


  import { LiveAnnouncer } from '@angular/cdk/a11y';
  import { ENTER, COMMA } from '@angular/cdk/keycodes';
  

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, // Import HttpClientModule here
    MatChipsModule,
    MatFormFieldModule,MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
