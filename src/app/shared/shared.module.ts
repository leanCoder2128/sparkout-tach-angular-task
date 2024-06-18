import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountModule } from '../modules/account/account.module';
import { AppCommonModule } from './app-common.module';
import { routes } from './shared.routes';
import { HomeScreenModule } from '../modules/homeScreen/homeScreen.module';
import { AppLayoutComponent } from './components/layout/app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
  ],
  exports: [AccountModule],
})
export class SharedModule {}
