import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { CartDialogComponent } from '../modules/Dialog/cart/cart.dialog.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CartDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatSliderModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatSliderModule
  ],
})
export class AppCommonModule {}
