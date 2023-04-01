import { Component, OnInit } from '@angular/core';
import { RestaurantListService } from './restaurant-list.service';
import { map } from 'rxjs';
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  comments: Comment[] = [];
  constructor(private restaurantList: RestaurantListService) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.restaurantList
      .getData()
      .pipe(map((data: any) => data.filter((data: any) => data.postId > 70)))
      .subscribe((comments) => {
        this.comments = comments;
        console.log(comments);
        
      });
  }
}
