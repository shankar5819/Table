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
  searchedKeyword: string;
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

  // search(value: string): void {
  //   this.products = this.products.filter(val => val.API.toLowerCase().includes(value));
  // }

  search(ele) {
    if (ele > 0) {
      let searchText = '';
      searchText = '' + ele;
      this.products = this.filterService.transform(this.products, searchText, 'API')
      this.products = this.products.sort();
    }
    else {
      return this.products;
    }


  }
}


