import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SsrService {
  isServer(): boolean {
    return isPlatformServer(inject(PLATFORM_ID));
  }

  isBrowser(): boolean {
    return isPlatformBrowser(inject(PLATFORM_ID));
  }
}
