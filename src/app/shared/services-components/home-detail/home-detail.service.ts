import { Injectable, Signal, computed, signal } from '@angular/core';

interface Card {
    id?: string,
    title?: string
}

@Injectable({
    providedIn: 'root'
})
export class HomeDetailService {

    private _data = signal<Card>({});
    public get = computed(() => this._data())

    public set(object: Card): void {
        this._data.set(object);
    }
}
