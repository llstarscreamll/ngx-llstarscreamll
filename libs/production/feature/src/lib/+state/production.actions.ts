import { createAction, props } from '@ngrx/store';
import { IProductionLog } from './production.models';

interface GenericEntity {
  id: string;
  name: string;
}

export const createLog = createAction('[Production] create log', props<{ data: any }>());
export const createLogOk = createAction('[Production] create log ok', props<IProductionLog>());
export const createLogError = createAction('[Production] create log error', props<{ error: any }>());

export const searchLogs = createAction('[Production] search logs', props<{ query: any }>());
export const searchLogsOk = createAction('[Production] search logs ok', props<{ data: IProductionLog[]; meta: any }>());
export const searchLogsError = createAction('[Production] search logs error', props<{ error: any }>());

export const searchProducts = createAction('[Production] search products', props<{ query: any }>());
export const searchProductsOk = createAction(
  '[Production] search products ok',
  props<{ data: GenericEntity[]; meta: any }>()
);
export const searchProductsError = createAction('[Production] search products error', props<{ error: any }>());

export const searchMachines = createAction('[Production] search machines', props<{ query: any }>());
export const searchMachinesOk = createAction(
  '[Production] search machines ok',
  props<{ data: GenericEntity[]; meta: any }>()
);
export const searchMachinesError = createAction('[Production] search machines error', props<{ error: any }>());

export const searchCustomers = createAction('[Production] search customers', props<{ query: any }>());
export const searchCustomersOk = createAction(
  '[Production] search customers ok',
  props<{ data: GenericEntity[]; meta: any }>()
);
export const searchCustomersError = createAction('[Production] search customers error', props<{ error: any }>());
