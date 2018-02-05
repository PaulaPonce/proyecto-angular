import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-verse-list',
  templateUrl: './second-verse-list.component.html',
  styleUrls: ['./second-verse-list.component.scss']
})
export class SecondVerseListComponent implements OnInit {

  title = 'Maecenas eu nisl sit amet lorem tempor cursus.';

  verses = [
    'Duis eu elit fringilla, sagittis magna sed, aliquam elit.',
    'Pellentesque gravida orci ac tellus porttitor vestibulum.',
    'Phasellus hendrerit ligula in dolor ornare, in sodales magna gravida.',
    'In maximus purus ullamcorper metus eleifend luctus.',
    'Quisque porta enim a volutpat pretium.',
    'Maecenas blandit velit id nunc consectetur hendrerit.',
    'Maecenas dapibus magna vitae purus tristique, eu facilisis eros pretium.',
    'Mauris lacinia tortor non dignissim consequat.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
