import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ModalController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButtons, IonButton, IonBackButton  } from '@ionic/angular/standalone';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
  standalone: true,
  imports: 
  [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonLabel,
    IonButton,
    IonItem,
    IonInput,
    IonButtons,
    IonBackButton
  ]
})
export class AddItemModalPage implements OnInit {
  // itemName: string = '';
  // itemDescription: string = '';

  constructor() { }


    // Method to close the modal and pass data back
    // addItem() {
    //   this.modalCtrl.dismiss({
    //     itemName: this.itemName,
    //     itemDescription: this.itemDescription,
    //   });
    // // }
  
    // // Method to close the modal without passing any data
    // close() {
    //   this.modalCtrl.dismiss();
    // }

  ngOnInit() {
  }

}
