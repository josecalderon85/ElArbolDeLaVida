var FabricaIphones = function (modelo){
    var iphone = Object.create(funcionalidad);
    iphone.model = modelo
    return iphone
  };
  var funcionalidad = {
    camara: function(){
      return "Toma "+ Math.floor(Math.random() * 100)+ " fotos con mi camara chingona"
    },
    siri: function(){
      return this.model + " Este modelo cuenta con Siri!"
    }
  }
  var iphoneNegro = FabricaIphones("Iphone 8")