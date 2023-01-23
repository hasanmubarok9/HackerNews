import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [AppComponent, TopicsComponent, TopicDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
