import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * Logout the admin that's currently logged in
   */
  logoutAdmin(): void {
    alert(`Logout Not Implemented - admin.component.ts`);
    // implement code to logout admin
  }
}
