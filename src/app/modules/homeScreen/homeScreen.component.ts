import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Product } from '../../model';
import { DropDownService } from '../../service/dropDownOption.service';
import { ProductService } from '../../service/producService';

@Component({
  selector: 'app-homeScreen',
  templateUrl: './homeScreen.component.html',
  styleUrl: './homeScreen.component.scss',
})
export class HomeScreenComponent implements OnInit {
  productList: any[];
  filterForm: FormGroup;
  filterOptionList: any[] = [];
  filteredCartList: Product[] = [];
  filteredOptions: Observable<Product[]>;
  isStackedViewSelected = true;


  max = 10000;
  min = 0;
  value = 0;

  showTicks = false;
  disabled = false;
  thumbLabel = false;
  constructor(
    private productSvc: ProductService,
    private filterOptions: DropDownService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      filterBy: [null],
      realtedTo: [''],
      search: [''],
    });

  }

  ngOnInit(): void {
    this.getProductDetails();
    this.getFilterOptions();
    this.filteredOptions = this.filterForm.get('search')!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  //auto complete

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.productList?.filter((product) =>
      product.pName.toLowerCase().includes(filterValue)
    );
  }

  getFilterOptions() {
    this.filterOptions.getFilterOption().subscribe((res) => {
      if (res) {
        this.filterOptionList = res;
      }
    });
  }

  getRelatedSearch() {
    this.filterForm
      .get('realtedTo')
      ?.setValue(
        this.filterOptionList.find(
          (product) => product.id == this.filterForm.get('filterBy')?.value
        ).option
      );
    this.sortProducts();
  }

  getProductDetails() {
    this.productSvc.getProductDetail().subscribe((res) => {
      if (res) {
        this.productList = res;
        const prices = this.productList.map((product) =>
          parseFloat(product.price.replace(/,/g, ''))
        );
        this.min = Math.min(...prices);
        this.max = Math.max(...prices);
        this.filteredCartList = [...this.productList];
      }
    });
  }

  addToCart(product: any) {
    this.productSvc.addItemToMyCart(product).subscribe((res) => {
      console.log(res, 'add res');
    });
  }

  sortProducts(): void {
    if (this.filterForm.get('filterBy')?.value === '2') {
      this.filteredCartList = this.productList.sort(
        (a, b) =>
          parseFloat(a.price.replace(/,/g, '')) -
          parseFloat(b.price.replace(/,/g, ''))
      );
    } else if (this.filterForm.get('filterBy')?.value === '3') {
      this.filteredCartList = this.productList.sort(
        (a, b) => b.discount - a.discount
      );
    } else {
      this.filteredCartList = this.productList.sort((a, b) =>
        a.pName.localeCompare(b.pName)
      );
    }
  }

  filterByPrice(price: string) {
    this.filteredCartList = this.productList.filter(
      (product) => parseFloat(product.price.replace(/,/g, '')) <= +price
    );
  }

  searchByProductName() {
    if (this.filterForm.get('search')?.value) {
      const searchTerm = this.filterForm.get('search')?.value.toLowerCase();
      this.filteredCartList = this.productList.filter((product) => {
        return product.pName.toLowerCase().includes(searchTerm);
      });
    }
  }
}
