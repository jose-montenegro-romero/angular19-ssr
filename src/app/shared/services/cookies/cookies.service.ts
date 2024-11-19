import { Injectable } from '@angular/core';
//External library
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private ssrCookieService: SsrCookieService) { }

  set(key: string, value: string, expires?: number): void {
    let expiresTemp = undefined;
    if (expires) {
      expiresTemp = new Date(Date.now() + expires * 1000);
    }
    this.ssrCookieService.set(key, value, { expires: expiresTemp });
  }

  get(key: string): string {
    return this.ssrCookieService.get(key);
  }

  getAll(): { [key: string]: string } {
    return this.ssrCookieService.getAll();
  }

  check(key: string): boolean {
    return this.ssrCookieService.check(key);
  }

  delete(key: string): void {
    this.ssrCookieService.delete(key);
  }

  deleteAll(): void {
    this.ssrCookieService.deleteAll();
  }
}
