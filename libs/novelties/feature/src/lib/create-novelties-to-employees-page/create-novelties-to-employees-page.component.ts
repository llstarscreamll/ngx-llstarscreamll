import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { EmployeeInterface } from '@llstarscreamll/employees/util';
import { NoveltiesFacade } from '@llstarscreamll/novelties/data-access';
import { EmployeesFacade } from '@llstarscreamll/employees/data-access';
import { NoveltyTypeInterface } from '@llstarscreamll/novelty-types/data';
import { Pagination, LoadStatuses, ApiError } from '@llstarscreamll/shared';

@Component({
  selector: 'llstarscreamll-create-novelties-to-employees-page',
  templateUrl: './create-novelties-to-employees-page.component.html',
  styleUrls: ['./create-novelties-to-employees-page.component.scss']
})
export class CreateNoveltiesToEmployeesPageComponent
  implements OnInit, OnDestroy {
  public createNoveltiesToEmployeesStatus$: Observable<LoadStatuses>;
  public employees$: Observable<Pagination<EmployeeInterface>>;
  public noveltyTypes$: Observable<Pagination<NoveltyTypeInterface>>;
  public apiError$: Observable<ApiError>;
  private destroy$ = new Subject();

  public constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private noveltiesFacade: NoveltiesFacade,
    private employeesFacade: EmployeesFacade
  ) {}

  public ngOnInit() {
    this.employees$ = this.employeesFacade.paginatedEmployees$;
    this.noveltyTypes$ = this.noveltiesFacade.paginatedNoveltyTypes$;
    this.createNoveltiesToEmployeesStatus$ = this.noveltiesFacade.createNoveltiesToEmployeesStatus$;
    this.apiError$ = this.noveltiesFacade.error$;

    this.createNoveltiesToEmployeesStatus$
      .pipe(
        tap(status => {
          if (status === LoadStatuses.Completed) {
            this.snackBar.open('Novedades creadas correctamente', 'Ok');
            this.router.navigate(['/time-clock-logs']);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.noveltiesFacade.resetCreateNoveltiesToEmployees();
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSearchEmployees(query) {
    this.employeesFacade.search(query);
  }

  public onSearchNovelties(query) {
    this.noveltiesFacade.searchNoveltyTypes(query);
  }

  public onSubmit(data) {
    this.noveltiesFacade.createNoveltiesToEmployees(data);
  }
}