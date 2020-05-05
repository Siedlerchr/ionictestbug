import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../../image-modal/image-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {

    this.datas = [
      "https://placekitten.com/g/200/300",
      "https://i.picsum.photos/id/237/400/500.jpg"


    ]

   }

  datas = []

  async openImage(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: imageUrl
      }
    });
    return await modal.present();
  }

}
