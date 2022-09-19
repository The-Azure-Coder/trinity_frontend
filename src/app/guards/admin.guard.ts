import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private route:Router){}

  canActivate(): boolean{
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      console.log('Not logged in')
      this.route.navigate(['/login']);
      return false
    }
  }    
  
}
