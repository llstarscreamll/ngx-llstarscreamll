import { createProductionLog } from '../testing';
import { IProductionLog } from './production.models';
import { State, productionAdapter, initialState } from './production.reducer';
import * as ProductionSelectors from './production.selectors';

describe('Production Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductionId = (it) => it['id'];

  let state;

  beforeEach(() => {
    state = {
      production: productionAdapter.setAll(
        [createProductionLog('PRODUCT-AAA'), createProductionLog('PRODUCT-BBB'), createProductionLog('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Production Selectors', () => {
    it('getAllProduction() should return the list of Production', () => {
      const results = ProductionSelectors.getProductionLogs(state);
      const selId = getProductionId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProductionSelectors.getSelected(state);
      const selId = getProductionId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getProductionLoaded() should return the current 'loaded' status", () => {
      const result = ProductionSelectors.getProductionLoaded(state);

      expect(result).toBe(true);
    });

    it("getProductionError() should return the current 'error' state", () => {
      const result = ProductionSelectors.getProductionError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});