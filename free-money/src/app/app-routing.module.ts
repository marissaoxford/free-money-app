import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogoutComponent } from './logout/logout.component';
import { P404Component } from './p404/p404.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';
import { DashboardExpensesComponent } from './dashboard-expenses/dashboard-expenses.component';
import { DashboardFreeMoneyComponent } from './dashboard-free-money/dashboard-free-money.component';
import { DashboardSavingsComponent } from './dashboard-savings/dashboard-savings.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'dashboard-main',
    component: DashboardMainComponent,
  },
  {
    path: 'dashboard-accounts',
    component: DashboardAccountsComponent,
  },
  {
    path: 'dashboard-expenses',
    component: DashboardExpensesComponent,
  },
  {
    path: 'dashboard-free-money',
    component: DashboardFreeMoneyComponent,
  },
  {
    path: 'dashboard-savings',
    component: DashboardSavingsComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    component: P404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
