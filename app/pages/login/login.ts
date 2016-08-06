import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

import {User} from '../../model/User';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  private error = false;

  private user:User;
        
  constructor(
    private nav: NavController
  ) {
    this.user = new User();
  }

  check(){
    this.error = false;
    
    if(
      this.user.name == "gui@gui.com" && 
      this.user.password == "gui"
    ){
      this.nav.push(TabsPage);
    }else {

      this.error = true; 
    }
  }

}
