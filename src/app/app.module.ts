import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEnterprisesComponent } from './dialog-enterprises/dialog-enterprises.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EnterprisesService } from './services/enterprises.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    DialogEnterprisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [EnterprisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
