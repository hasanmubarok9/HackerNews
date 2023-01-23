import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
})
export class TopicDetailComponent implements OnInit {
  topic?: Topic;
  comments?: Array<Topic & { subComment: Topic | null }>;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTopic();
  }

  goBack(): void {
    this.location.back();
  }

  getTopic(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.topicService.getDetail(id).subscribe((topic) => {
      if (topic.descendants > 0) {
        forkJoin(
          topic.kids.map((commentId) => this.topicService.getDetail(commentId))
        ).subscribe((responseComment) => {
          // const subComment = this.topicService.getDetail(res)
          forkJoin(
            responseComment.map((comment) => {
              if (comment.kids && comment.kids.length > 0) {
                return this.topicService.getDetail(comment.kids[0]);
              }
              return Promise.resolve(null);
            })
          ).subscribe((responseSubComment) => {
            this.comments = responseComment.map((comment) => ({
              ...comment,
              subComment:
                responseSubComment.find(
                  (subComment) => subComment?.parent === comment.id
                ) || null,
            }));
          });
        });
      }
      this.topic = topic;
    });
  }
}
