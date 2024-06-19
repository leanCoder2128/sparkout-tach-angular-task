import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ProductService } from "./producService";
import { DropDownService } from "./dropDownOption.service";
import { MyCartService } from "./myCart.service";



@NgModule({
    imports: [HttpClientModule]
})

export class ServiceModule{
    static forRoot() : ModuleWithProviders<ServiceModule>{
        return {
            ngModule : ServiceModule,
            providers : [
                ProductService,
                DropDownService,
                MyCartService
            ]
        }
    }
}