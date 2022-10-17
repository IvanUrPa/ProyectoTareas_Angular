import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie:string | null = '12345';

  constructor(private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();
  }

  //* funcion para bscar la cookie
  private checkCookie():boolean {
    console.log('Funcionando cookie', this.cookie);
    if (this.cookie !== null) {
      return true;
    } else {
      this.router.navigate(['/','auth','login']);
      return false;
    }
  }
}
