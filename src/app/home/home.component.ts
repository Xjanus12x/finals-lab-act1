import { Component } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  locations: any;
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getLocations().subscribe((data) => {
      this.locations = data;
    });
  }
}
