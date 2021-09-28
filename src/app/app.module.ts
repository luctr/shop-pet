import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { UploadComponent } from './component/upload/upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FindAllComponent } from './component/User/find-all/find-all.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './component/layout/layout.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogExampleComponent } from './component/User/dialog-example/dialog-example.component';
import { UpdatePetComponent } from './component/User/update-pet/update-pet.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from '@angular/material/divider';
import { DetailsPetComponent } from './component/User/details-pet/details-pet.component';
import { DeletePetComponent } from './component/User/delete-pet/delete-pet.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
    FindAllComponent,
    LayoutComponent,
    DialogExampleComponent,
    UpdatePetComponent,
    DetailsPetComponent,
    DeletePetComponent,

  ],
  entryComponents:[DialogExampleComponent,UpdatePetComponent,DeletePetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
