import { SearchEmployeesOk } from './employees.actions';
import {
  EmployeesState,
  initialState,
  employeesReducer
} from './employees.reducer';
import { createEmployee } from '@kirby/employees/testing';

describe('Employees Reducer', () => {
  const getEmployeesId = it => it['id'];

  beforeEach(() => {});

  describe('valid Employees actions ', () => {
    it('should return set the list of known Employees', () => {
      const employees = [
        createEmployee('PRODUCT-AAA'),
        createEmployee('PRODUCT-zzz')
      ];
      const action = new SearchEmployeesOk({ data: employees, meta: {} });
      const result: EmployeesState = employeesReducer(initialState, action);
      const selId: string = getEmployeesId(result.paginatedList.data[1]);

      expect(result.loaded).toBe(true);
      expect(result.paginatedList.data.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = employeesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
