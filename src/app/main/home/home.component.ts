import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = new NearbyServicesChipModel();

  nearbyServicesChips : NearbyServicesChip[] =[
    "سباك",
    "كهربائي",
    "ألوميتال",
    "نجار",
    "محارة",
    "دهانات",
    "نقاش",
    "حداد",
    "ستورجي",
    "ميكانيكي",
    "تكييفات",
    "سيراميك",
  ];

  areas: Area[] = [
    'Maadi',
    'Nasr City',
    'Shoubra',
    'New Cairo',
    'West el-Balad',
    'Dokki',
    'Mohandeseen',
    'Haram',
    'Faisal',
    'Agouza',
    'Roshdy',
    'Smouha',
    'Louran',
    'Bahary',
    'Cleopatra',
    'Ibsheway',
    'el-Fayoum City',
    'Damietta Elgedida',
    'Damietta City',
  ];

  constructor(){}

  ngOnInit(){
    
  }
  
  nearbyServicesChip(event: CdkDragDrop<NearbyServicesChip[]>) {
    moveItemInArray(this.nearbyServicesChips, event.previousIndex, event.currentIndex);
  }

  selectNearbyServicesChip(chip: MatChip){
    console.log("chip", chip.value);
    this.model.specialization = chip.value;
  }

  area(event: CdkDragDrop<Area[]>) {
    moveItemInArray(this.areas, event.previousIndex, event.currentIndex);
  }

  selectAreaChip(chip: MatChip){
    console.log("chip", chip.value);
    this.model.area = chip.value;
  }



}


export interface NearbyServicesChip{
}
export interface Area{
}

export class NearbyServicesChipModel{
  public specialization?: string;
  public area?: string;
}