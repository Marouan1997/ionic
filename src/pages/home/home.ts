import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: AngularFireList<any[]>;

  constructor(public navCtrl: NavController , db :AngularFireDatabase ) 
  {
    this.persons = db.database.list('people')
  }
  
}
