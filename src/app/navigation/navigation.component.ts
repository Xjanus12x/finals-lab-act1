import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  title: string = 'Creativity Is Always On Our Menu.';
  isVisible: boolean = true;
  showButtons = false;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  showFiller = false;
  navActive = false;
  hideNav() {
    this.navActive = false;
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
  setTitle(title: string) {
    this.title = title;
    this.isVisible = true;
    this.showButtons = false;
  }
  hideTitle() {
    this.isVisible = false;
    this.showButtons = true;
  }
}
