
   class FabricaIphones{
    constructor(modelo){
        this.model = modelo
    }
    camara(){
        return "Toma "+ Math.floor(Math.random() * 100)+ " fotos con mi camara chingona"
    }
    siri(){
     return this.model + " Este modelo cuenta con Siri!"
    }
}
var Iphone13 = new FabricaIphones("Iphone 13")
