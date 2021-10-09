import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:SubscribeService) { }

  ngOnInit(): void {
  }
  product=[];
  productDetails(){
    this.service.productInfo().subscribe(data => this.product=data);
  }
}
