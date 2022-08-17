import { Component, OnInit } from '@angular/core';
import { IPais } from '../pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //Arreglo de Paises
    paises:IPais[]=[]
    // Guarda la class,
    regActiva:string=''
    // Arreglo de Regiones
    regiones:string[]=['africa','americas','asia','europe','oceania'] 
    // Método que se encargará de definir la class
    regActivaCss(stRegion:string){
       console.log("Método regActivaCss Region, Por Region") 
    }
    // Región Seleccionada
    activarRegion(region:string){
      console.log("Método activar Region, Por Region")
    }

}
