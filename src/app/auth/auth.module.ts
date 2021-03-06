import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';
import { ResetComponent } from './components/reset/reset.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GoogleSigninDirective } from './shared/google-signin.directive';
import { AuthStates } from './store/index';

@NgModule({
  declarations: [
    GoogleSigninDirective,
    LoginComponent,
    SignUpComponent,
    PageComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature(AuthStates),
    SharedModule,
    AuthRoutingModule,
  ],
  exports: [GoogleSigninDirective],
})
export class AuthModule {}
