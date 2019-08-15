import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/interfaces/interfases';

@Component({
  selector: 'app-noticia-comp',
  templateUrl: './noticia-comp.component.html',
  styleUrls: ['./noticia-comp.component.scss'],
})
export class NoticiaCompComponent implements OnInit {

  @Input() noticia:Articulo;

  constructor() { }

  ngOnInit() {}

}
