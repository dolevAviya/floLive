export interface Users {
  users?: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  address: {
    address: string;
    city: string;
  };
}




