import { Component, OnInit } from '@angular/core';
import {GifsService} from '../services/gifs.service';
import {Gifs} from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get Resultados(): Gifs[]{
    return this.gifsService.resultados;
  }

  ngOnInit(): void {
  }

}
