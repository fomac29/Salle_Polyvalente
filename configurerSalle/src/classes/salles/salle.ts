import { Equipement } from './../equipement/equipement';
export class Salle {


  nom : string;
  prix : number;
  nbPlacesAssises : number;
  nbPlacesDebouts : number;
  listEquipements : Equipement[] = [];
  constructor(){

  }

  ajouterEquipement(){
    this.listEquipements.push(new Equipement);
  }

  supprimerEquipement(index : number){
    this.listEquipements.splice(index, 1);
  }
}
