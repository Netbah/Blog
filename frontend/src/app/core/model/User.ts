import { Roles } from './Role';

export class User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  roles: Roles;
}
