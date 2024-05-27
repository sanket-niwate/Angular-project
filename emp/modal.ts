export interface User {
    [x: string]: any;
    id: number;
    photo:string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age:number;
    country:string;
    state:string;
    fruits:string;
    addressType:string;
    address1:string;
    address2:string;
    companyAddress1:string;
    companyAddress2:string;
    interestInput:string;
    subscribeToNewsletter:boolean;
    // Add more properties as needed
  }
