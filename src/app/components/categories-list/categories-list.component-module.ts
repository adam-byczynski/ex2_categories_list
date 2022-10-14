import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CategoriesListComponent } from './categories-list.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
