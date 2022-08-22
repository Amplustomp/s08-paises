import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  constructor() { }
  // Ahora si necesitaremos el ngOnInit

  ngOnInit(): void {
    // Subscribimos el evento cuando inicia
    this.debSubjectHarrys
    .subscribe(valor=>{
          console.log("PInput==,debouncer Init:=>",valor)
          // enviamos al padre el valor
          // lo mismo que el buscar
          this.onDebounce.emit(valor)
      })
  }
  


  txBuscar:string=""
  // placeHolderVar, recibido como parámetro desde el padre
  @Input() placeHolderVar:string = ""
  //Método que se ejecutará cuando presione Enter
  //Envio un evento al padre con emitter  
  @Output() onEnter: EventEmitter < string > = new EventEmitter()

       // Emitiremos un evento al padre
       @Output() onDebounce:EventEmitter < string > = new EventEmitter()
       //subject esta en rxjs, Observables
       debSubjectHarrys:Subject<string> = new Subject()

  buscar(){
    console.log("PInput==,Buscar Submit")
    // Emite un evento al padre enviando el contenido de txBuscar
    this.onEnter.emit(this.txBuscar)
  }
  // Método que se ejecuta cada vez que se presiona una tecla
  teclaPresionada(tecla:any){
    const valor = tecla.target.value
    console.log("PInput==,teclaPresionada ",valor)
  }

  

}
