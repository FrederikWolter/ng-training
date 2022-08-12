import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUser: User|undefined;

  constructor() { }

  signIn(name: string, password: string): User|undefined {
    this.activeUser = userList.find(user => user.name === name && user.password === password);
    return this.activeUser;
  }

}

export interface User {
  id: number;
  name: string;
  password: string;
  role: 'apprentice'|'abba';
  year: number;
  job: 'AI'|'WI';
}

export const userList: Array<User> = [
  {
    id: 1,
    name: 'Frederik Wolter',
    password: '1234',
    role: 'apprentice',
    year: 2020,
    job: 'AI',
  }
];