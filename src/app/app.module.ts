import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; //   NO_ERRORS_SCHEMA 
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'MaterialModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PopupComponent,

  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    // DataSource,
    ReactiveFormsModule,
    HttpClientModule,




  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
