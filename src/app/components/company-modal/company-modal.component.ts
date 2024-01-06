import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyConnection } from '../../models/CompanyConnection/companyConnection.model';
import { Observable } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { ConnectwiseService } from 'src/app/services/connectwise-service/connectwise-service.service';
import { ConnectwiseCompany } from 'src/app/models/ConnectWiseCompany/connectwiseCompany.model';
import { CompanyDataService } from 'src/app/services/company-connection-service/company-connection-service.service';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css']
})
export class CompanyModalComponent {
  companyConnectwiseNameControl = new FormControl();
  filteredOptions: Observable<ConnectwiseCompany[]>;

  constructor(
    private dialogRef: MatDialogRef<CompanyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { company: CompanyConnection },
    private connectwiseService: ConnectwiseService,
    private companyDataService: CompanyDataService,
  ) {}

  ngOnInit(): void {
    // If data is available, and it's not a new company, pre-populate the form fields
    if (this.data) {
      this.companyConnectwiseNameControl.setValue(this.data.company.connectWiseId);
    }

    this.filteredOptions = this.companyConnectwiseNameControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.filterOptions(value))
    );
  }

  filterOptions(value: string): Observable<ConnectwiseCompany[]> {
    const filterValue = value.toLowerCase();

    return this.connectwiseService.getConnectwiseCompanies().pipe(
      map(companies => companies.filter(company =>
        company.name.toLowerCase().includes(filterValue)
      ))
    );
  }



  formValid(): boolean {
    return (
      this.companyConnectwiseNameControl.value !== '' &&
      this.companyConnectwiseNameControl.value !== null
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    const selectedOption: string = this.companyConnectwiseNameControl.value;

    // Handle editing an existing company
    const editedCompany: CompanyConnection = {
      dattoDomain: this.data.company.dattoDomain,
      connectWiseId: selectedOption
    };

    this.companyDataService.addCompanyConnection(editedCompany)
    .subscribe(() => {
      this.dialogRef.close(editedCompany);
    });
  }
}
