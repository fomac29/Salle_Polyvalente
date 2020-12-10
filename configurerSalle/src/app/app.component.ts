import { Equipement } from './../classes/equipement/equipement';
import { Salle } from './../classes/salles/salle';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  salle : Salle = new Salle();
  name : string = "coucou";


  set nomSalle(event){
    this.salle.nom = event.target.value;;
  }
  printSalle(){
    if(this.checkSalle()) console.log(this.salle);

  }

  salleJson(){
    if(this.checkSalle()) console.log(JSON.stringify(this.salle));

  }

  checkSalle(){
    if(!this.salle.nom ||  !this.salle.prix || !this.salle.nbPlacesAssises || !this.salle.nbPlacesDebouts ) return false;
    this.salle.listEquipements.forEach((e : Equipement)=>{
      if(!e){
        return false;
      }
    })
    return true;
  }

}
