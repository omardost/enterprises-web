import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEnterprisesComponent } from './dialog-enterprises/dialog-enterprises.component';
import { EnterprisesService } from './services/enterprises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'enterprises-web';
  listEnterprises = [];
  displayedColumns = ['name', 'phone', 'created_date', 'action'];
  data = {};

  constructor(
    private dialog: MatDialog,
    private enterprisesService: EnterprisesService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  openDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogEnterprisesComponent, {
      width: '30%',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.list();

    });
  }

  list() {
    this.listEnterprises = [];
    this.enterprisesService.list().subscribe(result => {
      this.listEnterprises = result;
      console.log(result);

    });
  }

}
