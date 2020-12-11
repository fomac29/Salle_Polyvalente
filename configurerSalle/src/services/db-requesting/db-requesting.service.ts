import { Salle } from './../../classes/salles/salle';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import { Equipement } from 'src/classes/equipement/equipement';

@Injectable({
  providedIn: 'root'
})
export class DbRequestingService {
  listSalle : Salle[] = [];

  constructor(private http : HttpClient){}

  salleFormat(element : any) : Salle{

    var salle = new Salle();
    salle.id = element.id;
    salle.nom = element.nom;
    salle.prix = element.prix;
    salle.nbPlacesAssises = element.nbPlacesAssises;
    salle.nbPlacesDebouts = element.nbPlacesDebouts;


    for(var e  in element.listEquipements){
      var el:any = e;
      var equipement = new Equipement();
      equipement.nom = el.nom;
      salle.listEquipements.push(equipement);
    }

    return salle;
  }

  recupererSalles() {
    const url = 'https://app-fcd35a0d-b552-4e06-b29e-d58a7863b2bd.cleverapps.io/';

    this.http.get(url).subscribe(response =>
    {
      console.log("reponse ", response);

    }),
    (err =>
    {
      // console.log(err);
    });
  }


  // recupererSalles() {
  //   const url = 'https://entreprise.data.gouv.fr/api/sirene/v1/full_text/INTIA?departement=29';

  //   this.http.get(url).subscribe(response =>
  //   {
  //     for (var element in response['listSalle'])
  //     {
  //       this.listSalle.push(this.salleFormat(response['listSalle'][element]));
  //     }

  //   }),
  //   (err =>
  //   {
  //     console.log(err);
  //   });
  // }


  ajouterSalle(salle : JSON){
    const url = 'https://entreprise.data.gouv.fr/api/sirene/v1/full_text/INTIA?departement=29';

    this.http.post(url,salle).subscribe(response =>
    {
      for (var element in response['etablissement'])
      {


      }

    }),
    (err =>
    {
      return err;
    });
  }


  supprimerSalle(id ){
    const url = 'https://entreprise.data.gouv.fr/api/sirene/v1/full_text/INTIA?departement=29';

    let httpParams = new HttpParams().set('id', id);

    let options = { params: httpParams };

    this.http.delete(url,options).subscribe(response =>
    {
      for (var element in response['etablissement'])
      {


      }

    }),
    (err =>
    {
      return err;
    });
  }


  modifierSalle(salle : JSON){
    const url = 'https://entreprise.data.gouv.fr/api/sirene/v1/full_text/INTIA?departement=29';

    this.http.post(url,salle).subscribe(response =>
    {
      for (var element in response['etablissement'])
      {


      }

    }),
    (err =>
    {
      return err;
    });
  }




}
