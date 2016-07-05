import { RouterConfig }         from '@angular/router';
import { HomeComponent }     		from './home.component';
import { DetailsComponent }     from '../details/details.component';

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: '/home', terminal: true },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DetailsComponent
      }
    ]
  }
];