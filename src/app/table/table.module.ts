import { FilterTextPipe } from './../pipe/search-text.pipe';
import { TableComponent } from './table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TableComponent,FilterTextPipe
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: []
})
export class TableModule { }
