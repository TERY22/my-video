import {Component} from '@angular/core';
import {VideosService} from './videos.service';
import {CommentsService} from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchVideos: string = ''

  public search(): void {
    if (this.searchVideos !== '') {
      this.videoService.searchQuery = this.searchVideos;
    } else {
      this.videoService.searchQuery = 'All';
    }
  }

  constructor(private videoService: VideosService, private commentsService: CommentsService) {
    this.commentsService.init();
  }
}
