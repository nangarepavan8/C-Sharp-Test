import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { companymodel } from '../Model/companymodel';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';
// import { DataSource } from '@angular/cdk/table';
import * as alertify from 'alertifyjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  http: any;

  constructor(private builder: FormBuilder, private dialog: MatDialog, private api: ApiService,) { }

  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  // variablesC
  companydata!: companymodel[];
  finaldata: any;

  @Input() Company: any;
  // id = string;
  // name: string;
  // CompanyName: string;


  readonly apiurl = "https://localhost:7235/api/CompanyLists";

  ngOnInit(): void {
    // const id = this.api;


    this.LoadCompany();
    this.api.Getallcompany().subscribe(data => { this.companydata = data; console.log(data) });
    // this.api.GetcompanybyCode(id).subscribe(data => { this.companydata = data; console.log(data) });




  }
  // update
  UpdateCompany(id: any, companydata: any) {
    return this.http.put(this.apiurl + '/' + id, companydata);
  }


  displayColumns: string[] = ["id", "name", "empcount", "revenue", "address", "isactive", "action"];

  Openpopup(id: any) {
    const _popup = this.dialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.LoadCompany();
    });
  }

  LoadCompany() {
    this.api.Getallcompany().subscribe(response => {
      this.companydata = response;
      this.finaldata = new MatTableDataSource<companymodel>(this.companydata);
      this.finaldata.paginator = this._paginator;
      this.finaldata.sort = this._sort;
    });
  }

  EditCompany(id: any) {
    this.Openpopup(id);
    console.log(id);
    this.api.GetcompanybyCode(1).subscribe(response => { console.log("Re:", response) });
  }
  RemoveCompany(id: any) {

    alertify.confirm("Remove Company", "do you want remove this company?", () => {

      this.api.RemovecompanybyCode(id).subscribe(r => {
        this.LoadCompany();
      });
    }, function () {


    })

  }
}
