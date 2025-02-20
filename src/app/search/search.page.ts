import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonRouterOutlet, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel} from '@ionic/angular/standalone';
import { BottomNavBarComponent } from '../bottom-nav-bar/bottom-nav-bar.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: 
  [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    BottomNavBarComponent

  ]
})
export class SearchPage implements OnInit {
  searchTerm: string = '';
  items: any[] = []; // Replace with your data source
  filteredItems: any[] = [];

  constructor() { }

  ngOnInit() {
     // Initialize your data here
     this.items = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Another Item' },
      { name: 'Something Else' }
    ];
    this.filteredItems = this.items;
  }

  setFilteredItems() {
    this.filteredItems = this.items.filter((item) => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

}
