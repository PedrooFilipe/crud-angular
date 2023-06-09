import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrodDialogComponent } from './components/errod-dialog/errod-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    ErrodDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrodDialogComponent
  ]
})
export class SharedModule { }
