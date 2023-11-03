import { Component,  OnInit } from '@angular/core';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  
  // Liste des produits 
  produits: any[] = [
    {
      id: 1,
      nom: 'Gold Spa',
      description: 'Gamme de produit naturelle',
      imageUrl: 'https://img.freepik.com/photos-premium/maquette-bouteilles-maquillage-cosmetique-beaute-generation-ai_201606-6368.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=ais',
      prix: '120$'
    },
    {
      id: 2,
      nom: 'Robe Dija',
      description: 'Robe taille princesse pour été',
      imageUrl: 'https://img.freepik.com/photos-gratuite/jolie-fille-afro-americaine-petite-taille-dreadlocks-porter-robe-jaune-coloree-magasin-montres-au-centre-commercial_627829-2888.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=ais',
      prix: '125$'
    },
    {
      id: 3,
      nom: 'RobinShoes',
      description: 'Chaussure de marque',
      imageUrl: 'https://img.freepik.com/photos-gratuite/homme-africain-tenue-blanc-sneaker_53876-40940.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=ais',
      prix: '180$'
    },
    {
      id: 4,
      nom: 'Démaquillant',
      description: 'Démaquillant de qualité bon pour la peau',
      imageUrl: 'https://img.freepik.com/vecteurs-libre/composition-realiste-maquillage_1284-18448.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=ais',
      prix: '180$'
    },
    {
      id: 5,
      nom: 'Meuble de salon',
      description: 'Pour embellir vos salons',
      imageUrl: 'https://img.freepik.com/psd-gratuit/salon-minimaliste-canape-tapis-classiques-idees-design-interieur_176382-1531.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph',
      prix: '180$'
    },
    {
      id: 6,
      nom: 'Montre',
      description: 'Des montres à couper le souffle',
      imageUrl: 'https://img.freepik.com/photos-gratuite/femme-montrant-son-nail-art-ongles-montre_23-2149820446.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph',
      prix: '180$'
    },
  ];

  ngOnInit(): void {
    if (!localStorage.getItem('produits')){
      localStorage.setItem('produits', JSON.stringify(this.produits));
    }
    
  }

}


