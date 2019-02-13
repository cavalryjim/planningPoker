import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.page.html',
  styleUrls: ['./selected-card.page.scss'],
})
export class SelectedCardPage implements OnInit {
  value: string;
  constructor(private modalCtrl: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.value = this.navParams.get('value');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
