import { Component, OnInit } from '@angular/core';
import {GifsService} from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) { }

  get Historial(): string[]{
    return this.gifsService.Historial;
  }
  ngOnInit(): void {
  }

}
