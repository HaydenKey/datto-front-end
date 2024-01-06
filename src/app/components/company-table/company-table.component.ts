import { Component, Input, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CompanyConnection } from '../../models/CompanyConnection/companyConnection.model';
import { CompanyDataService } from 'src/app/services/company-connection-service/company-connection-service.service';
import { CompanyModalComponent } from '../company-modal/company-modal.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    CompanyModalComponent
  ]
})
export class CompanyTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() companies: CompanyConnection[];
  @Input() getError: boolean;
  displayedColumns: string[] = ['DattoDomain', 'connectWiseId', 'actions'];
  companies$: Observable<CompanyConnection[]> = of([]);
  dataSource = new MatTableDataSource<CompanyConnection>();

  constructor(
    private companyDataService: CompanyDataService,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.companies$.subscribe((companies: CompanyConnection[]) => {
      this.dataSource.data = companies;
      this.changeDetectorRef.detectChanges();
      console.log("this.companies is running");
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openEditCompanyModal(company: CompanyConnection) {
    const dialogRef = this.dialog.open(CompanyModalComponent, {
      data: { company }
    });

    dialogRef.afterClosed().subscribe((editedCompany: CompanyConnection) => {
      if (editedCompany) {
        // Update the existing company connection
        this.companyDataService.addCompanyConnection(editedCompany).subscribe(
          () => {},
          error => {}
        );

        // Retrieve the updated company connection
        this.companyDataService.getCompanyConnection(editedCompany.dattoDomain).subscribe(
          (updatedCompany: CompanyConnection | undefined) => {
            if (updatedCompany) {
              console.log('Updated company connection:', updatedCompany);
            } else {
              console.log('Company connection not found');
            }
          },
          error => {
            console.log('Error retrieving company connection:', error);
          }
        );
      }
    });

    this.changeDetectorRef.detectChanges();
  }
}
