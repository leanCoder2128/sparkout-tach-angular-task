import { NgModule } from "@angular/core";
import { HomeScreenComponent } from "./homeScreen.component";
import { AppCommonModule } from "../../shared/app-common.module";
import { RouterModule, Routes } from "@angular/router";


const homeScreenRoutes : Routes = [
    {
        path : '',
        component : HomeScreenComponent
    }
]

@NgModule({
    declarations: [HomeScreenComponent],
    imports: [AppCommonModule, RouterModule.forChild(homeScreenRoutes) ],
    exports: []
})
export class HomeScreenModule {}