import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { GetCategoriesServiceModule } from './services/get-categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesListComponent }]), CategoriesListComponentModule, GetCategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
