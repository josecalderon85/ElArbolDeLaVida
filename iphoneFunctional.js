var fabricaIphones = function (modelo) {
    var iphoneOne = {};
    iphoneOne.camara = "2Mpx";
    iphoneOne.bateria = 1400;
    iphoneOne.OS = "3.1.3";
    iphoneOne.especificaciones = function () {
      console.log(
        "Las especificaciones del producto son las siguientes: " +
          "bateria: " +
          this.bateria +
          " ,camara: " +
          this.camara +
          ", sistema operativo: " +
          this.OS
      );
    };
    return iphoneOne;
  };
  var joesCell = fabricaIphones("primer iphone");
  