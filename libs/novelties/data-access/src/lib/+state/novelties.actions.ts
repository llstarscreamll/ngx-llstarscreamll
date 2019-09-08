import { Action } from '@ngrx/store';

import { Pagination } from '@llstarscreamll/shared';
import { NoveltyModel } from '@llstarscreamll/novelties/data';
import { NoveltyTypeInterface } from '@llstarscreamll/novelty-types/data';

export enum NoveltiesActionTypes {
  SearchNovelties = '[Novelties] search',
  SearchNoveltiesOk = '[Novelties] search ok',
  SearchNoveltiesError = '[Novelties] search error',

  CreateNoveltiesToEmployees = '[Novelties] create novelties to employees ',
  CreateNoveltiesToEmployeesOk = '[Novelties] create novelties to employees ok',
  CreateNoveltiesToEmployeesError = '[Novelties] create novelties to employees error',
  ResetCreateNoveltiesToEmployees = '[Novelties] clean create novelties to employees',

  GetNovelty = '[Novelties] get',
  GetNoveltyOk = '[Novelties] get ok',
  GetNoveltyError = '[Novelties] get error',

  UpdateNovelty = '[Novelties] update',
  UpdateNoveltyOk = '[Novelties] update ok',
  UpdateNoveltyError = '[Novelties] update error',

  SearchNoveltyTypes = '[NoveltyTypes] search',
  SearchNoveltyTypesOk = '[NoveltyTypes] search ok',
  SearchNoveltyTypesError = '[NoveltyTypes] search error',

  CleanSelectedNovelty = '[Novelties] clean selected',
  CleanApiErrors = '[Novelties] clean api errors'
}

export class SearchNovelties implements Action {
  readonly type = NoveltiesActionTypes.SearchNovelties;
  public constructor(public payload: any = {}) {}
}

export class SearchNoveltiesOk implements Action {
  readonly type = NoveltiesActionTypes.SearchNoveltiesOk;
  constructor(public payload: Pagination<NoveltyModel>) {}
}

export class SearchNoveltiesError implements Action {
  readonly type = NoveltiesActionTypes.SearchNoveltiesError;
  constructor(public payload: any) {}
}

export class CreateNoveltiesToEmployees implements Action {
  readonly type = NoveltiesActionTypes.CreateNoveltiesToEmployees;
  constructor(public payload: any) {}
}

export class CreateNoveltiesToEmployeesOk implements Action {
  readonly type = NoveltiesActionTypes.CreateNoveltiesToEmployeesOk;
  constructor(public payload: any) {}
}

export class CreateNoveltiesToEmployeesError implements Action {
  readonly type = NoveltiesActionTypes.CreateNoveltiesToEmployeesError;
  constructor(public payload: any) {}
}

export class ResetCreateNoveltiesToEmployees implements Action {
  readonly type = NoveltiesActionTypes.ResetCreateNoveltiesToEmployees;
}

export class GetNovelty implements Action {
  readonly type = NoveltiesActionTypes.GetNovelty;
  constructor(public payload: any) {}
}

export class GetNoveltyOk implements Action {
  readonly type = NoveltiesActionTypes.GetNoveltyOk;
  constructor(public payload: NoveltyModel) {}
}

export class GetNoveltyError implements Action {
  readonly type = NoveltiesActionTypes.GetNoveltyError;
  constructor(public payload: any) {}
}

export class UpdateNovelty implements Action {
  readonly type = NoveltiesActionTypes.UpdateNovelty;
  constructor(public payload: { id: string; noveltyData: any }) {}
}

export class UpdateNoveltyOk implements Action {
  readonly type = NoveltiesActionTypes.UpdateNoveltyOk;
  constructor(public payload: { id: string; noveltyData: any }) {}
}

export class UpdateNoveltyError implements Action {
  readonly type = NoveltiesActionTypes.UpdateNoveltyError;
  constructor(public payload: { id: string; noveltyData: any; error: any }) {}
}

export class SearchNoveltyTypes implements Action {
  readonly type = NoveltiesActionTypes.SearchNoveltyTypes;
  public constructor(public payload: any = {}) {}
}

export class SearchNoveltyTypesOk implements Action {
  readonly type = NoveltiesActionTypes.SearchNoveltyTypesOk;
  constructor(public payload: Pagination<NoveltyTypeInterface>) {}
}

export class SearchNoveltyTypesError implements Action {
  readonly type = NoveltiesActionTypes.SearchNoveltyTypesError;
  constructor(public payload: any) {}
}

export class CleanSelectedNovelty implements Action {
  readonly type = NoveltiesActionTypes.CleanSelectedNovelty;
}

export class CleanApiErrors implements Action {
  readonly type = NoveltiesActionTypes.CleanApiErrors;
}

export type NoveltiesAction =
  | SearchNovelties
  | SearchNoveltiesOk
  | SearchNoveltiesError
  | CreateNoveltiesToEmployees
  | CreateNoveltiesToEmployeesOk
  | CreateNoveltiesToEmployeesError
  | GetNovelty
  | GetNoveltyOk
  | GetNoveltyError
  | UpdateNovelty
  | UpdateNoveltyOk
  | UpdateNoveltyError
  | SearchNoveltyTypes
  | SearchNoveltyTypesOk
  | SearchNoveltyTypesError
  | CleanSelectedNovelty
  | CleanApiErrors
  | ResetCreateNoveltiesToEmployees;

export const fromNoveltiesActions = {
  SearchNovelties,
  SearchNoveltiesOk,
  SearchNoveltiesError,
  CreateNoveltiesToEmployees,
  CreateNoveltiesToEmployeesOk,
  CreateNoveltiesToEmployeesError,
  GetNovelty,
  GetNoveltyOk,
  GetNoveltyError,
  UpdateNovelty,
  UpdateNoveltyOk,
  UpdateNoveltyError,
  SearchNoveltyTypes,
  SearchNoveltyTypesOk,
  SearchNoveltyTypesError,
  CleanSelectedNovelty,
  CleanApiErrors,
  ResetCreateNoveltiesToEmployees
};
