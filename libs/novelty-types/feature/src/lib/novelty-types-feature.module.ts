import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '@kirby/shared';
import { NoveltyTypesUiModule } from '@kirby/novelty-types/ui';
import { NoveltyTypesFeatureEffects } from './novelty-types-feature.effects';
import { NoveltyTypesDataAccessModule } from '@kirby/novelty-types/data-access';
import { NoveltyTypesPageComponent } from './novelty-types-page/novelty-types-page.component';
import { EditNoveltyTypePageComponent } from './edit-novelty-type-page/edit-novelty-type-page.component';
import { CreateNoveltyTypePageComponent } from './create-novelty-type-page/create-novelty-type-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    NoveltyTypesUiModule,
    NoveltyTypesDataAccessModule,
    EffectsModule.forFeature([NoveltyTypesFeatureEffects]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: NoveltyTypesPageComponent },
      { path: 'create', component: CreateNoveltyTypePageComponent },
      { path: ':id/edit', component: EditNoveltyTypePageComponent },
    ]),
  ],
  declarations: [
    NoveltyTypesPageComponent,
    EditNoveltyTypePageComponent,
    CreateNoveltyTypePageComponent,
  ],
})
export class NoveltyTypesFeatureModule {}