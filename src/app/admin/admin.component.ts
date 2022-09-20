import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  /**
   * Logout the admin that's currently logged in
   */
  logoutAdmin(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('User-Type');
    this.route.navigate(['/login'])
  }
}
