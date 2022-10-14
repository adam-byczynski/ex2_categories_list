import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GetCategoriesService } from '../../services/get-categories.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  constructor(private _getCategoriesService: GetCategoriesService) {
  }

  data$: Observable<any[]> = this._getCategoriesService.getCategories();
}
