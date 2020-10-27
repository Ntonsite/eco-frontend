import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      productName: '',
      quantity: null,
      price: null
    }

  }

}
