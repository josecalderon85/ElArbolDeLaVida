
// functional shared instantiation 

var FabricaAlbaniles = function (nombre){
    var producto = {}
    producto.casco = nombre
    _.extend(producto, cajaDeHerramienta);
    return producto;
}
var cajaDeHerramienta = {
    metro : function(){
        return Math.floor(Math.random() * 100)
    },
    martillo: function (){
        return this.casco + " da Madrazos a pared." 
    }
}
var Jose = FabricaAlbaniles("Jose")
var Pancho = FabricaAlbaniles("Pancho")


