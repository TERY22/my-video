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
    private service: VideosService,
    private route: ActivatedRoute,
    private commentService: CommentsService
  ) {
    this.route.params.subscribe(params => {
      this.service.getVideoInfo(params['id']).subscribe((data: any) => {
        this.video = data;
      });
    });
  }

  public get userName(): string {
    return this.form.get('name')?.value;
  }

  public get commentText(): string {
    return this.form.get('text')?.value;
  }

  public get src(): string {
    return this.form.get('src')?.value;
  }

  public sendForm(): void {
    this.commentService.addNewComment({
      imgSrc: this.src ?? 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      userName: this.userName ?? 'Ivan',
      userStatus: 'Guest',
      currentDate: Date.now(),
      commentText: this.commentText ?? '',
      videoID: this.video.id
    });
  }

  public form = new FormGroup({
    name: new FormControl('Name'),
    text: new FormControl('Comment')
  })

  ngOnInit(): void {}
}
