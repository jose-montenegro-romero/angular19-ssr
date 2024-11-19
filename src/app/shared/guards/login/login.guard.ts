import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  // const ssrCookieService = inject(CookiesService);
  // // const router = inject(Router);
  // const token: string = ssrCookieService.get('token');

  // if (!token) {
  //   // router.navigateByUrl('/');
  //   return false;
  // }
  return true;
};
