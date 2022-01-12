var FabricaIphones = function(modelo){
    this.model = modelo
   }
   FabricaIphones.prototype.camara = function(){
       return "Toma "+ Math.floor(Math.random() * 100)+ " fotos con mi camara chingona"
   }
   FabricaIphones.prototype.siri = function(){
       return this.model + " Este modelo cuenta con Siri!"
   }
   var Iphone12 = new FabricaIphones ("Iphone 12 Pro")