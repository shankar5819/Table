import { TableData } from './../../../assets/Model/tableData';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from 'src/app/Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { FilterTextPipe } from 'src/app/pipe/search-text.pipe';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: any = [];
  pageNumber: number = 1;
  displayedColumns: string[] = ['API', 'Description', 'Auth', 'HTTPS'];


  constructor(public tableService: TableService, public filterService: FilterTextPipe) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tableService.getAll().subscribe((data) => {
      this.products = data.entries;
    })
  }

  search(ele) {
    let searchText = '';
    searchText = '' + ele.value.fieldName
    this.products = this.filterService.transform(this.products, searchText, 'name')
    this.products = this.products.sort();

  }
}


