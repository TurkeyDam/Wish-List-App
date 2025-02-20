import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterOutlet, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { BottomNavBarComponent } from '../bottom-nav-bar/bottom-nav-bar.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
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
    IonRouterOutlet,
    BottomNavBarComponent,
    IonList,
    IonItem
  ]
})
export class EventsPage implements OnInit {
  events = [
    { name: 'John\'s Birthday', date: '2025-02-20', giftSuggestion: 'Watch' },
    { name: 'Anniversary with Sarah', date: '2025-03-15', giftSuggestion: 'Jewelry' },
    { name: 'Easter', date: '2025-04-20', giftSuggestion: 'Chocolate' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
