import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Contacts/contacts.module').then(m => m.ContactsPageModule)
          },
          {
            path: ':Id',
            loadChildren: () =>
              import('../Contacts/contacts-details/contacts-details.module').then(m => m.ContactsDetailsPageModule)
          },
        ]
      },
      {
        path: 'dialogues',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Dialogues/dialogues.module').then(m => m.DialoguesPageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/contacts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
