import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {VideosService} from '../videos.service';
import {ActivatedRoute} from '@angular/router';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  public video: any;
  public status: string = '';
  public comments: any = this.commentService.commentList$;

  constructor(
    private videoService: VideosService,
    private route: ActivatedRoute,
    private commentService: CommentsService
  ) {
    this.route.params.subscribe(params => {
      this.videoService.getVideoInfo(params['id']).subscribe((data: any) => {
        this.video = data;
      });
    });
  }

  public get userName(): string {
    return this.form.get('userName')?.value;
  }

  public get commentText(): string {
    return this.form.get('commentText')?.value;
  }

  public get src(): string {
    return this.form.get('imgSrc')?.value;
  }

  public sendForm(): void {
    this.commentService.addNewComment({
      imgSrc: this.src ?? 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      userName: this.userName ?? 'Guest',
      userStatus: 'Guest',
      currentDate: Date.now(),
      commentText: this.commentText ?? '',
      videoID: this.video.id
    });
  }

  public form = new FormGroup({
    userName: new FormControl('Jackie'),
    commentText: new FormControl('Hello')
  })

  ngOnInit(): void {}
}
