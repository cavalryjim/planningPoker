import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  sizes = [{id:'XS', img:null}, {id:'S', img:null}, {id:'M', img:null},
           {id:'L', img:null}, {id:'XL', img:null}, {id:'XXL', img:null}];
  fibSeq = [{id:'1', img:null}, {id:'2', img:null}, {id:'3', img:null},
            {id:'5', img:null}, {id:'8', img:null}, {id:'13', img:null},
            {id:'21', img:null}];
  dogs = [{id:'1', img: 'dog1.png'}, {id:'2', img: 'dog2.png'}, {id:'3', img: 'dog3.png'},
          {id:'4', img: 'dog4.png'}, {id:'5', img: 'dog5.png'}];
  options = ['sizes', 'fibSeq', 'dogs'];
  selection = '';
  deck = [];

  constructor(private storage: Storage) {

  }

  setSelection(selection) {
    this.storage.set('deckType', selection);
    this.selection = selection;
  }

  cardValues() {
    console.log(this.selection);
    if (this.selection == 'sizes') {
      return this.sizes;
    } else if (this.selection == 'dogs'){
      return this.dogs;
    } else {
      return this.fibSeq;
    }
  }

}
