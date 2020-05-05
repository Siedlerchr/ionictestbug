import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModalPage } from './image-modal.page';
import { NavParams, ModalController } from '@ionic/angular';

describe('ImageModalPage', () => {
  let component: ImageModalPage;
  let fixture: ComponentFixture<ImageModalPage>;

  const modalSpy = jasmine.createSpyObj('Modal', ['present']);
  let modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalCtrlSpy.create.and.callFake(() => {
    return modalSpy;
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageModalPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NavParams, useClass: NavParamsMock
        },
        {
          provide: ModalController, use: modalCtrlSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
      return NavParamsMock.returnParam
    }
    return 'assets/Emergency_fire_hydrant.png';
  }
  static setParams(value) {
    NavParamsMock.returnParam = value;
  }
}