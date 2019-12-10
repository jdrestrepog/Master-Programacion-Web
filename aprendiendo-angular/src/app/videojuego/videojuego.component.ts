import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck {

    public titulo: String;
    public listado: String;

    constructor(){
        this.titulo = "Componente videojuego";
        this.listado = "Listado de juegos";


        console.log("Se ha cargado el componente");
    }

    ngOnInit(){
        console.log("On Init ejecutado");
    }

    ngDoCheck(){
        console.log("Docheck Ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }
}
