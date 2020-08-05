import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from './services/popularTags.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { PopularTagsComponent } from './components/popularTags.component';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    RouterModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
