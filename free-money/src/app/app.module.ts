import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardExpensesComponent } from './dashboard-expenses/dashboard-expenses.component';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';
import { DashboardSavingsComponent } from './dashboard-savings/dashboard-savings.component';
import { DashboardFreeMoneyComponent } from './dashboard-free-money/dashboard-free-money.component';
import { PersonalQuizComponent } from './personal-quiz/personal-quiz.component';
import { MenuLoggedInComponent } from './menu-logged-in/menu-logged-in.component';
import { MenuLoggedOutComponent } from './menu-logged-out/menu-logged-out.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    DashboardMainComponent,
    DashboardExpensesComponent,
    DashboardAccountsComponent,
    DashboardSavingsComponent,
    DashboardFreeMoneyComponent,
    PersonalQuizComponent,
    MenuLoggedInComponent,
    MenuLoggedOutComponent,
    P404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
