import { Component, OnInit } from '@angular/core';
import { IPais } from '../pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Variable que se utilizará para desplegar la palabra seleccionada
    txBuscar:string="sp"
    // Check para indicar si hay error
    swError:boolean=false
    // Si es true se activa el bloque de ayuda en el html
    mostrarSugerencias: boolean = false;
    // Arreglo de paises sugeridos
    paisesSugeridos   : any[] = [];
    //  Resultados de Paises
    paises:IPais[]=[]
  
    // Método que se ejecutará cuando 
    // presionen enter en el componente input
    buscarEmit(stBuscar:any){
    console.log("Método Buscar, Por País")
    }
    // Método que se ejecutará cuando se 
    // produsca  onDebounce en el componente input
    sugerencia(stBuscar:any){
    console.log("Método Sugerencia, Por País") 
    }
    // Método que se ejecutará cuando den click
    // en una de la lista sugerida
    buscarSugerido(stBuscar:any){
      console.log("Método Buscar Sugerido, Por País") 
    }

}
