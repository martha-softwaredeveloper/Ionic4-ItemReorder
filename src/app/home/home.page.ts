import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: string[];

  constructor(){
    this.items = [
      'Bruce',
      'Ivy',
      'Harvey', 
      'Jim',
      'Lucius',
      'Victor'
    ];
  }

  reorderItems(event){
    console.log(event);
    let itemToMove = this.items.splice(event.detail.from, 1)[0];
    this.items.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }

  save(){
    console.log(this.items);
  }
}
