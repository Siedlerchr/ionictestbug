import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: any;
  @ViewChild('slider', { read: ElementRef, static: false })
  slider: ElementRef;

  sliderOpts: {
    centeredSlides: true,
    zoom: {
      maxRatio: 3
    }
  }
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }
  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;

    if (zoomIn) {
      zoom.in();
    }
    else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}