import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  //private cookie:string | null = null;
  private cookie?:string | null = this.cookieService.get('token_session');

  constructor(private router:Router, private cookieService:CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();
  }

  private checkCookie():boolean {
    console.log('ok', this.cookie);

    if (!this.cookie) {
      this.router.navigate(['/','auth','login'])
      return false;
    }
    return true;

    /*if(this.cookie !== null) {
      return true;
    } else {
      this.router.navigate(['/','auth','login'])
      return false;
    }*/
  }

}
