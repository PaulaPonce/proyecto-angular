import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verse-list',
  templateUrl: './verse-list.component.html',
  styleUrls: ['./verse-list.component.scss']
})
export class VerseListComponent implements OnInit {

  title = 'Versos';
  verses = ['En la tierra seremos reinas',
    'y de verídico reinar',
    'y siendo grandes nuestros reinos',
    'llegaremos todas al mar'];

  constructor() { }

  ngOnInit() {
  }

}
