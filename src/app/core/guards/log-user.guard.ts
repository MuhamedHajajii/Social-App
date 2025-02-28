import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem('token');
    if (token) {
      router.navigate(['/timeline']);
      return false;
    } else {
      return true;
    }
  }

  return true;
};
