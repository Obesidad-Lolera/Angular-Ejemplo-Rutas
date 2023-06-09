import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CatOneComponent } from './categories/cat-one/cat-one.component';
import { CatTwoComponent } from './categories/cat-two/cat-two.component';
import { CatThreeComponent } from './categories/cat-three/cat-three.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "products", component: ProductsComponent},
  { 
    path: "category",
    children: [
      { path: "one", component: CatOneComponent},
      { path: "two", component: CatTwoComponent},
      { path: "three", component: CatThreeComponent},

    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
