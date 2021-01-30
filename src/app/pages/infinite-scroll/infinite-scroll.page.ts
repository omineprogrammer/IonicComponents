import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items = []
  numTimesLeft = 5; 
  
  constructor() { this.addMoreItems() }

  loadData(event) {
    setTimeout(() => {
      var data = [1,2,3,4,5]
      console.log('Done');
      this.addMoreItems();  
      this.numTimesLeft -= 1;  

      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  addMoreItems() {  
    for (let i = 0; i < 10; i++) {  
      this.items.push(i);  
    }  
  } 

}
