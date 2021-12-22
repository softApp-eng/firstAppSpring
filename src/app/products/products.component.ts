import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products : any;
  constructor(public catService:CatalogueService,
    private route:ActivatedRoute,
    private router:Router) {
      /*this.router.events.subscribe((val)=>{
        if(val instanceof NavigationEnd){
          let url = val.url;
          console.log(url);
         
       
        }
      })*/

      
     }

  ngOnInit() {
    

    let p1  = this.route.snapshot.params['p1'];
    if(p1 == 1){
     this.getProducts("/products/search/selectedProducts");
    }
    else if(p1 == 2){
   let catId  = this.route.snapshot.params['p2'];
   this.getProducts('categories/'+catId+'/products');
 }
  }

  getProducts(url:any){
    this.catService.getResource(url)
    .subscribe(data => {
      this.products = data;
    },err=>{
      console.log(err);
    })
  }


}
