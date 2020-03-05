import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(public _restApiService: RestApiService) {}
  employee;
  ngOnInit(): void {
    this.loadEmployees();
  }
  loadEmployees() {
    return this._restApiService.getEmployees().subscribe((data: any) => {
      if (data) {
        this.employee = data;
        console.log(this.employee);
      }
    });
  }
  // deleteEmployee(id: any) {
  //   if (window.confirm("Are u sure u want to delete?")) {
  //     this._restApiService.deleteEmployee(id).subscribe(data => {
  //       this.loadEmployees();
  //     });
  //   }
  // }
}
