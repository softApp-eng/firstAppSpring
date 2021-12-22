import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firstAppSpring';
  categories : any;
  constructor(private catalogueService : CatalogueService,
    private route:Router) {}
  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.catalogueService.getResource("/categories").subscribe(res=>{
        this.categories = res;
    },err => {
      console.log(err);
    })
  }

  getProductsByCat(c:any){
 this.route.navigateByUrl('/products/2/'+c.id);
  }
}
