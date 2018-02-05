import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';

// Components
import { AppComponent } from './app.component';
import { VerseListComponent } from './verse-list/verse-list.component';
import { SecondVerseListComponent } from './second-verse-list/second-verse-list.component';
import { AddVerseFormComponent } from './add-verse-form/add-verse-form.component';
import { ExquisiteCorpseComponent } from './exquisite-corpse/exquisite-corpse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';

// Routing
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/exquisite-corpse', pathMatch: 'full' },
  { path: 'exquisite-corpse', component: ExquisiteCorpseComponent },
  { path: 'poem1', component: VerseListComponent },
  { path: 'poem2', component: SecondVerseListComponent },
  { path: 'play', component: LoginComponent },
  { path: 'add-verse', component: AddVerseFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VerseListComponent,
    AddVerseFormComponent,
    ExquisiteCorpseComponent,
    PageNotFoundComponent,
    SecondVerseListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
