import { TableService } from './Service/table.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableModule } from './table/table.module';
import { FilterTextPipe } from './pipe/search-text.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatToolbarModule,
    TableModule
  ],
  providers: [TableService,FilterTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
