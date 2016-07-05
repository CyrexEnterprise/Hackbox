import { RouterConfig }         from '@angular/router';
import { HomeComponent }     		from './home.component';
import { DummyComponent }     from '../dummy.component';

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: '/home', terminal: true },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DummyComponent
      }
    ]
  }
];