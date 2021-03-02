import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  @ViewChild('Txtbuscar') txtBuscar: ElementRef<HTMLInputElement>;
  constructor() { }
  ngOnInit(): void {
  }

  Buscar(): string {
    const txtbuscar = this.txtBuscar.nativeElement;
    const valor = txtbuscar.value;
    txtbuscar.value = '';
    return valor;
  }
}
