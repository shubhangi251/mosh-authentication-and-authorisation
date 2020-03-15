import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
     private router:Router,
    private authService:AuthService) { }
  canActivate() {

    if(this.authService.currentUser && this.authService.currentUser.admin)
return true;
this.router.navigate(['/no-access']);
return false;
  }
}
