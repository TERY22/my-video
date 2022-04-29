import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public topVideos? = []

  constructor(private videoService: VideosService) {
    this.videoService.getPopularVideos().subscribe((data: any) => {
      this.topVideos = data.videos;
    });
  }

  ngOnInit(): void {}
}
