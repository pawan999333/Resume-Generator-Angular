import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UrlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string, text:string }
  ) {}

  onClose(): void {
    this.dialogRef.close({res:this.data.url});
  }

  ngOnInit(): void {
  }

}
