import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Aktiver User
export class UsersService {

  activeUser: User|undefined;

  constructor() { }
  //User Anmeldung
  signIn(name: string, password: string): User|undefined {
    this.activeUser = userList.find(user => user.name === name && user.password === password);
    return this.activeUser;
  }

}

//User Definition
export interface User {
  id: number;
  name: string;
  password: string;
  role: 'apprentice'|'abba';
  year: number;
  job: 'AI'|'WI';
}


//User Sammlung
export const userList: Array<User> = [
  {
    id: 1,
    name: 'Frederik',
    password: '1234',
    role: 'apprentice',
    year: 2020,
    job: 'AI',
  },
  {
    id: 2,
    name: 'Kevin',
    password: '1234',
    role: 'abba',
    year: 0,
    job: 'AI',
  }
];