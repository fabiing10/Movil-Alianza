import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BookModel} from '../models/book.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

/*
  Generated class for the GeneralServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeneralServiceProvider {

    private cfg: any;

    constructor(private authHttp: AuthHttp) {
      this.cfg = AppConfig.cfg;
    }

    getAllUsersNetwork() {
      return this.authHttp.get(this.cfg.apiUrl + this.cfg.network)
        .toPromise()
        .then(rs => {
          return rs.json();
        });
    }

}
