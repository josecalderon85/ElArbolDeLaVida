class FabricaAlbaniles{
    constructor(nombre){
        this.casco = nombre
    }
    metro (){
       return Math.floor(Math.random() * 100)
    }
    martillo(){
        return this.casco + (" da madrazos a la pared")
    }
   }
   var Joe = new FabricaAlbaniles("Joe")
   var Pancho = new FabricaAlbaniles("PachezzyChopin")
