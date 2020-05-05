import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: any;
  @ViewChild('slider', {static: true })
  protected slider: IonSlides;

  sliderOpts: {
    centeredSlides: true,
    zoom: {
      maxRatio: 3
    }
  }
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  myzoom: any;

  async ngOnInit() {
    this.img = this.navParams.get('img');
    const swiper = await this.slider.getSwiper();
    swiper.appendSlide(`<ion-slide><img src="${this.img}" (error)="(onError($event))"/></ion-slide>`)
    this.myzoom = swiper.zoom;
  }

  zoom(zoomIn: boolean) {

    if (zoomIn) {
      this.myzoom.in();
    }
    else {
      this.myzoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }


}
