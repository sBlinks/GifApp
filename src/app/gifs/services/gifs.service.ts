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
    valor = valor.trim().toLocaleLowerCase();

    if (!this.historial.includes(valor))
    {
      this.historial.unshift(valor);
      this.historial = this.historial.splice(0, 10);
    }
    console.log(this.historial);
  }

  constructor() { }
}
