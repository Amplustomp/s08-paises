import { Component, OnInit } from '@angular/core';
import { IPais } from '../pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private servPais:PaisService) { }

  ngOnInit(): void {
    
  }

  // pais!:IPais
  // ngOnInit(): void {
  //   console.log("RuraACTTTT",this.actRoute)
  //   this.actRoute.params
  //   .subscribe( ({countryId})=>{
  //     console.log("countryId destructurado",countryId)
  //     this.servPais.buscarPaisCodigo(countryId)
  //         .subscribe({next:pais=>{
  //           console.log("Servcio Ser-Pais",pais)
  //           this.pais = pais
  //         }
  //       })
  //   })  
  // }

}
