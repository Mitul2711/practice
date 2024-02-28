import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { User1Component } from './components/user1/user1.component';
import { User2Component } from './components/user2/user2.component';

const routes: Routes = [
  {path:'child', component: ChildComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'user1', component: User1Component},
  {path: 'user2', component: User2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
