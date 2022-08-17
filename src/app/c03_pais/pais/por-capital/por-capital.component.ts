import { Component, OnInit } from '@angular/core';
import { IPais } from '../pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   //  Palabra buscar
   txBuscar:string="sp"
   // Por si existe algún Error
   swError:boolean=false
   // Arreglo de Resultados
   paises:IPais[]=[]
 
   // Método Buscar, accionado desde el componente input
   buscarEmit(stBuscar:any){
   console.log("Método BuscarEmit, Por Capital") 
   }
   // Método sugerencia, accionado desde el componente input
   sugerencia(stBuscar:any){
   console.log("Método sugerencia, Por Capital") 
   }

}
