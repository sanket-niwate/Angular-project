import { Component, OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
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
import { ApiService } from '../api.service';
import { User } from '../modal';
import { response } from 'express';


  
  export interface Fruit {
    name: string;
  }
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule,NgbAlertModule,FormsModule,MatSliderModule, RouterModule,HttpClientModule,ReactiveFormsModule,MatChipsModule,
    MatFormFieldModule,MatInputModule,MatIconModule],
  templateUrl: './register.component.html',
  
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  employeeform!: FormGroup;
  selectedAge: number = 18;
  newInterest: string = ''; // Define newInterest property
  interests: string[] = []; // Define interests array
  photoSizeError: string = '';
data:undefined|User[];


  constructor(private formBuilder: FormBuilder,private api:ApiService,private router: Router) {}

  ngOnInit(): void {
    
    this.employeeform = this.formBuilder.group({
      photo: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), Validators.maxLength(20)]],
      
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [ Validators.required,Validators.pattern(/^(\+\d{1,2}\s?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/),Validators.maxLength(10)]],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      fruits: [[], Validators.required],
      addressType: ['Home', Validators.required], // Default value set to 'Home'
      address1: [''],
      address2: [''],
      companyAddress1: [''],
      companyAddress2: [''],
      interestInput: ['', Validators.required],
      subscribeToNewsletter: [false],
      
    });
  }




  toggleAddressFields(): void {
    if (this.employeeform) {
      const addressType = this.employeeform.get('addressType')?.value;
      if (addressType === 'Home') {
        this.employeeform.get('homeAddress')?.enable();
        this.employeeform.get('companyAddress')?.disable();
      } else if (addressType === 'Company') {
        this.employeeform.get('homeAddress')?.disable();
        this.employeeform.get('companyAddress')?.enable();
      }
    }
  }

  onCountryChange(event: any): void {
    const country = event.target.value;
    const stateSelect = document.getElementById('stateSelect') as HTMLSelectElement;

    // Clear existing options
    stateSelect.innerHTML = '';

    switch (country) {
      case 'USA':
        this.populateStates([ 'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',]);
        break;
      case 'Canada':
        this.populateStates(['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa',  'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Northwest Territories',
        'Nunavut',
        'Yukon',]);
        break;
        case 'UK':
        this.populateStates(['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh']);
        break;
      case 'Australia':
        this.populateStates(['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide','New South Wales',
        'Victoria',
        'Queensland',
        'Western Australia',
        'South Australia',
        'Tasmania',
        'Australian Capital Territory',
        'Northern Territory',]);
        break;
      case 'India':
        this.populateStates([  'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',]);
        break;
      // Add more cases for other countries as needed
      default:
        // If no country is selected or not handled, display default message
        stateSelect.innerHTML = '<option selected>State</option>';
    }
  }

  private populateStates(states: string[]): void {
    const stateSelect = document.getElementById('stateSelect') as HTMLSelectElement;
    states.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.text = state;
      stateSelect.appendChild(option);
    });
  }






  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  
    // Check if file is selected
    if (!file) return;
  
    // Validate photo size
    if (file.size > 1 * 1024 * 1024) { // 1MB limit
      this.photoSizeError = 'File size exceeds 1MB limit.';
      return;
    }
  
    // Create a FileReader object to read the image
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        if (img.width !== 310 || img.height !== 325) {
          this.photoSizeError = 'Image dimensions should be 310x325 pixels.';
        } else {
          // Reset error if photo is valid
          this.photoSizeError = '';
          // Set the file value in form control
          this.employeeform.patchValue({
            photo: file
          });
        }
      };
      
      // Perform a null check on e.target before accessing result
      if (e.target) {
        img.src = e.target.result as string;
      } else {
        console.error("FileReader onload event target is null.");
      }
    };
  
    // Read the selected file as a data URL
    reader.readAsDataURL(file);
  }
  age: FormControl = new FormControl(18); // Initial age value

  // Function to update the age value
  updateAge(event: any) {
    this.age.setValue(event.target.value);
  }





 



  addInterest(event: any): void {
    const input = event.input;
    const value = event.value;

    // Add interest only if value is not empty
    if ((value || '').trim()) {
      this.interests.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeInterest(interest: string): void {
    const index = this.interests.indexOf(interest);
    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }



  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Hockey'},{name: 'Cricket'},{name: 'Football'}];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
   
  // isFieldEmptyAndTouched(fieldName: string): boolean {
  //   const control = this.employeeform.get(fieldName);
  //   if (control !== null && control !== undefined) {
  //     return control.touched && control.value === '';
  //   }
  //   return false; // Return false if control is null or undefined
  // }
  
  
  // isFormEmpty(): boolean {
  //   let formEmpty = false;
  //   Object.keys(this.employeeform.controls).forEach(key => {
  //     if (this.isFieldEmptyAndTouched(key)) {
  //       formEmpty = true;
  //     }
  //   });
  //   return formEmpty;
  // }
  addemp(data:User) {
    // Handle form submission logic here
 this.api.addemployee(data).subscribe((res=>{
this.employeeform.reset();
 }))
  
  }
}
