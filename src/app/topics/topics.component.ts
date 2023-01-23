import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe((topics: number[]) => {
      forkJoin(
        topics.slice(0, 20).map((topic) => this.topicService.getTopic(topic))
      ).subscribe((response) => (this.topics = response));
    });
  }
}
