import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verse-list',
  templateUrl: './verse-list.component.html',
  styleUrls: ['./verse-list.component.scss']
})
export class VerseListComponent implements OnInit {

  title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  verses = [
    'Morbi varius lectus eget sollicitudin vulputate',
    'Nunc a turpis accumsan, feugiat turpis eu, lobortis ipsum.',
    'Nunc in ex efficitur, accumsan augue vitae, auctor odio.',
    'Proin varius sem faucibus, consectetur mi in, commodo urna.',
    'Vivamus nec tellus nec libero viverra consectetur.',
    'Nulla posuere elit sit amet risus convallis, ut tincidunt ligula lacinia.',
    'Curabitur bibendum lectus ac dolor maximus, pulvinar aliquet metus mattis.',
    'Ut id leo laoreet, viverra lorem id, aliquet ante.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
