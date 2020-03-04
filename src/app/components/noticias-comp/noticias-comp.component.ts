import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/interfaces/interfases';

@Component({
  selector: 'app-noticias-comp',
  templateUrl: './noticias-comp.component.html',
  styleUrls: ['./noticias-comp.component.scss'],
})
export class NoticiasCompComponent implements OnInit {

  @Input() noticiasXPais:Articulo[] = [];
  @Input() esFavorito: Boolean = false;

  constructor() { }

  ngOnInit() {}

}
