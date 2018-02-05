import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addVerses } from '../data-model'; // importa los versos

@Component({
  selector: 'app-add-verse-form',
  templateUrl: './add-verse-form.component.html',
  styleUrls: ['./add-verse-form.component.scss']
})
export class AddVerseFormComponent implements OnInit {

  addVerseForm: FormGroup;

  // verse = new FormControl();
  // name = new FormControl();

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.addVerseForm = this.fb.group({
      name : '',
      firstVerse : ''
    });
    // this.addVerseForm = this.fb.group({
    //   name : ['', Validators.required],
    //   firstVerse : ['', Validators.required]
    // });
    // this.addVerseForm = this.fb.group({
    //   name : addVerses[0].name,
    //   verse : addVerses[0].firstVerse,
    // });
  }
}
