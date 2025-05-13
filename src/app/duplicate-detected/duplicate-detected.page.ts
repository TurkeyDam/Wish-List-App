import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-duplicate-detected',
  templateUrl: './duplicate-detected.page.html',
  styleUrls: ['./duplicate-detected.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DuplicateDetectedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
