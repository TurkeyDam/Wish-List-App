import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonListHeader, IonList, IonAvatar, IonThumbnail, IonGrid, IonRow, IonCol, IonRouterOutlet   } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { BottomNavBarComponent } from '../bottom-nav-bar/bottom-nav-bar.component'; 
// import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
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
    IonItem,
    IonListHeader,
    IonList,
    IonAvatar,
    IonThumbnail,
    IonGrid,
    IonRow,
    IonCol,
    IonRouterOutlet,
    BottomNavBarComponent
  ]
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }
  images = Array.from({ length: 8 }, (_, i) => `./assets/img/${i + 1}.jpg`);

  openAddItemModal() {
    // const modal = await this.modalCrl.create({
    //   component: AddItemModalPage,
    // });
    // modal.onDidDismiss().then((data) => {
    //   if (data.data) {
    //     console.log('New Item:', data.data);
    //     // Handle the new item data here (e.g., add it to a list)
    //   }
    // });
  
    // return await modal.present();
    this.router.navigate(['/add-item-modal']);
  }

  ngOnInit() {
  }

}
