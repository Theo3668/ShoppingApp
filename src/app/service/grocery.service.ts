import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  list;
  writePost;

  constructor(private dataFire: AngularFirestore) { }

  getItems(){
    return this.dataFire.collection('Grocery').valueChanges();
  }
  post(item, alert){
    this.writePost = this.dataFire.collection<any>('Grocery');
    this.writePost.add(item).then(() => {

      console.log("successful");
    });
  }
}
