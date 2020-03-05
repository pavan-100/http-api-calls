import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./pages/employee/employee.component";
import { ProductComponent } from "./pages/product/product.component";
import { RestApiService } from "src/app/services/rest-api.service";
@NgModule({
  declarations: [AppComponent, EmployeeComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
