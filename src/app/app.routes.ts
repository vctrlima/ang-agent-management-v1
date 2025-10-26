import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/agent-creation/agent-creation.component').then(
        (m) => m.AgentCreationComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
