import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({    
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
    public titulo: String = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla("Rebook Classic", "Rebook", "Blancas", 80, true ),
            new Zapatilla("Nike Zero", "Nije", "Azules", 90, true ),
            new Zapatilla("Adidad Country", "Adidas", "Verdes", 100, true )
        ];
    }

    ngOnInit(){
        console.log(Zapatilla);
    }
}