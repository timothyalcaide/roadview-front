import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './containers/map/map.component';
import { ViewComponent } from './containers/view/view.component';
import { ViewerComponent } from './viewer.component';
import { BackForwardComponent } from './components/back-forward/back-forward.component';
import { PanoramaInfosComponent } from './components/panorama-infos/panorama-infos.component';

export const VIEWER_ROUTES: Routes = [{ path: '', component: ViewerComponent }];

@NgModule({
  declarations: [ViewComponent, ViewerComponent, MapComponent, BackForwardComponent, PanoramaInfosComponent],
  imports: [
    CommonModule,
    SharedModule,
    LeafletModule,
    RouterModule.forChild(VIEWER_ROUTES),
  ],
})
export class ViewerModule {}
