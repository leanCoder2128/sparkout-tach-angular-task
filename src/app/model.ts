export interface Product {
    pName: string;
    price: number;
    desc: string;
    brand: string;
    qty: number;
    image: string;
    discount: number;
    id: string;
    rating : number
  }


  export interface UserDto{
    userName : string;
    email : string;
    password : string;
    confirmPassword : string;
  }