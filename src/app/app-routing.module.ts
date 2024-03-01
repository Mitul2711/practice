import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path: "admin", loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {path:'child', component: ChildComponent},
  {path:'parent', component: ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
