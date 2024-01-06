import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

// Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


// Project Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyTableComponent } from './components/company-table/company-table.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyModalComponent } from './components/company-modal/company-modal.component';
import { RefreshButtonBarComponent } from './components/refresh-button-bar/refresh-button-bar.component';

export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');

@NgModule({
  declarations: [
    AppComponent,
    CompanyTableComponent,
    HeaderComponent,
    CompanyModalComponent,
    CompanyModalComponent,
    RefreshButtonBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [MatTableModule],
  providers: [
    { provide: MAT_MDC_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
