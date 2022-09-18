import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean = this.isLoggedIn();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  targetRoute(route: string) {
    return this.router.url.includes(route)
  }

  logOut() {
    alert('You are logged out')
    // localStorage.removeItem('auth')
    // this.router.navigate(['/']);
    // this.authenticated = this.isLoggedIn();
  }

  isLoggedIn() {
    if (localStorage.getItem('auth')) {
      // console.log()
      return true
    } else {
      return false
    }


  }

}
