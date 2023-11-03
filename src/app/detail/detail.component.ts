import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // Déclaration des attributs 
  idProduit = 0;
  produitCourent:any;
  produitsDb:any;

  // Le constucteur 
  constructor(private route: ActivatedRoute) {}

  // Déclaration des méthodes 
  ngOnInit(): void {
    // On récupére l'ID qui se trouve dans l'URL
    this.idProduit = +this.route.snapshot.params['id'];

    //On recupere les produits stockés dans le localStorage
    this.produitsDb = JSON.parse(localStorage.getItem('produits') || '[]');

    //Recuperer dans notre local storage le produit qui a l'idProduit(id qui ce trouve au niveau de l'url)
    this.produitCourent = this.produitsDb.find((element: any) => element.id == this.idProduit);    
  }
  
}
