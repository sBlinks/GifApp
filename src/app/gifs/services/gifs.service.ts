import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private historial: string[] = [];

  get Historial(): string[]{
    return [...this.historial];
  }

  BuscarGifs(valor: string): void{
    this.historial.unshift(valor);
    console.log(this.historial);
  }

  constructor() { }
}
