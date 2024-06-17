import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [ReactiveFormsModule, CommonModule, FormsModule],
})
export class AppCommonModule {}
