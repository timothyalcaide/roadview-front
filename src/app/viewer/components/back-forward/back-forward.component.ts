import { Component, HostListener, Input, OnChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { GoBack, GoForward } from '../../store';
import { radiansToDegrees } from './../../../shared/utils/angle-conversion';
import { ViewParams } from './../../models/panorama.model';

@Component({
  selector: 'app-back-forward',
  templateUrl: './back-forward.component.html',
  styleUrls: ['./back-forward.component.scss'],
})
export class BackForwardComponent implements OnChanges {
  @Input() params: ViewParams | null;
  @Input() disabled = false;
  lookBack = false;

  constructor(private store: Store) {}

  ngOnChanges(): void {
    if (this.params) {
      const angle = radiansToDegrees(this.params.yaw);
      if (angle < 90 && angle > -90) {
        this.lookBack = false;
      } else {
        this.lookBack = true;
      }
    }
  }

  @HostListener('document:keydown.arrowup')
  onForward() {
    if (this.lookBack) {
      this.store.dispatch(new GoBack(1));
    } else {
      this.store.dispatch(new GoForward(1));
    }
  }

  @HostListener('document:keydown.arrowdown')
  onBack() {
    if (this.lookBack) {
      this.store.dispatch(new GoForward(1));
    } else {
      this.store.dispatch(new GoBack(1));
    }
  }

  @HostListener('document:keydown.shift.arrowup')
  onForwardSpeed() {
    if (this.lookBack) {
      this.store.dispatch(new GoBack(10));
    } else {
      this.store.dispatch(new GoForward(10));
    }
  }

  @HostListener('document:keydown.shift.arrowdown')
  onBackSpeed() {
    if (this.lookBack) {
      this.store.dispatch(new GoForward(10));
    } else {
      this.store.dispatch(new GoBack(10));
    }
  }
}
