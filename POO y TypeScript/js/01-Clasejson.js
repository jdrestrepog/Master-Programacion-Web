var bicicleta = {
    color:  'Rojo',
    modelo: 'BMW',
    frenos: 'De disco',
    VelocidadMaxima: '60km',

    CambiarColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.CambiarColor("Azul");