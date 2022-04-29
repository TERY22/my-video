import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {CommentInterface} from './domain/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly _commentList$: BehaviorSubject<CommentInterface[]> = new BehaviorSubject([] as CommentInterface[])
  private comments: CommentInterface[] = []

  commentList$: Observable<CommentInterface[]> = this._commentList$.asObservable()

  public addNewComment(comment: CommentInterface): void {
    this.comments.push(comment);

    localStorage.setItem('comms', JSON.stringify(this.comments));

    this._commentList$.next(this.comments);
  }

  public getComment(id: number): any {
    return this.commentList$.pipe(map(items => items.filter(item => item.videoID === id)));
  }

  public init(): void {
    this.comments = JSON.parse(localStorage.getItem('comms')!) || [];
    this._commentList$.next(this.comments);
  }
}
