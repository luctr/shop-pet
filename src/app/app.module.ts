import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
// import {AngularFireStorageModule} from "@angular/fire/compat/storage";
// import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {UploadComponent } from './component/upload/upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent } from './component/shared/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FindAllComponent } from './component/User/find-all/find-all.component';
import {MatCardModule} from "@angular/material/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutComponent } from './component/layout/layout.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {CreatePetComponent } from './component/User/create-pet/create-pet.component';
import {UpdatePetComponent } from './component/User/update-pet/update-pet.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from '@angular/material/divider';
import {DetailsPetComponent } from './component/User/details-pet/details-pet.component';
import {DeletePetComponent } from './component/User/delete-pet/delete-pet.component';
import {FooterComponent } from './component/shared/footer/footer.component';
import {ContentComponent } from './component/shared/content/content.component';
import {CartComponent } from './component/shared/cart/cart.component';
import {MatListModule} from "@angular/material/list";
import {RegisterComponent } from './component/shared/register/register.component';
import {MatInputModule} from "@angular/material/input";
import {LoginComponent} from "./component/shared/login/login.component";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
    FindAllComponent,
    LayoutComponent,
    CreatePetComponent,
    UpdatePetComponent,
    DetailsPetComponent,
    DeletePetComponent,
    FooterComponent,
    ContentComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent
  ],
  // providers: [
  //   {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  // ],
  entryComponents:[CreatePetComponent,UpdatePetComponent,DeletePetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
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
    MatDividerModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
