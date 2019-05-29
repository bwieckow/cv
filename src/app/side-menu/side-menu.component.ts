import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navCv() {
    this.router.navigate(['/cv']);
  }

  navCode() {
    this.router.navigate(['/']);
  }

  navPosts() {
    this.router.navigate(['/posts']);
  }

  navHobbies() {
    this.router.navigate(['/']);
  }
}
