export class Emploi {
  Id : number ;
  Nom : string;
  Designation : string;
  DateDebut : Date;
  DateFin : Date;

  constructor(id:number, nom:string, designation:string , dateDebut:Date, dateFin: Date){
    this.Id = id;
    this.Designation = designation;
    this.DateDebut = dateDebut ;
    this.DateFin = dateFin ;
  }
}
