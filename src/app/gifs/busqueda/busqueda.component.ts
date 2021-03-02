import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  @ViewChild('Txtbuscar') txtBuscar: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) { }
  ngOnInit(): void {
  }

  Buscar(): string {
    const txtbuscar = this.txtBuscar.nativeElement;
    const valor = txtbuscar.value;
    txtbuscar.value = '';
    this.gifsService.BuscarGifs(valor);
    return valor;
  }
}
