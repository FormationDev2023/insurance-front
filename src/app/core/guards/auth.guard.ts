import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // TODO: Implémenter la logique d'authentification
  // Pour l'instant, on autorise l'accès
  const isAuthenticated = true;

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};