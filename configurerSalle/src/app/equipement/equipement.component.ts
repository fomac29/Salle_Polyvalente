import { Equipement } from './../../classes/equipement/equipement';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent {

  @Input() equipement:Equipement = null;
  constructor() {
  }

}
