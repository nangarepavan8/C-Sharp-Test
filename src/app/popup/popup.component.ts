import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  editdata: any;

  constructor(private builder: FormBuilder, private dialog: MatDialog, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    //this.api.GetcompanybyCode(1).subscribe(r => { console.log("Response  :" + r); });
    console.log("this is ID: " + this.data.id);
    this.api.GetcompanybyCode(this.data.id).subscribe((r) => {
      console.log("re", r)

      this.editdata = r

      this.companyform.controls['id'].setValue(this.editdata.id); //= this.editdata.id;
      this.companyform.controls['name'].setValue(this.editdata.name);
      this.companyform.controls['empcount'].setValue(this.editdata.employeeCount); // backend
      this.companyform.controls['revenue'].setValue(this.editdata.revenue);
      this.companyform.controls['address'].setValue(this.editdata.address);

    })
    // if (this.data.id != '' && this.data.id != null) {

    //   this.api.GetcompanybyCode(this.data.id).subscribe(Response => {
    //     // this.editdata = Response;
    //     console.log("Response  :" + Response);
    //     // this.companyform.setValue({
    //     //   id: this.editdata.id,
    //     //   name: this.editdata.name,
    //     //   empcount: this.editdata.empcount,
    //     //   revenue: this.editdata.revenue,
    //     //   address: this.editdata.address,
    //     //   isactive: this.editdata.isactive,
    //     // })
    //   });
    // }
  }

  companyform = this.builder.group({
    // id: this.builder.control({ value: '', disabled: true }),
    // name: this.builder.control('', Validators.required),

    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    empcount: new FormControl('', Validators.required),
    revenue: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    isactive: new FormControl(true),

  });

  SaveCompany() {
    const Editid = this.companyform.getRawValue().id;

    if (Editid != '' && Editid != null) {

      let updateData = {
        id: Editid,
        // name: this.companyform.controls['name'].setValue(this.editdata.name),
        // employeeCount: this.companyform.controls['empcount'].setValue(this.editdata.employeeCount),
        // revenue: this.companyform.controls['revenue'].setValue(this.editdata.revenue),
        // address: this.companyform.controls['address'].setValue(this.editdata.address),
        name: this.companyform.get('name')?.value,
        employeeCount: this.companyform.get('empcount')?.value, //['empcount'].value,
        revenue: this.companyform.get('revenue')?.value,
        address: this.companyform.get('address')?.value,
      }

      this.api.UpdateCompany(Editid, updateData).subscribe(response => { //this.companyform.getRawValue()
        this.Closepopup();
        alertify.success("Updated successfully..!!")
      });

    } else {

      this.api.CreateCompany(this.companyform.value).subscribe(response => {
        this.Closepopup();
        alertify.success("saved successfully..!!")
      });


    }
  }

  Closepopup() {
    this.dialog.closeAll();
  }


  Headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    "Content-Type": "application/json"
  };

}


