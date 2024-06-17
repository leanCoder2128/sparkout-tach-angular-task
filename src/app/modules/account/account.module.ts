import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../shared/app-common.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(accountRoutes),
    AppCommonModule
  ],
  exports: [],
})
export class AccountModule {}
