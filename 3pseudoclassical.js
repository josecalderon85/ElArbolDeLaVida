
var FabricaAlbaniles = function(nombre){
    //this is what Js does for you 
    //this = {}
    this.casco = nombre

    // return this
}

FabricaAlbaniles.prototype.metro = function(){
      return Math.floor(Math.random() * 100)
}
FabricaAlbaniles.prototype.martillo = function(){
    return this.casco + " da madrazos a la pared"
}

//This is the instatiation(running "Producing from the factory")
var Joe = new FabricaAlbaniles("Joe")
var Pancho =  new FabricaAlbaniles("Pancheezy")

