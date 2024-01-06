import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyModalComponent } from './components/company-modal/company-modal.component';
import { CompanyConnection } from './models/CompanyConnection/companyConnection.model';
import { CompanyDataService } from 'src/app/services/company-connection-service/company-connection-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datto Billing Collector';

  constructor(private dialog: MatDialog, private companyDataService: CompanyDataService) { }

  openAddCompanyModal(): void {
    const dialogRef = this.dialog.open(CompanyModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((newCompany: CompanyConnection) => {
      if (newCompany) {
        this.companyDataService.addCompanyConnection(newCompany);
      }
    });
  }
}
