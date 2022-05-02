import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() public userName: string = '';
  @Input() public imgSrc: string = '';
  @Input() public commentText: string = '';

  public userStatus = 'Guest';
  public currentDate: number = Date.now();

  ngOnInit(): void {}
}
