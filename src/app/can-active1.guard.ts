import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActive1Guard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<any> {
    return new Promise((resolve,reject)=> {
      setTimeout(() => resolve(true),3000)
    })
  }
  
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactive1Guard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component:CanComponentDeactivate):any  {
    return component && component.canDeactivate? component.canDeactivate() :
    true;
    }
  }
  

