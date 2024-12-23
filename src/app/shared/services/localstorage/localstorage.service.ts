import { Injectable } from '@angular/core';
import { fail } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  public set(key: string, value: string, isJSON: boolean = false) {
    if (!isJSON) {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public get(key: string, isJSON: boolean = false) {
    if (!isJSON) {
      return localStorage.getItem(key);
    } else {
      return JSON.parse(localStorage.getItem(key) || '{}');
    }
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
