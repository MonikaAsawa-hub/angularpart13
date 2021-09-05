import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @ViewChild('searchForm') searchForm!: NgForm

  public filterCategoryItem: any;
  searchKey: string = "";
  private productList: any;
  public SearchList: Product = new Product;
  public searchItem: string = '';
  public selectedvalue: any;

  constructor(
    private cartService: CartService,
    private api: ApiService,
    private searchService: SearchService
  ) { }

  ngAfterViewInit(): void {

    const formValue = this.searchForm.valueChanges;

    formValue?.pipe(
      // map(data => data.searchTerm))
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged()
    )
      .subscribe(res => {
        this.selectedItem(res);
      })
  }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategoryItem = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
    alert("Added to Cart");
  }

  filterData(category: string) {
    this.filterCategoryItem = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

  selectedItem(category: string) {
    if (this.productList != null || this.productList != undefined) {
      this.filterCategoryItem = this.productList
        .filter((a: Product) => {
          if (a.title.toLowerCase().startsWith(category)) {
            return a;
          }
          if (category == '') {
            return this.filterCategoryItem;
          }
        })
    }
    category = '';
  }


}
