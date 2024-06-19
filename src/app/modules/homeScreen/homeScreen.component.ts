import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/producService';
import { DropDownService } from '../../service/dropDownOption.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-homeScreen',
  templateUrl: './homeScreen.component.html',
  styleUrl: './homeScreen.component.scss',
})
export class HomeScreenComponent implements OnInit {
  productList: any[];
  filterForm: FormGroup;
  filterOptionList: any[];
  filteredCartList: any[] = [];
  minPrice: number;
  maxPrice: number;
  constructor(
    private productSvc: ProductService,
    private filterOptions: DropDownService,
    private fb : FormBuilder
  ) {
    this.filterForm = this.fb.group({
        filterBy : [null],
        realtedTo : [''],
        price : []
    })
  }

  ngOnInit(): void {
    this.getProductDetails();
    this.getFilterOptions();
  }

  getFilterOptions() {
    this.filterOptions.getFilterOption().subscribe((res) => {
      if (res) {
        this.filterOptionList = res;
      }
    });
  }

  getRelatedSearch(){
      this.filterForm.get('realtedTo')?.setValue(this.filterOptionList.find((product) => product.id == this.filterForm.get('filterBy')?.value).option);
      this.sortProducts();
  }

  getProductDetails() {
    this.productSvc.getProductDetail().subscribe((res) => {
      if (res) {
        this.productList = res;
        this.filteredCartList = [...this.productList];
      }
    });
  }

  addToCart(product : any){
      this.productSvc.addItemToMyCart(product).subscribe((res) => {
        console.log(res,'reerere')
      })
  }

  sortProducts(): void {
    console.log(this.filterForm.get('filterBy')?.value,'ttt')
    if (this.filterForm.get('filterBy')?.value === '2') {
      this.filteredCartList =  this.productList.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
    } else if (this.filterForm.get('filterBy')?.value === '3') {
      this.filteredCartList = this.productList.sort((a, b) => b.discount - a.discount);
    } else {
     
      this.filteredCartList =   this.productList.sort((a, b) => a.pName.localeCompare(b.pName));
    }
  }

   formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    this.filteredCartList = this.productList?.filter(item => {
      const itemPrice = parseFloat(item.price.replace(/,/g, ''));
      return itemPrice <= value;
    });
    console.log(this.filteredCartList,'yy',this.productList)
    // this.sortProducts(); 

    return `${value}`;
  }


}
