var FabricaIphones = function (modelo){
    var iphoneTwo = {}
    iphoneTwo.model = modelo
    _.extend(iphoneTwo, funcionalidad)
    return iphoneTwo;
}
var funcionalidad = {
    photo : function(){
        return "take a photo with the camera"
    },
    modelo: function(){
        return "Este es el modelo de mi iphone: " + this.model
    }
}
var iphoneDos = FabricaIphones("iPhone 3GS")