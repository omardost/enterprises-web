import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterprisesService } from '../services/enterprises.service';

@Component({
  selector: 'app-dialog-enterprises',
  templateUrl: './dialog-enterprises.component.html',
  styleUrls: ['./dialog-enterprises.component.css']
})
export class DialogEnterprisesComponent implements OnInit {

  constructor(private enterprisesService: EnterprisesService,
    public dialogRef: MatDialogRef<DialogEnterprisesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  save(){
    if(this.data.id){
      this.enterprisesService.update(this.data).subscribe(result => {
        console.log(result);       
      });
    }else{
      
      this.enterprisesService.save(this.data).subscribe(result => {
        console.log(result);        
      });
    }
    this.dialogRef.close();
  }

}
