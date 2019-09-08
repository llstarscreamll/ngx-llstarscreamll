import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Pagination } from '@llstarscreamll/shared';
import { NoveltyModel } from '@llstarscreamll/novelties/data';
import { NOVELTIES_FEATURE_KEY, NoveltiesState } from './novelties.reducer';

// Lookup the 'Novelties' feature state managed by NgRx
const getNoveltiesState = createFeatureSelector<NoveltiesState>(
  NOVELTIES_FEATURE_KEY
);
const getLoaded = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => state.loaded
);
const getCreateNoveltiesToEmployeesStatus = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => state.createNoveltiesToEmployeesStatus
);
const getError = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => state.error
);
const getPaginatedList = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => mapPaginatedDataToModel(state.paginatedList)
);
const getPaginatedNoveltyTypesList = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => state.paginatedNoveltyTypesList
);
const getSelectedNovelty = createSelector(
  getNoveltiesState,
  (state: NoveltiesState) => state.selected
);

function mapPaginatedDataToModel(
  paginatedData: Pagination<any>
): Pagination<NoveltyModel> {
  return {
    ...paginatedData,
    data: NoveltyModel.fromJsonList(paginatedData.data)
  };
}

export const noveltiesQuery = {
  getPaginatedList,
  getSelectedNovelty,
  getPaginatedNoveltyTypesList,
  getLoaded,
  getCreateNoveltiesToEmployeesStatus,
  getError
};
