import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GifsInterface} from '../interface/gifs.interface';
import {ResultadosComponent} from '../resultados/resultados.component';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private historial: string[] = [];
  private apiKey = 'RAfjRiIuzXB1B1aUcGytKXP5qrIoxmoP';
  private url = 'http:///api.giphy.com/v1/gifs/search?';
  private urlApiKey = 'api_key=';
  private urlQuery = '&q=';
  private urlEnd = '&limit=10&lang=es';
  public resultados: GifsInterface[] = [];

  get Historial(): string[]{
    return [...this.historial];
  }
  constructor(private http: HttpClient) {
  }

  BuscarGifs(valor: string): void{
    valor = valor.trim().toLocaleLowerCase();
    const url = `${this.url}${this.urlApiKey}${this.apiKey}${this.urlQuery}${valor}${this.urlEnd}`;
    if (!this.historial.includes(valor))
    {
      this.historial.unshift(valor);
      this.historial = this.historial.splice(0, 10);
    }
    this.http.get(url)
      .subscribe((resp: GifsInterface[]) => {
        this.resultados = resp;
      });
  }

}
