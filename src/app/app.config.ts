import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routes } from './app.routes';

import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withViewTransitions()
      // withHashLocation()
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([tokenInterceptor, spinnerInterceptor])
    ), // SSR
    provideClientHydration(withEventReplay()),
    provideAnimations(),
  ],
};
