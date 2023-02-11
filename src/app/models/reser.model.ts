import { last } from "rxjs";

export class Reservation{
  Id : number ;
  Date : Date;
  Nom: string;
  Prenom: string;
  AdressDepart : string;
  AdressArrivee : string;
  Duree : number;
  IdCategorie:string;
  IdMotif :string;

constructor(id:number, date:Date,nom:string,prenom,string, adressDepart:string,adressArrivee:string,duree:number, cat:string,motifTransport:string){
    this.Id = id,
    this.Date=date,
    this.Nom=nom,
    this.Prenom=prenom,
    this.AdressDepart=adressDepart
    this.AdressArrivee=adressArrivee,
    this.Duree=duree,
    this.IdCategorie=cat,
    this.IdMotif=motifTransport
  }

}
