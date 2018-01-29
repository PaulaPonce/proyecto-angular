import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-verse-form',
  templateUrl: './add-verse-form.component.html',
  styleUrls: ['./add-verse-form.component.css']
})
export class AddVerseFormComponent implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
