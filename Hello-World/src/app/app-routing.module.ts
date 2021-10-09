import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{
  path:' ',component:AppComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'about', component:AboutComponent
},
{
  path:'gallery', component:GalleryComponent
},
{
  path:'contact', component:ContactComponent
},
{
  path:'product', component:ProductComponent
},
{
  path:'**', component:PageNotFoundComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
