import { Component, OnInit } from '@angular/core';
import {GifsService} from '../services/gifs.service';
import {GifsInterface} from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get Resultados(): GifsInterface[]{
    return this.gifsService.resultados;
  }

  ngOnInit(): void {
  }

}
