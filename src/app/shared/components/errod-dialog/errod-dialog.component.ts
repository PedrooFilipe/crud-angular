import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errod-dialog',
  templateUrl: './errod-dialog.component.html',
  styleUrls: ['./errod-dialog.component.scss']
})

export class ErrodDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
