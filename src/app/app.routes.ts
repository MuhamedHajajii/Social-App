import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { logUserGuard } from './core/guards/log-user.guard';
import { allPostsResolver } from './core/resolvers/posts/all-posts.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/auth-layout/auth-layout.component').then(
        (e) => e.AuthLayoutComponent
      ),
    canActivate: [logUserGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadComponent: () =>
          import('./auth/components/sign-in/sign-in.component').then(
            (e) => e.SignInComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/components/sign-up/sign-up.component').then(
            (e) => e.SignUpComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(
        (e) => e.MainLayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'timeline', pathMatch: 'full' },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./pages/main/timeline/timeline.component').then(
            (e) => e.TimelineComponent
          ),
        resolve: {
          testerC44: allPostsResolver,
        },
      },
    ],
  },
];
