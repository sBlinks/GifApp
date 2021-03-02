import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gifs, GifsInterface} from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private historial: string[] = [];
  private apiKey = 'RAfjRiIuzXB1B1aUcGytKXP5qrIoxmoP';
  private url = 'http:///api.giphy.com/v1/gifs';
  private urlApiKey = 'api_key';
  private urlQuery = 'q';
  private urlLimit = 'limit';
  private urlLang = 'lang';
  public resultados: Gifs[] = [];

  get Historial(): string[]{
    return [...this.historial];
  }
  constructor(private http: HttpClient) {
    const historial = localStorage.getItem('historial');
    const resultados = localStorage.getItem('resultados');
    this.historial = JSON.parse(historial) || [];
    this.resultados = JSON.parse(resultados) || [];
  }

  BuscarGifs(valor: string): void{
    valor = valor.trim().toLocaleLowerCase();
    const params = new HttpParams()
      .set(this.urlApiKey, this.apiKey)
      .set(this.urlQuery, valor)
      .set(this.urlLimit, '10')
      .set(this.urlLang, 'es');

    if (!this.historial.includes(valor))
    {
      this.historial.unshift(valor);
      this.historial = this.historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }
    this.http.get<GifsInterface>(`${this.url}/search`, {params})
      .subscribe(resp => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }

}
