var FabricaAlbaniles = function (nombre) {
  var producto = Object.create(cajaDeHerramienta);
  producto.casco = nombre;
  return producto;
};

var cajaDeHerramienta = {
  metro: function () {
    return Math.floor(Math.random() * 100);
  },
  martillo: function () {
    return this.casco + " da Madrazos a pared ";
  },
};
var Jose = FabricaAlbaniles("Joe")
var Pancho = FabricaAlbaniles("Pancheezy")

