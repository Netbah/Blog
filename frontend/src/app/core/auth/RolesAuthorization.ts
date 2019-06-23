import { User } from '../model/User';

export function canRead(user: User): boolean {
  const allowed = ['admin', 'editor', 'subscriber'];
  return checkAuthorization(user, allowed);
}

export function canEdit(user: User): boolean {
  const allowed = ['admin', 'editor'];
  return checkAuthorization(user, allowed);
}

export function canDelete(user: User): boolean {
  const allowed = ['admin'];
  return checkAuthorization(user, allowed);
}

export function canAdd(user: User): boolean {
  const allowed = ['admin'];
  return checkAuthorization(user, allowed);
}

// determines if user has matching role
function checkAuthorization(user: User, allowedRoles: string[]): boolean {
  if (!user) {
    return false;
  }
  for (const role of allowedRoles) {
    if (user.roles[role]) {
      return true;
    }
  }
  return false;
}
