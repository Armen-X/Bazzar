import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './Auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Auth/register/register.module#RegisterPageModule' },
  { path: 'video-chat', loadChildren: './video-chat/video-chat.module#VideoChatPageModule' },
  { path: 'request', loadChildren: './Contacts/request/request.module#RequestPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
