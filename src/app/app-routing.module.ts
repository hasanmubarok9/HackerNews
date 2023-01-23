import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics', component: TopicsComponent },
  { path: 'topic/:id', component: TopicDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
