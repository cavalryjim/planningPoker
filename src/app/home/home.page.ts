import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectedCardPage } from '../selected-card/selected-card.page';
import { CardService } from '../services/card.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards = [] // this.cardsService.deck;

  constructor(public modalCtrl: ModalController,
              private cardService: CardService,
              private storage: Storage ) {}

  ngAfterViewInit() {
    this.storage.get('deckType').then((val) => {
      console.log(val);
      if (val) {
        this.cardService.selection = val;
      } else {
        this.cardService.selection = 'sizes';
      }
      this.cards = this.cardService.cardValues();
      console.log(this.cards);
    });
  }

  async onSelected(card) {
    console.log(card);
    const modal = await this.modalCtrl.create({
      component: SelectedCardPage,
      componentProps: { value: card }
    });
    return await modal.present();
  }
}
